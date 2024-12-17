/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./markup/components/Header/Header";
import Footer from "./markup/components/Footer/Footer";
import Home from "./markup/pages/Home/Home";
import Services from "./markup/pages/servicepage/Services";
import HealthTip from "./markup/components/Header/HealthTip.jsx";
import ServiceDetail from "./markup/pages/serviceDetaile/ServiceDetail.jsx";
import Cardiology from "./markup/pages/serviceDetaile/cardac/Cardiology";
import MCH from "./markup/pages/serviceDetaile/mch/MCH";
import Neurology from "./markup/pages/serviceDetaile/neurology/Neurology";
import Orthopedics from "./markup/pages/serviceDetaile/Orthopedics/Orthopedics";
import ART from "./markup/pages/serviceDetaile/ART/ART";
import Dermatology from "./markup/pages/serviceDetaile/Dermatology/Dermatology";
import DrTbTreatment from "./markup/pages/serviceDetaile/DR-TB/DR-TB Treatment";
import Pediatrics from "./markup/pages/serviceDetaile/Pediatrics/Pediatrics";
import ENT from "./markup/pages/serviceDetaile/ENT/ENT.jsx";
import Medical from "./markup/pages/serviceDetaile/medical/Medical";
import Toxicology from "./markup/pages/serviceDetaile/Toxicology/Toxicology";
import Surgery from "./markup/pages/serviceDetaile/Surgical/Surgery";
import Urology from "./markup/pages/serviceDetaile/Urology/Urology";
import GeneralLab from "./markup/pages/serviceDetaile/lab/GeneralLab";
import Pharmacy from "./markup/pages/serviceDetaile/Pharmacy/Pharmacy";
import Dental from "./markup/pages/serviceDetaile/Dental/Dental";
import ICU from "./markup/pages/serviceDetaile/ICU/ICU";
import Emergency from "./markup/pages/serviceDetaile/Emergency/Emergency";
import Pathology from "./markup/pages/serviceDetaile/Pathology/Pathology";
import Psychiatric from "./markup/pages/serviceDetaile/Psychiatric/Psychiatric";
import Imaging from "./markup/pages/serviceDetaile/Imaging/Imaging.jsx";
import About from "./markup/pages/AboutPage/About";
import Contact from "./markup/pages/Contact/Contact.jsx";
import Cpd from "./markup/pages/CPD/cpd.jsx";
import "./style/css/style.css";
import AddTenderForm from "./markup/components/Admin/AddTenderForm/AddTenderForm.jsx";
import TenderSubmitForm from "./markup/components/Admin/AddTenderForm/TenderSubmitForm.jsx";
import TenderList from "./markup/components/Admin/AddTenderForm/TenderLists.jsx";
import AllTenderFormDetails from "./markup/components/Admin/AddTenderForm/AllTenderFormDetails.jsx";
import Vacancies from "./markup/pages/Jobs/Vacancies.jsx";
import ApplicationForm from "./markup/pages/Jobs/ApplicationForm.jsx";
import HealthWorkerINfo from "./markup/pages/HealthWorkerEntertainment/HealthWorkerEntertainment .jsx";
import QulityResearch from "./markup/pages/qulity&research/qulityResearch.jsx";
import ResearchPublication from "./markup/pages/qulity&research/ResearchPublication.jsx";
import AdminRoute from "./markup/routes/AdminRoute.jsx";
import ApplicationForms from "../src/markup/pages/testApplicant.jsx";
import Login from "./markup/pages/Login/Login.jsx";

// ***************************News Client Side ********************
import News from "../src/markup/pages/News/News.jsx";
import NewsDetails from "../src/markup/pages/News/NewsDetails.jsx";
import newsList from "./markup/components/Admin/NewsList/NewsList.jsx";
import ApplicantForms from "./markup/pages/Jobs/ApplicationForm.jsx";

function App() {
  // check if thr route is '/login' or not
  if (window.location.pathname === "/login") {
    
  } 
  return (
    <div>
      {["/login", "/admin"].some((path) =>
        window.location.pathname.startsWith(path)
      ) ? null : (
        <Header />
      )}

      <Routes>
        {/* *************************News Client Side Start Here*********************** */}
        <Route path="/news" element={<News />} />
        {/* <Route path="/newsDetails" element={<NewsDetails />} /> */}
        <Route
          path="/newsDetails/:newsId"
          element={<NewsDetails newsList={newsList} />}
        />
        {/* **************************News Client Side End Here********************** */}
        <Route path="/login" element={<Login />} />
        <Route path="/test" element={<ApplicationForms />} />
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/cpd" element={<Cpd />} />
        <Route path="/healhtip" element={<HealthTip />}></Route>
        <Route
          path="/HealthWorkerEntertainment"
          element={<HealthWorkerINfo />}
        ></Route>
        {/* service detail page */}
        <Route path="/servicedetail" element={<ServiceDetail />}>
          <Route path="neurology" element={<Neurology />} />
          <Route path="cardiology" element={<Cardiology />} />
          <Route path="mch" element={<MCH />} />
          <Route path="orthopedics" element={<Orthopedics />} />
          <Route path="art" element={<ART />} />
          <Route path="dermatology" element={<Dermatology />} />
          <Route path="dr-tb-treatment" element={<DrTbTreatment />} />
          <Route path="pediatrics" element={<Pediatrics />} />
          <Route path="ent" element={<ENT />} />
          <Route path="medical" element={<Medical />} />
          <Route path="toxicology" element={<Toxicology />} />
          <Route path="surgery" element={<Surgery />} />
          <Route path="urology" element={<Urology />} />
          <Route path="generallab" element={<GeneralLab />} />
          <Route path="pharmacy" element={<Pharmacy />} />
          <Route path="dental" element={<Dental />} />
          <Route path="icu" element={<ICU />} />
          <Route path="emergency" element={<Emergency />} />
          <Route path="pathology" element={<Pathology />} />
          <Route path="psychiatric" element={<Psychiatric />} />
          <Route path="imaging" element={<Imaging />} />
        </Route>

        <Route path="/application/form" element={<ApplicantForms />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/qulity&research" element={<QulityResearch />} />
        <Route path="/researchpublication" element={<ResearchPublication />} />
        <Route path="/tender-list" element={<TenderList />} />
        <Route path="/tender-form-submit" element={<TenderSubmitForm />} />
        <Route
          path="/all-tender-form-details/:tenderNo"
          element={<AllTenderFormDetails />}
        />
        <Route path="/tender-form-post/:tenderNo" element={<AddTenderForm />} />
        <Route path="/tender-form-post" element={<AddTenderForm />} />
        <Route path="/Jobs" element={<Vacancies />} />
        <Route path="/admin/application-form" element={<ApplicationForm />} />

        <Route path="/admin/*" element={<AdminRoute />} />
      </Routes>
      {["/login", "/admin"].some((path) =>
        window.location.pathname.startsWith(path)
      ) ? null : (
        <Footer />
      )}
    </div>
  );
}

export default App;
