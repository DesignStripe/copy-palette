const colorPalette = {
  primary: {
    100: "#366ED8",
    200: "#064acb",
    300: "#083284"
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
      background: colorPalette.primary[200],
      text: {
        default: colorPalette.neutrals[100],
        disabled: colorPalette.primary[200]
      },
      options: {
        background: colorPalette.primary[300],
        text: colorPalette.neutrals[100]
      },
      button: {
        disabled: colorPalette.primary[200],
        default: colorPalette.primary[100],
        text: colorPalette.neutrals[100],
        textDisabled: colorPalette.primary[300]
      },
      badge: {
        bg: colorPalette.tertiary,
        text: colorPalette.neutrals[500]
      },
      cta: {
        bg: colorPalette.neutrals[100],
        text: colorPalette.primary[300]
      },
      input: {
        bg: colorPalette.neutrals[100],
        text: colorPalette.primary[200]
      },
      previewBorder: colorPalette.primary[300],
      slider: colorPalette.neutrals[100]
    }
  },
  light: {
    colors: {
      ...colorPalette,
      background: colorPalette.neutrals[200],
      surface: "",
      text: {
        default: colorPalette.primary[300],
        disabled: colorPalette.neutrals[100]
      },
      options: {
        background: colorPalette.neutrals[100],
        text: colorPalette.primary[300]
      },
      button: {
        disabled: colorPalette.primary[100],
        default: colorPalette.primary[300],
        text: colorPalette.neutrals[100],
        textDisabled: colorPalette.primary[300]
      },
      badge: {
        bg: colorPalette.tertiary,
        text: colorPalette.neutrals[500]
      },
      cta: {
        bg: colorPalette.primary[300],
        text: colorPalette.neutrals[100]
      },
      input: {
        bg: colorPalette.neutrals[200],
        text: colorPalette.primary[300]
      },
      previewBorder: colorPalette.primary[300],
      slider: colorPalette.primary[300]
    }
  },
  defaultColor: colorPalette.tertiary
};

export default theme;
