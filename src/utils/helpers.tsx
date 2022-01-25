export const toSlug = (string: string) =>
  string
    .replace(/[\s/]+/g, '-')
    .replace(/[^\w\d-]+/g, '')
    .replace(/--+/g, '-')
    .toLowerCase()
