export const srcSetCandidates = (
  ...{ width, breakpoints = [1440, 1260, 1080, 720, 540, 360, 180] }: {
    width: number
    breakpoints?: number[]
  }
) => {
  return breakpoints.map(size => size / width)
}
export const focalPoint = (focalPoint: { x: number; y: number }) => {
  const safeFocalPointX = focalPoint ? focalPoint.x : 0.5
  const safeFocalPointY = focalPoint ? focalPoint.y : 0.5
  return `${safeFocalPointX * 100}% ${safeFocalPointY * 100}%`
}