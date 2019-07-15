import reshader from "reshader";

function createPalette(color, variations, contrast) {
  const { palette } = reshader(color, {
    numberOfVariations: variations,
    contrastRatio: contrast
  });
  return palette;
}

export default createPalette;
