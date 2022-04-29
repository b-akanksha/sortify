export default function initArrayForScreenSize() {
  const screenSize = window.innerWidth;
  if (screenSize < 460) return [6, 9, 3, 8];
  else if (screenSize < 720) return [9, 6, 8, 5, 7, 2, 4, 3];
  return [9, 11, 12, 10, 8, 6, 4, 5, 7, 1, 2, 3];
}
