const conn = require("../Config/db.config");
const bcrypt = require("bcrypt");

async function signIn({ email, password }) {
  try {
    const sql = `SELECT * FROM trainees WHERE email = ?`;
    const [rows] = await conn.pool.query(sql, [email]);

    if (rows.length === 0) {
      return {
        status: "fail",
        message: "No trainee found with this email.",
      };
    }

    const trainee = rows[0];

    // Compare the password
    const isPasswordValid = await bcrypt.compare(password, trainee.password);
    if (!isPasswordValid) {
      return {
        status: "fail",
        message: "Incorrect password.",
      };
    }

    // Return the trainee data (without sensitive info)
    return {
      status: "success",
      data: trainee,
    };
  } catch (error) {
    console.error("Sign-in Service Error:", error);
    return {
      status: "fail",
      message: "Internal Server Error",
    };
  }
}

module.exports = { signIn };
