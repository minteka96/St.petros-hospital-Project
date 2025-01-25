/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./markup/components/Header/Header";
import Footer from "./markup/components/Admin/Footer/Footer";
import Home from "./markup/pages/Home/Home";

// ***************************servicesdetail Client Side ********************
import Services from "./markup/pages/servicepage/Services.jsx";
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
import CpdLoginSignup from "./markup/pages/CpdLogin/SignUpSignIn.jsx";
import TraineeAddForm from "./markup/components/Admin/Trainer/TraineeAddForm.jsx";

import "./style/css/style.css";

import AddTenderForm from "./markup/components/Admin/AddTenderForm/AddTenderForm.jsx";
import TenderSubmitForm from "./markup/components/Admin/AddTenderForm/TenderSubmitForm.jsx";
import TenderList from "./markup/components/Admin/AddTenderForm/TenderLists.jsx";
import AllTenderFormDetails from "./markup/components/Admin/AddTenderForm/AllTenderFormDetails.jsx";
import Vacancies from "./markup/pages/Jobs/Vacancies.jsx";
import ApplicationForm from "./markup/pages/Jobs/ApplicationForm.jsx";
import HealthWorkerINfo from "./markup/pages/HealthWorkerEntertainment/HealthWorkerEntertainment .jsx";
import QulityResearch from "./markup/pages/qulity&research/QulityResearch.jsx";
import ResearchPublication from "./markup/pages/qulity&research/ResearchPublication.jsx";
import AdminRoute from "./markup/routes/AdminRoute.jsx";
import CpdTraineesRoute from "./markup/routes/CpdTraineesRoute.jsx";
import Login from "./markup/pages/Login/Login.jsx";

// ***************************News Client Side ********************
import News from "../src/markup/pages/News/News.jsx";
import NewsDetails from "../src/markup/pages/News/NewsDetails.jsx";
import newsList from "./markup/components/Admin/NewsList/NewsList.jsx";
import ApplicantForms from "./markup/pages/Jobs/ApplicationForm.jsx";

// ***************************healthtip Client Side ********************
import HealthTip from "./markup/pages/healthtips/HealthTip.jsx";
import HealthTipDetail from "./markup/pages/healthtips/healthtipdetail/healthtipdetail.jsx";
import HealthTipList from "./markup/components/Admin/HealthTipList/HealthTipList.jsx";
import CpdNews from "./markup/pages/CPD/Cpdnews.jsx";
import GenerateCertificate from "./markup/components/GenerateCertificate/GenerateCertificate.jsx";
// import CertificateGenerator from "./markup/components/TraineesDashboard/CertificateGenerator.jsx";
import ContactForm from "./markup/pages/Contact/contactForm/ContactForm.jsx";
import ResearchPublications from "./markup/pages/qulity&research/ResearchPublication.jsx";



function App() {
  // Check if the route is '/login', '/admin','/cpd/login' or '/cpdadmin'
  const shouldHideHeaderFooter = [
    "/login",
    "/admin",
    "/cpd/login",
    "/cpd",
  ].some((path) => window.location.pathname.startsWith(path));

  return (
    <div>
      {/* Conditionally render Header based on route */}
      {!shouldHideHeaderFooter && <Header />}

      <Routes>
        {/* *************************News Client Side Start Here*********************** */}
        <Route path="/news" element={<News />} />
        <Route path="/GenerateCertificate" element={<GenerateCertificate />} />
        <Route path="/news-cpd" element={<CpdNews />} />
        <Route
          path="/newsDetails/:newsId"
          element={<NewsDetails newsList={newsList} />}
        />
        <Route path="/healthtip" element={<HealthTip />} />
        <Route
          path="/healthTipDetails/:healthTipId"
          element={<HealthTipDetail HealthTipList={HealthTipList} />}
        />
        {/* **************************News Client Side End Here********************** */}
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        {/* <Route path="/cpd/" element={<CpdLogin />} /> */}
        <Route path="/cpd/login" element={<CpdLoginSignup />} />
        <Route path="/cpd/trainee-info" element={<TraineeAddForm />} />
        <Route
          path="/HealthWorkerEntertainment"
          element={<HealthWorkerINfo />}
        />

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
        <Route path="/contact" element={<Contact />}>
          <Route path="/contactform" element={<ContactForm />} />
        </Route>
        <Route path="/application/form" element={<ApplicantForms />} />
        <Route path="/about" element={<About />} />
        <Route path="/qulity&research" element={<QulityResearch />} />
        <Route path="/researchpublication" element={<ResearchPublications />} />
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
        <Route path="/cpd/*" element={<CpdTraineesRoute />} />
      </Routes>

      {/* Conditionally render Footer based on route */}
      {!shouldHideHeaderFooter && <Footer />}
    </div>
  );
}

export default App;
