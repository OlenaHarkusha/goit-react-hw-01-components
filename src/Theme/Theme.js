import { ThemeProvider } from 'styled-components';

export const theme = {
  colors: {
    white: '#ffffff',
    background: '#e7ecf2',
    grey: '#F3F6F9',
    darkGrey: '#cccdce',
    mainFont: '#212121',
    secondaryFont: '#505050',
    red: '#FF5152',
    green: '#4AB04C',
    blue: '#00BCD5',
  },

  radii: {
    none: '0',
    normal: '4px',
    large: '10px',
    round: '50%',
  },

  borders: {
    none: 'none',
    normal: '1px solid',
  },

  fontSizes: {
    xs: '12px',
    s: '14px',
    m: '16px',
    l: '28px',
    xl: '36px',
  },

  fontWeights: {
    normal: 400,
    bold: 700,
  },
};

export const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
