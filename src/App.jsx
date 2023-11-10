import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
// import Navbar from "./components/Navbar/Navbar";
// import { Container } from "@mui/material";
import CustomRoute from "./Routes/CustomRoute";
import theme from "./style/Theme";

import Footer from "./components/Footer/Footer";
import Cart from "./Pages/Cart/Cart";

function App() {
  return (
    // <Container
    //   maxWidth="xl"
    //   elevation={0}
    //   disableGutters={true}
    //   sx={{ background: "primary.dark" }}
    // >
    <div>
      <Router>
        {/* <Navbar /> */}
        <CustomRoute />
        <Footer />
      </Router>
    </div>

    // </Container>
  );
}

export default App;
