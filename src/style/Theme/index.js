import { createTheme } from '@mui/material/styles';

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
  },
});

export default theme;
