export function getWidthLevel(value: number, maxValue: number) {
  if (!isNaN(value) && maxValue !== undefined && maxValue !== 0) {
    return Math.ceil((value / maxValue) * 100);
  }
}
