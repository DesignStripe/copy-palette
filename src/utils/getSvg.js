import { SIZE, GUTTER, BASE_SIZE } from "../constants";

function getSvg(colors, type) {
  if (type === 1) return rounded(colors);
  else if (type === 2) return sharp(colors);
  else return null;
}

function rounded(colors) {
  const length = colors.length;

  return `
    <svg
      width="${(length - 1) * (SIZE + GUTTER) + 64}"
      height="${BASE_SIZE}"
    >
  ${colors
    .map((color, index) => {
      const medium = (length - 1) / 2;
      const isBase = index === medium;

      const size = isBase ? BASE_SIZE : SIZE;

      const baseOffset = index > medium ? BASE_SIZE - SIZE : 0;
      const x = index * (GUTTER + SIZE) + baseOffset;
      const y = isBase ? 0 : (BASE_SIZE - SIZE) / 2;

      return `<rect rx="8" width="${size}" height="${size}" x="${x}" y="${y}" fill="${color}" />`;
    })
    .join(" \n")}
  </svg>
  `;
}

function sharp(colors) {
  const length = colors.length;

  return `
    <svg
      width="${length * SIZE}"
      height="${SIZE}"
    >
  ${colors
    .map((color, index) => {
      const x = index * SIZE;
      const y = 0;

      return `<rect width="${SIZE}" height="${SIZE}" x="${x}" y="${y}" fill="${color}" />`;
    })
    .join(" \n")}
  </svg>
  `;
}

export default getSvg;
