export function getInitials(fullName: string): string {
  return fullName
    .trim()
    .split(" ")
    .filter(Boolean) // removes extra spaces
    .map((name) => name[0].toUpperCase())
    .join("");
}
