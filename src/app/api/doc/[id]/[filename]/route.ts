// app/api/doc/[id]/[filename]/route.ts
import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic' // always evaluate at request time

type Upload = {
  url: string
  filename: string
  mimeType: string | null
}

const getUpload = async (id: string): Promise<Upload | null> => {
  const res = await fetch('https://graphql.datocms.com/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.DATOCMS_API_TOKEN!}`,
      ...(process.env.DATOCMS_ENVIRONMENT && {
        'X-Environment': process.env.DATOCMS_ENVIRONMENT,
      }),
      ...(process.env.DATOCMS_DRAFT_MODE === 'true'
        ? { 'X-Include-Drafts': 'true' }
        : {}),
    },
    cache: 'no-store',
    body: JSON.stringify({
      query: `
        query($id: UploadId) {
          upload(filter: { id: { eq: $id } }) {
            url
            filename
            mimeType
          }
        }
      `,
      variables: { id },
    }),
  })

  const json = await res.json()
  const u = json?.data?.upload
  if (!u?.url) return null
  return u as Upload
}

const copyHeader = (h: string, from: Headers, to: Headers) => {
  const v = from.get(h)
  if (v) to.set(h, v)
}

const streamFrom = async (url: string, req: Request) => {
  const headers: HeadersInit = {}
  const range = req.headers.get('range')
  if (range) headers['Range'] = range

  return fetch(url, {
    headers,
    // don’t cache the upstream at the server; we'll control caching on the response we send to the CDN
    cache: 'no-store',
  })
}

export const GET = async (
  req: Request,
  ctx: RouteContext<'/api/doc/[id]/[filename]'>
) => {
  const { id, filename } = await ctx.params
  const u = await getUpload(id)
  if (!u)
    return NextResponse.json({ error: 'Not found' }, { status: 404 })

  const upstream = await streamFrom(u.url, req)
  if (!upstream.ok && upstream.status !== 206) {
    return NextResponse.json(
      { error: 'Upstream error' },
      { status: 502 }
    )
  }

  // Build the response, forwarding important headers
  const outHeaders = new Headers()
  copyHeader('content-type', upstream.headers, outHeaders)
  copyHeader('content-length', upstream.headers, outHeaders)
  copyHeader('content-range', upstream.headers, outHeaders)
  copyHeader('accept-ranges', upstream.headers, outHeaders)
  copyHeader('etag', upstream.headers, outHeaders)
  copyHeader('last-modified', upstream.headers, outHeaders)

  outHeaders.set(
    'Content-Disposition',
    `inline; filename="${(u.filename || filename).replace(/"/g, '')}"`
  )
  outHeaders.set(
    'Cache-Control',
    // Cache at the CDN for a long time, but allow fast refresh via a versioned URL (?v=...)
    'public, s-maxage=31536000, stale-while-revalidate=604800'
  )
  outHeaders.set('X-Content-Type-Options', 'nosniff')

  return new Response(upstream.body, {
    status: upstream.status,
    headers: outHeaders,
  })
}

// Optional: HEAD handler for preflight/file size checks
export const HEAD = GET
