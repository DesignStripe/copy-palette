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
    300: "#C9C9C9",
    400: "#555",
    500: "#212121"
  }
};

const theme = {
  dark: {
    ...colorPalette,

    colors: {
      bg: colorPalette.primary[200],
      text: {
        default: colorPalette.neutrals[100],
        disabled: colorPalette.primary[200]
      },
      button: {
        disabled: colorPalette.primary[100],
        default: colorPalette.primary[100]
      },
      badge: {
        bg: colorPalette.tertiary,
        text: colorPalette.neutrals[500]
      },
      cta: {
        bg: colorPalette.tertiary,
        text: colorPalette.neutrals[500]
      },
      input: {
        bg: colorPalette.neutrals[100],
        text: colorPalette.primary[200]
      }
    }
  },
  light: {
    colors: {
      ...colorPalette,
      background: "#D7D7F8",
      surface: "",
      text: {
        default: colorPalette.primary[300],
        disabled: colorPalette.neutrals[100]
      },
      button: {
        disabled: colorPalette.primary[100],
        default: colorPalette.primary[100]
      },
      badge: {
        bg: colorPalette.tertiary,
        text: colorPalette.neutrals[500]
      },
      cta: {
        bg: colorPalette.tertiary,
        text: colorPalette.neutrals[500]
      },
      input: {
        bg: colorPalette.neutrals[100],
        text: colorPalette.neutrals[100]
      }
    }
  },
  defaultColor: colorPalette.tertiary
};

export default theme;
