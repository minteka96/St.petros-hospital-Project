const applicantService = require("../Services/user.service");
// Create a new user
async function createUser(req, res) {
  try {
    const { username, email, password_hashed, role, active_status } = req.body;

    // Validate required fields
    if (
      !username ||
      !email ||
      !password_hashed ||
      !role ||
      active_status == null
    ) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Check if the user already exists
    const userExists = await applicantService.checkIfUserExists(email);
    if (userExists) {
      return res
        .status(400)
        .json({ error: "User with this email already exists" });
    }

    // Create the user
    const result = await applicantService.createUser(req.body);
    res.status(201).json({ data: result });
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

// Get a user by email
async function getUserByEmail(req, res) {
  try {
    const email = req.params.email;
    const user = await applicantService.getUserByEmail(email);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json({ data: user });
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

// Get all users
async function getAllUsers(req, res) {
  try {
    const users = await applicantService.getAllUsers();
    res.status(200).json({ data: users });
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

// Update a user by ID
async function updateUserById(req, res) {
  try {
    const userId = req.params.id;
    const formData = req.body;
    const updatedUser = await applicantService.updateUserById(userId, formData);
    if (!updatedUser) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json({ data: updatedUser ,  message: "User updated successfully" });
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

//get user by id
async function getUserById(req, res) {
  try {
    const userId = req.params.id;
    const user = await applicantService.getUserById(userId);
    
    res.status(200).json({ data: user });
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
// Delete a user by ID
async function deleteUserById(req, res) {
  try {
    const userId = req.params.id;
    const deletedUser = await applicantService.deleteUserById(userId);
    if (!deletedUser) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

// Export the create user function

module.exports = { createUser, getAllUsers, getUserByEmail, getUserById, updateUserById, deleteUserById };
