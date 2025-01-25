import React, { useRef, useEffect, useState } from "react";
import "@fontsource/cormorant-garamond";
import { useLocation } from "react-router";
const api_url = import.meta.env.VITE_API_URL;

const GenerateCertificate = () => {
  const [certificate, setCertificate] = useState(null);
  const [error, setError] = useState(false);
  const canvasRef = useRef();
  const location = useLocation();
  const {
    firstName,
    middleName,
    lastName,
    courseName,
    credits,
    trainingStart,
    trainingEnd,
  } = location.state || {};

  // Utility function to capitalize the first letter of a string
  const capitalize = (str) =>
    str ? str.charAt(0).toUpperCase() + str.slice(1).toLowerCase() : "";

  // Capitalize each part of the full name
  const fullName = `${capitalize(firstName)} ${capitalize(
    middleName || ""
  )} ${capitalize(lastName)}`.trim();

  // Fetch the certificate image when the component mounts
  useEffect(() => {
    if (!firstName) {
      // navigate to /cpd
      window.location.href = "/cpd";
    }
    const fetchCertificate = async () => {
      try {
        const response = await fetch(`${api_url}/api/certificate`);
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

  useEffect(() => {
    if (!certificate || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.src = certificate;

    img.onload = () => {
      canvas.width = 1123; // Adjust as needed
      canvas.height = 794; // Adjust as needed

      // Draw background image
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      // Set font styles
      ctx.textBaseline = "middle";

      // Draw Full Name
      ctx.font = "42px 'Libre Baskerville', serif";
      ctx.fillStyle = "#000";
      ctx.textAlign = "center";
      ctx.fillText(fullName, canvas.width / 2, canvas.height * 0.46);
      // full
      // Draw Course Name with line break if it exceeds 220px
      ctx.font = "24px Arial";
      ctx.fillStyle = "#5B6784";
      ctx.textAlign = "start";
      let line1 = "";
      let line2 = "";
      let line1Width = 0;

      // Split into words
      const words = courseName.split(" ");
      let i = 0;

      // Combine words until the line width exceeds 220px
      while (
        i < words.length &&
        line1Width + ctx.measureText(words[i]).width <= 220
      ) {
        line1 += (line1 ? " " : "") + words[i];
        line1Width = ctx.measureText(line1).width;
        i++;
      }

      // If there are remaining words, set them for the second line
      line2 = words.slice(i).join(" ");

      // Draw first line
      ctx.fillText(line1.trim(), canvas.width / 1.85, canvas.height * 0.52);

      // Draw second line only if it has content
      if (line2.trim()) {
        ctx.fillText(line2.trim(), canvas.width / 3.7, canvas.height * 0.558);
      }

      // Draw Credits
      ctx.fillText(credits, canvas.width / 1.78, canvas.height * 0.634);

      // Draw Training Dates
      ctx.fillText(
        `${trainingStart} - ${trainingEnd}`,
        canvas.width / 2.44,
        canvas.height * 0.703
      );
    };
  }, [certificate]);

  // Download the certificate
  const downloadCertificate = () => {
    if (!certificate || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.src = certificate;

    img.onload = () => {
      canvas.width = 1123; // Adjust as needed
      canvas.height = 794; // Adjust as needed

      // Draw background image
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      // Set font styles
      // ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      // Draw Full Name
      ctx.font = "42px 'Libre Baskerville', serif";
      ctx.fillStyle = "#000";
      ctx.textAlign = "center";
      ctx.fillText(fullName, canvas.width / 2, canvas.height * 0.46);
      // full
      // Draw Course Name with line break if it exceeds 220px
      ctx.font = "24px Arial";
      ctx.fillStyle = "#5B6784";
      ctx.textAlign = "start";
      let line1 = "";
      let line2 = "";
      let line1Width = 0;

      // Split into words
      const words = courseName.split(" ");
      let i = 0;
      // Combine words until the line width exceeds 220px
      while (
        i < words.length &&
        line1Width + ctx.measureText(words[i]).width <= 220
      ) {
        line1 += (line1 ? " " : "") + words[i];
        line1Width = ctx.measureText(line1).width;
        i++;
      }

      // If there are remaining words, set them for the second line
      line2 = words.slice(i).join(" ");

      // Draw first line
      ctx.fillText(line1.trim(), canvas.width / 1.85, canvas.height * 0.52);

      // Draw second line only if it has content
      if (line2.trim()) {
        ctx.fillText(line2.trim(), canvas.width / 3.7, canvas.height * 0.558);
      }

      // Draw Credits
      ctx.fillText(credits, canvas.width / 1.78, canvas.height * 0.634);

      // Draw Training Dates
      ctx.fillText(
        `${trainingStart} - ${trainingEnd}`,
        canvas.width / 2.44,
        canvas.height * 0.703
      );

      // Download the customized certificate
      const dataURL = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = dataURL;
      link.download = `${fullName}_certificate.png`;
      link.click();
    };
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      {error && (
        <p style={{ color: "red" }}>Failed to load certificate image.</p>
      )}
      {!error && (
        <>
          <canvas
            ref={canvasRef}
            style={{
              border: "1px solid #ccc",
              maxWidth: "100%",
              height: "auto",
              margin: "0 auto",
            }}
          ></canvas>
          <br />
          <div className="d-flex gap-5 justify-content-center">

          <button onClick={() => window.history.back()}
            style={{
              padding: "10px 20px",
              fontSize: "1em",
              color: "#fff",
              backgroundColor: "#00A89E",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              transition: "background-color 0.3s",
            }}
            MouseEnter={(e) => (e.target.style.backgroundColor = "#F16425")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#00A89E")}
          >
            Back
          </button>
          <button
            onClick={downloadCertificate}
            style={{
              padding: "10px 20px",
              fontSize: "1em",
              color: "#fff",
              backgroundColor: "#00A89E",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              transition: "background-color 0.3s",
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#F16425")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#00A89E")}
          >
            Download Certificate
          </button>
      </div>
        </>
      )}
    </div>
  );
};

export default GenerateCertificate;
