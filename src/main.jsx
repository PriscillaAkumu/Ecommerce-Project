import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
import GlobalStyles from "./GlobalStyle.jsx";
import { ThemeProvider } from "@mui/system";
import theme from "./style/Theme";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<ThemeProvider theme={theme}>
<GlobalStyles />
  <App />
</ThemeProvider>
     

  </React.StrictMode>,
)
