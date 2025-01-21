import React, { useState } from "react";
import GenerateCertificate from "./GenerateCertificate";

const CertificateForm = () => {
  const [username, setUsername] = useState("");
  const [courseName, setCourseName] = useState("");
  const [showCertificate, setShowCertificate] = useState(false);

  const handleGenerateCertificate = () => {
    if (username && courseName) {
      setShowCertificate(true);
    } else {
      alert("Please enter both your name and the course name!");
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Generate Your Certificate</h1>
      {!showCertificate ? (
        <div>
          <input
            type="text"
            placeholder="Enter your name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{
              margin: "10px",
              padding: "10px",
              fontSize: "16px",
              width: "80%",
              maxWidth: "400px",
            }}
          />
          <br />
          <input
            type="text"
            placeholder="Enter the course name"
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
            style={{
              margin: "10px",
              padding: "10px",
              fontSize: "16px",
              width: "80%",
              maxWidth: "400px",
            }}
          />
          <br />
          <button
            onClick={handleGenerateCertificate}
            style={{
              padding: "10px 20px",
              fontSize: "1em",
              cursor: "pointer",
            }}
          >
            Generate Certificate
          </button>
        </div>
      ) : (
        <GenerateCertificate name={username} courseName={courseName} />
      )}
    </div>
  );
};

export default CertificateForm;
