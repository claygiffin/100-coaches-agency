export const getVideoEmbedUrl = (url?: string) => {
  if (!url) return ''

  // --- YOUTUBE ---
  // Matches youtube.com/watch?v=xxxx or youtu.be/xxxx
  const youtubeMatch = url.match(
    /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&?/]+)/
  )
  if (youtubeMatch) {
    return `https://www.youtube.com/embed/${youtubeMatch[1]}`
  }

  // --- VIMEO ---
  // Matches vimeo.com/xxxxxxx
  const vimeoMatch = url.match(/vimeo\.com\/(\d+)/)
  if (vimeoMatch) {
    return `https://player.vimeo.com/video/${vimeoMatch[1]}`
  }

  // If URL doesn't match YouTube or Vimeo, fallback to the original
  return url
}
