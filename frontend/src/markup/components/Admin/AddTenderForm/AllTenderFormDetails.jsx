import React, { useState } from "react";
// import "./AddTenderForm.css"; // Assuming you will style here
import "./AddTenderFormDetails.css"; // Assuming you will style here
import logo from "../../../../assets/img/images/logo copy.png";
import TenderSubmitForm from "./TenderSubmitForm"; // Import TenderSubmitForm
import { Link } from "react-router-dom";
const AllTenderFormDetails = () => {
  // Set the initial form data directly in the state
  const [formData, setFormData] = useState([
    {
      tenderTitle: "Insurance corporate partnership with St. Petros Hospital",
      description: "Detailed proposal for corporate insurance partnership.",
      category: "Pharmaceuticals",
      openingDate: "28 Aug 2024",
      closingDate: "11 Sep 2024",
      estimatedBudget: "50000",
      timeline: "6 months",
    },
    {
      tenderTitle: "Provision RFP for Managed Service Provider",
      description: "Request for proposal to manage IT services.",
      category: "IT Services",
      openingDate: "05 Jul 2024",
      closingDate: "18 Jul 2024",
      estimatedBudget: "20000",
      timeline: "12 months",
    },
    {
      tenderTitle: "Construction Services",
      description: "Proposal for hospital expansion and construction services.",
      category: "Construction",
      openingDate: "12 Aug 2024",
      closingDate: "28 Sep 2024",
      estimatedBudget: "150000",
      timeline: "18 months",
    },
    {
      tenderTitle: "Cleaning Services Proposal",
      description: "Tender for professional cleaning services.",
      category: "Cleaning Services",
      openingDate: "15 Sep 2024",
      closingDate: "30 Sep 2024",
      estimatedBudget: "30000",
      timeline: "3 months",
    },
    {
      tenderTitle: "Vehicle Supply Tender",
      description: "Proposal for the supply of vehicles.",
      category: "Cars",
      openingDate: "01 Oct 2024",
      closingDate: "15 Oct 2024",
      estimatedBudget: "80000",
      timeline: "4 months",
    },
  ]);

  const [isTenderFormVisible, setTenderFormVisible] = useState(false); // State to control visibility of TenderSubmitForm

  const toggleForm = () => {
    setTenderFormVisible((prev) => !prev); // Toggle form visibility
  };

  return (
    <div className="add-tender-form">
      {/* Logo Section */}
      <Link to="/">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
        </div>
      </Link>

      <h1>Details of all tenders</h1>

      {/* Display each tender's details */}
      {formData.map((tender, index) => (
        <div key={index} className="tender-card">
          <h3>{tender.tenderTitle}</h3>
          <p>
            <strong>Description:</strong> {tender.description}
          </p>
          <p>
            <strong>Category:</strong> {tender.category}
          </p>
          <p>
            <strong>Opening Date:</strong> {tender.openingDate}
          </p>
          <p>
            <strong>Closing Date:</strong> {tender.closingDate}
          </p>
          <p>
            <strong>Estimated Budget:</strong> ${tender.estimatedBudget}
          </p>
          <p>
            <strong>Timeline:</strong> {tender.timeline}
          </p>
        </div>
      ))}

      {/* Toggle for displaying the TenderSubmitForm */}
      <h4
        className="mt-3"
        onClick={toggleForm}
        style={{
          cursor: "pointer",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        Submit your Form
        <span className="close-btn">{isTenderFormVisible ? "✖" : "➕"}</span>
      </h4>

      {/* Form to add a new tender (using TenderSubmitForm) */}
      {isTenderFormVisible && <TenderSubmitForm />}
    </div>
  );
};

export default AllTenderFormDetails;
