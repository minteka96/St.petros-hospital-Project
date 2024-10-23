import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./markup/components/Header/Header";
import Footer from "./markup/components/Footer/Footer";
import Home from "./markup/pages/Home/Home";
import Services from "./markup/pages/servicepage/Services";
import About from "./markup/pages/AboutPage/About";

import Cpd from "./markup/pages/CPD/cpd";
import "./style/css/style.css";
import News from "./markup/pages/News/News";
import NewsDetails from "./markup/pages/News/NewsDetails";
// import "./style/customCSS/custom.css"

import AddTenderForm from "./markup/components/Admin/AddTenderForm/AddTenderForm.jsx";
import TenderSubmitForm from "./markup/components/Admin/AddTenderForm/TenderSubmitForm.jsx";
import TenderList from "./markup/components/Admin/AddTenderForm/TenderLists.jsx";
import AllTenderFormDetails from "./markup/components/Admin/AddTenderForm/AllTenderFormDetails.jsx";


function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />

        <Route path="/News" element={<News />} />
        <Route path="/news-details" element={<NewsDetails />} />


        <Route path="/cpd" element={<Cpd />} />

        {/* Tender Routes */}
        <Route path="/tender-list" element={<TenderList />} />
        <Route path="/tender-form-submit" element={<TenderSubmitForm />} />
        <Route
          path="/all-tender-form-details/:tenderNo"
          element={<AllTenderFormDetails />}
        />
        <Route path="/tender-form-post/:tenderNo" element={<AddTenderForm />} />
        <Route path="/tender-form-post" element={<AddTenderForm />} />


      </Routes>
      <Footer />
    </div>
  );
}

export default App;
