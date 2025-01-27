/* eslint-disable no-unused-vars */
// src/components/AddVacancyForm.jsx

import React, { useState } from "react";
import { addVacancy } from "../../../Util/api/api";
import classes from "./AddVacancyForm.module.css";

const AddVacancyForm = () => {
  const [jobTitle, setJobTitle] = useState("");
  const [qualification, setQualification] = useState("");
  const [experience, setExperience] = useState("");
  const [jobGrade, setJobGrade] = useState("");
  const [salary, setSalary] = useState("");
  const [address, setAddress] = useState("");
  const [howToApply, setHowToApply] = useState("");
  const [location, setLocation] = useState("");
  const [type, setType] = useState("full-time");
  const [deadline, setDeadline] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formattedData = {
      jobTitle: jobTitle.trim(),
      qualification: qualification.trim(),
      experience: experience.trim(),
      jobGrade: jobGrade.trim(),
      salary: salary.trim(),
      address: address.trim(),
      howToApply: howToApply.trim(),
      type,
      location: location.trim(),
      deadline,
    };


    try {
      await addVacancy(formattedData);
      alert("Vacancy added successfully!");

      // Reset the form
      setJobTitle("");
      setQualification("");
      setExperience("");
      setJobGrade("");
      setSalary("");
      setAddress("");
      setHowToApply("");
      setLocation("");
      setType("full-time");
      setDeadline("");
    } catch (error) {
      console.error("Error adding vacancy:", error);
      alert("Failed to add vacancy. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className={classes.formContainer}>
      <h2 className={classes.heading}>Add Vacancy</h2>
      <input
        type="text"
        placeholder="Job Title"
        value={jobTitle}
        onChange={(e) => setJobTitle(e.target.value)}
        className={classes.inputField}
        required
      />
      <textarea
        placeholder="Qualification"
        value={qualification}
        onChange={(e) => setQualification(e.target.value)}
        className={classes.textareaField}
      />
      <textarea
        placeholder="Experience"
        value={experience}
        onChange={(e) => setExperience(e.target.value)}
        className={classes.textareaField}
      />
      <input
        type="text"
        placeholder="Job Grade"
        value={jobGrade}
        onChange={(e) => setJobGrade(e.target.value)}
        className={classes.inputField}
      />
      <input
        type="text"
        placeholder="Salary"
        value={salary}
        onChange={(e) => setSalary(e.target.value)}
        className={classes.inputField}
      />
      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        className={classes.selectField}
      >
        <option value="full-time">Full-Time</option>
        <option value="part-time">Part-Time</option>
        <option value="contract">Contract</option>
      </select>
      <input
        type="text"
        placeholder="Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        className={classes.inputField}
      />
      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className={classes.inputField}
        required
      />
      <textarea
        placeholder="How to Apply"
        value={howToApply}
        onChange={(e) => setHowToApply(e.target.value)}
        className={classes.textareaField}
      />
      <label className={classes.labelField}>
        Application Deadline:
        <input
          type="date"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
          className={classes.inputField}
          required
        />
      </label>
      <button type="submit" className={classes.submitButton}>
        Add Vacancy
      </button>
    </form>
  );
};

export default AddVacancyForm;
