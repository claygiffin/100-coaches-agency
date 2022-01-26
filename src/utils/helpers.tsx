export const toSlug = (string: string) =>
  string
    .replace(/[\s/]+/g, '-')
    .replace(/[^\w\d-]+/g, '')
    .replace(/--+/g, '-')
    .toLowerCase()

export const focalPoint = (focalPoint: { x: number; y: number }) => {
  const safeFocalPointX = focalPoint ? focalPoint.x : 0.5
  const safeFocalPointY = focalPoint ? focalPoint.y : 0.5
  return `${safeFocalPointX * 100}% ${safeFocalPointY * 100}%`
}
