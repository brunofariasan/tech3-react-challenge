export const theme = {
  colors: {
    transparent: 'transparent',
    white: '#FFFFFF',
    light10: '#F8F9FC',
    deepNavyBlue: '#3D5A73',
    deepSlateBlue: '#2F3D40',
    deepCharcoalBlue: '#2F3237',
    deepForestGreen: '#28403D',
    darkCharcoal: '#182625',
    gray: '#d9d9d9',
    black: '#000',
    red: '#ff5959',
    green: '#28a745',
  },
  font: {
    family: {
      primary: 'Mulish, sans-serif',
    },
    sizes: {
      xxsmall: '1.2rem',
      xsmall: '1.4rem',
      small: '1.6rem',
      medium: '1.8rem',
      large: '2rem',
      xlarge: '2.4rem',
      xxlarge: '2.6rem',
      big: '2.8rem',
      xbig: '3.2rem',
      huge: '3.8rem',
      xhuge: '4rem',
      xxhuge: '4.8rem',
      xxxhuge: '6rem',
    },
    weight: {
      light: 300,
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extraBold: 800,
      black: 900,
    },
  },
};

export type ThemeType = typeof theme;
