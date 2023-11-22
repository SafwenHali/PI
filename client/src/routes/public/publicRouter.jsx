import React from "react";
import {
    BrowserRouter as Router,
    Route,
    BrowserRouter,
    Routes,
  } from "react-router-dom";

  import Home from "../../pages/Home"
  import Nav from "../../components/navbar"
  
  function App() {
      return(       
            <BrowserRouter>
            <Nav/>
                  <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/Home" element={<Home />} />
                  </Routes>
              </BrowserRouter>
      )
  }
  export default App;