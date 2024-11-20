import React, { useState } from "react";
import axios from "axios";

function ApplicantForms() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [position, setPosition] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState("");
  const [cvFile, setCvFile] = useState(null);
  const [testimonialsFile, setTestimonialsFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("first_name", firstName);
    formData.append("last_name", lastName);
    formData.append("email_address", email);
    formData.append("position_applied_for", position);
    formData.append("additional_information", additionalInfo);
    if (cvFile) formData.append("cv_file", cvFile);
    if (testimonialsFile) formData.append("testimonials", testimonialsFile);

    try {
      const response = await axios.post(
        "http://localhost:3001/api/applicant",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      alert("Applicant data uploaded successfully!");
      if (response.status === 200) {
        console.log("Applicant data uploaded successfully!");
      }
    } catch (error) {
      console.error("Error uploading applicant data:", error);
      alert("Error uploading data");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-1/2 mx-10">
      <input
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Position"
        value={position}
        onChange={(e) => setPosition(e.target.value)}
        required
      />
      <textarea
        placeholder="Additional Information"
        value={additionalInfo}
        onChange={(e) => setAdditionalInfo(e.target.value)}
      />
      <input
        type="file"
        onChange={(e) => setCvFile(e.target.files[0])}
        required
      />
      <input
        type="file"
        onChange={(e) => setTestimonialsFile(e.target.files[0])}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default ApplicantForms;
