const path = require("path");

const getcertificate = async (req, res) => {
  try {
    const filePath = path.join(__dirname, "../public/", "certificate.png");
    ("../public/certificate.png");

    // Serve the certificate file
    res.sendFile(filePath);
  } catch (error) {
    console.error("Error serving certificate:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  getcertificate,
};
