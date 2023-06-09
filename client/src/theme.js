// color design tokens export
export const colorTokens = {
  base: {
    0: "#FEF9F2",
    10: "#FEF6ED",
    50: "#FDF3E7",
    100: "#FDF1E1",
    200: "#FCEEDC",
    300: "#D6C9B9",
    400: "#B0A699",
    500: "#8B8278",
    600: "#655F57",
    700: "#3F3B37",
    800: "#191816",
    900: "#0A0A0A",
    1000: "#000000",
  },
  primary: {
    50: "#F8B8AE",
    100: "#F7A79A",
    200: "#F59585",
    300: "#F38371",
    400: "#F1715D",
    500: "#EF573E",
    600: "#B33B27",
    700: "#6B2317",
    800: "#240C08",
    900: "#180805",
  },
};

// mui theme settings
export const themeSettings = mode => {
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            // palette values for dark mode
            primary: {
              dark: colorTokens.primary[200],
              main: colorTokens.primary[500],
              light: colorTokens.primary[600],
            },
            neutral: {
              dark: colorTokens.base[100],
              main: colorTokens.base[200],
              mediumMain: colorTokens.base[300],
              medium: colorTokens.base[400],
              light: colorTokens.base[700],
            },
            background: {
              default: colorTokens.base[900],
              alt: colorTokens.base[800],
            },
          }
        : {
            // palette values for light mode
            primary: {
              dark: colorTokens.primary[700],
              main: colorTokens.primary[500],
              light: colorTokens.primary[50],
            },
            neutral: {
              dark: colorTokens.base[700],
              main: colorTokens.base[500],
              mediumMain: colorTokens.base[400],
              medium: colorTokens.base[400],
              light: colorTokens.base[200],
            },
            background: {
              default: colorTokens.base[200],
              alt: colorTokens.base[10],
            },
          }),
    },
    typography: {
      fontFamily: ["Rubik", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};
