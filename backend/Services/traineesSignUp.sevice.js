const conn = require("../Config/db.config");
const bcrypt = require("bcrypt");
const { v4: uuidv4 } = require("uuid");

// Check if the trainee already exists by email
async function checkIfTraineeExists(email) {
  try {
    const query = "SELECT * FROM trainees WHERE email = ?";
    const [rows] = await conn.pool.query(query, [email]);
    return rows.length > 0; // Return true if trainee exists
  } catch (error) {
    throw error;
  }
}

// Create a new trainee
async function createTrainee(trainee) {
  const connection = await conn.pool.getConnection();
  try {
    const traineeExists = await checkIfTraineeExists(trainee.email);
    if (traineeExists) {
      throw new Error("Trainee with this email already exists.");
    }

    const traineeId = uuidv4();
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(trainee.password, salt);

    const query = `
      INSERT INTO trainees (trainee_id, email, password)
      VALUES (?, ?, ?)
    `;
    const [result] = await connection.query(query, [
      traineeId,
      trainee.email,
      hashedPassword,
    ]);

    return { trainee_id: traineeId, email: trainee.email };
  } catch (error) {
    console.error("Error creating trainee:", error.message);
    throw new Error("Failed to create trainee.");
  } finally {
    connection.release();
  }
}

// Get trainee by email
async function getTraineeByEmail(email) {
  try {
    const query = "SELECT * FROM trainees WHERE email = ?";
    const [rows] = await conn.pool.query(query, [email]);
    return rows.length > 0 ? rows[0] : null;
  } catch (error) {
    throw error;
  }
}

// Get trainee by ID
async function getTraineeById(traineeId) {
  try {
    const query = "SELECT * FROM trainees WHERE trainee_id = ?";
    const [rows] = await conn.pool.query(query, [traineeId]);
    return rows.length > 0 ? rows[0] : null; // Return the trainee object if found
  } catch (error) {
    console.error("Error fetching trainee by ID:", error.message);
    throw new Error("Failed to fetch trainee by ID.");
  }
}

// Get all trainees
async function getAllTrainees() {
  try {
    const query = "SELECT * FROM trainees";
    const [rows] = await conn.pool.query(query);
    return rows; // Return all trainees
  } catch (error) {
    console.error("Error fetching all trainees:", error.message);
    throw new Error("Failed to fetch trainees.");
  }
}

// Update trainee password by email
async function updateTraineePasswordByEmail(email, newPassword) {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);

    const query = "UPDATE trainees SET password = ? WHERE email = ?";
    const [result] = await conn.pool.query(query, [hashedPassword, email]);

    return result.affectedRows > 0;
  } catch (error) {
    throw error;
  }
}

// Update trainee details by ID
async function updateTraineeById(traineeId, updatedDetails) {
  const connection = await conn.pool.getConnection();
  try {
    const { email, password } = updatedDetails;

    let hashedPassword = null;
    if (password) {
      const salt = await bcrypt.genSalt(10);
      hashedPassword = await bcrypt.hash(password, salt);
    }

    const updates = [];
    const values = [];

    if (email) {
      updates.push("email = ?");
      values.push(email);
    }

    if (hashedPassword) {
      updates.push("password = ?");
      values.push(hashedPassword);
    }

    if (updates.length === 0) {
      throw new Error("No fields to update.");
    }

    values.push(traineeId);

    const query = `UPDATE trainees SET ${updates.join(
      ", "
    )} WHERE trainee_id = ?`;
    const [result] = await connection.query(query, values);

    return result.affectedRows > 0;
  } catch (error) {
    console.error("Error updating trainee:", error.message);
    throw new Error("Failed to update trainee.");
  } finally {
    connection.release();
  }
}

// Delete trainee by ID
async function deleteTraineeById(traineeId) {
  const connection = await conn.pool.getConnection();
  try {
    const query = "DELETE FROM trainees WHERE trainee_id = ?";
    const [result] = await connection.query(query, [traineeId]);

    return result.affectedRows > 0;
  } catch (error) {
    console.error("Error deleting trainee:", error.message);
    throw new Error("Failed to delete trainee.");
  } finally {
    connection.release();
  }
}

module.exports = {
  checkIfTraineeExists,
  createTrainee,
  getTraineeByEmail,
  getTraineeById, // Added this function
  getAllTrainees,
  updateTraineePasswordByEmail,
  updateTraineeById,
  deleteTraineeById,
};
