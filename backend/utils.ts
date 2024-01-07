export function isInteger(input: string) {
  return input?.match(/^[0-9]+$/) ?? false
}