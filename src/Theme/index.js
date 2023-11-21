import { createTheme, } from "@mui/material";

const theme = createTheme ({


  palette: {
    primary: {
      light: "#FAF4F4",
      main: "#fff",
      dark: "#FBEBB5",
      text: "#000",
      border: "#000",
    },
    secondary: {
      light: "#ff7961",
      main: "#9F9F9F",
      text: "#9F9F9F",
    },
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
    h4: {
      fontSize: "1.875rem",
      fontWeight: 400,
      marginBottom: "20px",
    },
    h6: {
      fontSize: "18px",
      fontWeight: 500,
      marginBottom: "20px",
    },
    body: {
      fontSize: "13px",
      fontWeight: 400,
      lineHeight: "19.5px",
      marginTop: "10px",
    },
subtitle1:{
 lineHeight: '36px',
 fontWeight:400,
}, 

subtitle2:{
  fontSize: '16px', 
  fontWeight: 400, 
  lineHeight: '24px',
}
  },
})
;

export default theme;



