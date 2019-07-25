const colorPalette = {
  primary: {
    100: "#B2CCFD",
    200: "#8CB2FC",
    300: "#064acb",
    400: "#032A73",
    500: "#021D4F"
  },
  secondary: "#083284",
  tertiary: "#F3A953",
  neutrals: {
    100: "#fff",
    200: "#f5f5f5",
    300: "#e5e5e5",
    400: "#555",
    500: "#212121"
  }
};

const theme = {
  dark: {
    colors: {
      ...colorPalette,
      background: colorPalette.primary[500],
      text: {
        default: colorPalette.neutrals[100],
        disabled: colorPalette.primary[300]
      },
      options: {
        background: colorPalette.primary[400],
        text: colorPalette.neutrals[100]
      },
      button: {
        disabled: colorPalette.primary[400],
        default: colorPalette.primary[300],
        text: colorPalette.neutrals[100],
        textDisabled: colorPalette.primary[500]
      },
      badge: {
        bg: colorPalette.tertiary,
        text: colorPalette.neutrals[500]
      },
      cta: {
        bg: colorPalette.neutrals[100],
        text: colorPalette.primary[500]
      },
      input: {
        bg: colorPalette.neutrals[100],
        text: colorPalette.primary[300]
      },
      previewBorder: colorPalette.primary[400],
      slider: colorPalette.neutrals[100]
    }
  },
  light: {
    colors: {
      ...colorPalette,
      background: colorPalette.primary[100],
      surface: "",
      text: {
        default: colorPalette.primary[500],
        disabled: colorPalette.neutrals[100]
      },
      options: {
        background: colorPalette.primary[200],
        text: colorPalette.primary[500]
      },
      button: {
        disabled: colorPalette.primary[100],
        default: colorPalette.primary[500],
        text: colorPalette.neutrals[100],
        textDisabled: colorPalette.primary[500]
      },
      badge: {
        bg: colorPalette.tertiary,
        text: colorPalette.neutrals[500]
      },
      cta: {
        bg: colorPalette.primary[500],
        text: colorPalette.neutrals[100]
      },
      input: {
        bg: colorPalette.neutrals[200],
        text: colorPalette.primary[500]
      },
      previewBorder: colorPalette.primary[200],
      slider: colorPalette.primary[500]
    }
  },
  defaultColor: colorPalette.tertiary
};

export default theme;
