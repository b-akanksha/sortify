export function convertArrayStringToArray(string) {
  return string
    .split(",")
    .filter((v) => v !== "")
    .map((v) => +v);
}
