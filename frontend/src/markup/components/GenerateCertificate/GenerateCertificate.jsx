import React, { useState, useRef } from "react";
import html2canvas from "html2canvas";
import "@fontsource/cormorant-garamond";

const GenerateCertificate = () => {
  const [name, setName] = useState("");
  const [courseName, setCourseName] = useState(""); // State for course name
  const [certificate, setCertificate] = useState(null);
  const certificateRef = useRef();

  // Fetch the certificate image
  const fetchCertificate = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/certificate");
      const blob = await response.blob();
      setCertificate(URL.createObjectURL(blob));
    } catch (error) {
      console.error("Error fetching certificate:", error);
    }
  };

  // Download the certificate with the name and course name
  const downloadCertificate = async () => {
    const element = certificateRef.current;
    const canvas = await html2canvas(element, { scale: 2 }); // Higher scale for better quality
    const dataURL = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = dataURL;
    link.download = "certificate.png";
    link.click();
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Certificate Generator</h1>
      <button onClick={fetchCertificate} style={{ marginBottom: "20px" }}>
        Load Certificate
      </button>
      <br />
      {certificate && (
        <div>
          <div
            ref={certificateRef}
            style={{
              position: "relative",
              display: "inline-block",
              width: "1123px", // A4 landscape width
              height: "794px", // A4 landscape height
              border: "1px solid #ccc", // Optional border for clarity
            }}
          >
            <img
              src={certificate}
              alt="Certificate"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
            {name && (
              <div
                style={{
                  position: "absolute",
                  bottom: "320px", // Adjust position as per certificate layout
                  left: "50%",
                  transform: "translateX(-50%)",
                  fontSize: "32px",
                  fontWeight: "bold",
                  color: "#000",
                  textAlign: "center",
                  fontFamily: "'Cormorant Garamond', serif", // Name Font
                }}
              >
                {name}
              </div>
            )}
            {courseName && (
              <div
                style={{
                  position: "absolute",
                  bottom: "240px", // Adjust position as per certificate layout
                  left: "50%",
                  transform: "translateX(-50%)",
                  fontSize: "16px", // Slightly larger font for better readability
                  fontWeight: "bold",
                  color: "#5B6784",
                  textAlign: "center",
                }}
              >
                {courseName}
              </div>
            )}
          </div>
          <br />
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
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
            onClick={downloadCertificate}
            style={{
              padding: "10px 20px",
              fontSize: "1em",
              cursor: "pointer",
            }}
          >
            Download Certificate
          </button>
        </div>
      )}
    </div>
  );
};

export default GenerateCertificate;
