import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      light: '#FAF4F4',
      main: '#fff',
      dark: '#FBEBB5',
      text: '#000',
      border: '#000',
    },
    secondary: {
      light: '#ff7961',
      main: '#9F9F9F',
      text: '#9F9F9F',
    },
  },
  typography: {
    fontFamily: 'Poppins, sans-serif',
    cart: {
      fontSize: '32px',
      fontWeight: 600,
      lineHeight: '48px',
      textAlign: 'center',
      color: '#000',
      '@media (max-width: 600px)': {
        fontSize: '24px',
      },
    },
    h4: {
      fontSize: '1.875rem',
      fontWeight: 400,
      marginBottom: '20px',
    },
    h5: {
      fontSize: '18px',
      fontWeight: 500,
      marginBottom: '20px',
    },
    h6: {
      fontSize: '16px',
      fontWeight: 400,
      lineHeight: '24px',
    },
    body: {
      fontSize: '13px',
      fontWeight: 400,
      lineHeight: '19.5px',
      marginTop: '10px',
    },
    subtitle1: {
      lineHeight: '36px',
      fontWeight: 400,
    },

    subtitle2: {
      fontSize: '16px',
      fontWeight: 400,
      lineHeight: '24px',
    },
    heading: {},
    poster: {
      fontSize: '16px',
      fontWeight: 500,
      lineHeight: '24px',
      color: '#000',
    },
    subtotal: {
      fontSize: '16px',
      fontWeight: 400,
      lineHeight: '24px',
      color: '#9F9F9F',
    },
    total: {
      fontSize: '20px',
      fontWeight: 500,
      lineHeight: '30px',
      color: '#B88E2F',
    },
  },
});

export default theme;
