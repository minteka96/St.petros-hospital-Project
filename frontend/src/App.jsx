// import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./markup/components/Header/Header";
import Footer from "./markup/components/Footer/Footer";
import Home from "./markup/pages/Home/Home";
import Services from "./markup/pages/servicepage/Services";
import About from "./markup/pages/AboutPage/About";
import "./style/css/style.css";
// import "./style/customCSS/custom.css"
function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
