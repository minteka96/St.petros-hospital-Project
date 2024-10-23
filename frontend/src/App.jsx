// import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./markup/components/Header/Header";
import Footer from "./markup/components/Footer/Footer";
import Home from "./markup/pages/Home/Home";
import About from "./markup/pages/AboutPage/About";
import "./style/css/style.css";
import News from "./markup/pages/News/News";
import NewsDetails from "./markup/pages/News/NewsDetails";
// import "./style/customCSS/custom.css"
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/News" element={<News />} />
        <Route path="/news-details" element={<NewsDetails />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
