// import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./markup/components/Header/Header";
import Footer from "./markup/components/Footer/Footer";
import Home from "./markup/pages/Home/Home";
import About from "./markup/pages/AboutPage/About";
import Cpd from "./markup/pages/CPD/cpd";
import "./style/css/style.css";
// import "./style/customCSS/custom.css"
function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cpd" element={<Cpd />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
