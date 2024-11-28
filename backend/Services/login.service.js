const userService = require("./user.service");
const bcrypt = require("bcrypt");

async function logIn({ email, password }) {
  try {
    // Fetch user by email
    const user = await userService.getUserByEmail(email);
    // User not found
    if (!user || user.length === 0) {
      return {
        status: "fail",
        message: "User does not exist",
      };
    }

    // Verify password
    const isPasswordCorrect = await bcrypt.compare(
      password,
      user.password_hashed
    );
    if (!isPasswordCorrect) {
      return {
        status: "fail",
        message: "Incorrect password",
      };
    }

    // Return user data if login is successful
    return {
      status: "success",
      data: user,
    };
  } catch (error) {
    console.error("Login Service Error:", error);
    throw new Error("Service Error");
  }
}

module.exports = { logIn };
