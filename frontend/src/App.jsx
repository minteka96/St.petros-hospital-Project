import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./markup/components/Header/Header";
import Footer from "./markup/components/Footer/Footer";
import Home from "./markup/pages/Home/Home";
import About from "./markup/pages/AboutPage/About";
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
        <Route path="/about" element={<About />} />
        {/* Tender Routes */}
        <Route path="/tender-list" element={<TenderList />} />
        <Route path="/tender-list/:tenderNo" element={<TenderList />} />
        <Route path="/tender-form-submit" element={<TenderSubmitForm />} />
        <Route
          path="/all-tender-form-details/:tenderNo"
          element={<AllTenderFormDetails />}/>
        <Route path="/tender-form-post/:tenderNo" element={<AddTenderForm />} />
        <Route path="/tender-form-post" element={<AddTenderForm />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
