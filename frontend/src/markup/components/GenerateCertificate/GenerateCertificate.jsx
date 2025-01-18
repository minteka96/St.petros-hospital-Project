import React, { useRef, useEffect, useState } from "react";
import html2canvas from "html2canvas";
import "@fontsource/cormorant-garamond";
import { useLocation } from "react-router";

const GenerateCertificate = () => {
  const [certificate, setCertificate] = useState(null);
  const [error, setError] = useState(false);
  const certificateRef = useRef();
  const location = useLocation();
  const { firstName, middleName, lastName, courseName } = location.state || {};
  const fullName = `${firstName} ${middleName || ""} ${lastName}`.trim();
  // Fetch the certificate image when the component mounts
  useEffect(() => {
    const fetchCertificate = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/certificate");
        if (!response.ok) throw new Error("Failed to fetch certificate image");
        const blob = await response.blob();
        setCertificate(URL.createObjectURL(blob));
      } catch (err) {
        console.error(err.message);
        setError(true);
      }
    };

    fetchCertificate();
  }, []);

  // Download the certificate
  const downloadCertificate = async () => {
    if (!certificateRef.current) return;
    const canvas = await html2canvas(certificateRef.current, { scale: 2 });
    const dataURL = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = dataURL;
    link.download = `${name}_certificate.png`;
    link.click();
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      {error && (
        <p style={{ color: "red" }}>Failed to load certificate image.</p>
      )}
      {certificate ? (
        <>
          <div
            ref={certificateRef}
            style={{
              position: "relative",
              display: "inline-block",
              width: "100%",
              maxWidth: "1123px", // A4 landscape width in pixels
              height: "auto",
              border: "1px solid #ccc", // Optional border for clarity
            }}
          >
            <img
              src={certificate}
              alt="Certificate Background"
              style={{
                width: "100%",
                height: "auto",
                objectFit: "cover",
              }}
            />
            {firstName && (
              <div
                style={{
                  position: "absolute",
                  bottom: "40%", // Adjust position
                  left: "50%",
                  transform: "translateX(-50%)",
                  fontSize: "2em",
                  fontWeight: "bold",
                  color: "#000",
                  textAlign: "center",
                  fontFamily: "'Cormorant Garamond', serif",
                }}
              >
                {fullName}
              </div>
            )}
            {courseName && (
              <div
                style={{
                  position: "absolute",
                  bottom: "30%",
                  left: "50%",
                  transform: "translateX(-50%)",
                  fontSize: "1.2em",
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
          <button
            onClick={downloadCertificate}
            style={{
              padding: "10px 20px",
              fontSize: "1em",
              color: "#fff",
              backgroundColor: "#007bff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              transition: "background-color 0.3s",
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#0056b3")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#007bff")}
          >
            Download Certificate
          </button>
        </>
      ) : (
        !error && <p>Loading certificate...</p>
      )}
    </div>
  );
};

export default GenerateCertificate;
