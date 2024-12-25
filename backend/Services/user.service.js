// import { v4 as uuidv4 } from "uuid"; ;
const conn = require("../Config/db.config")
const bcrypt = require("bcrypt");


// Check if the user already exists by email
async function checkIfUserExists(email) {
  try {
    const query = "SELECT * FROM Users WHERE email = ?";
    const [rows] = await conn.pool.query(query, [email]);
    return rows.length > 0;
  } catch (error) {
    throw error;
  }
}

// Create a new user
async function createUser(user) {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(user.password_hashed, salt);

    // Generate a UUID for the user_id
   

    const sql = `INSERT INTO Users (username, email, password_hashed, role, active_status) VALUES (?, ?, ?, ?, ?)`;
    const connection = await conn.pool.getConnection();

    try {
      await connection.beginTransaction();
      const [result] = await connection.query(sql, [
        user.username,
        user.email,
        hashedPassword,
        user.role,
        user.active_status,
      ]);
      await connection.commit();
      return { ...user, password_hashed: hashedPassword }; // Return the UUID instead of insertId
    } catch (error) {
      await connection.rollback();
      throw error;
    } finally {
      connection.release();
    }
  } catch (error) {
    throw error;
  }
}


//get all users
async function getAllUsers() {
  const sql = `SELECT * FROM users`;
  const connection = await conn.pool.getConnection();
  try {
    const [rows] = await connection.query(sql);
    return rows;
  } catch (error) {
    throw error;
  } finally {
    await connection.release();
  }
}

// get user by email
async function getUserByEmail(email) {
  const sql = `SELECT * FROM Users WHERE email = ?`;
  const connection = await conn.pool.getConnection();
  try {
    const [rows] = await connection.query(sql, [email]);
    return rows[0];
  } catch (error) {
    throw error;
  } finally {
    await connection.release();
  }
}

// get user by id
async function getUserById(userId) {
  const sql = `SELECT * FROM Users WHERE user_id = ?`;
  const connection = await conn.pool.getConnection();
  try {
    const [rows] = await connection.query(sql, [userId]);
    return rows[0];
  } catch (error) {
    throw error;
  } finally {
    await connection.release();
  }
}

//update user by id
async function updateUserById(userId, formData) {
  const connection = await conn.pool.getConnection();

  try {
    // Dynamically build the SQL query and parameters
    const updates = [];
    const values = [];

    if (formData.username) {
      updates.push("username = ?");
      values.push(formData.username);
    }
    if (formData.email) {
      updates.push("email = ?");
      values.push(formData.email);
    }
    if (formData.password_hashed) {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(formData.password_hashed, salt);
      updates.push("password_hashed = ?");
      values.push(hashedPassword);
    }
    if (formData.role) {
      updates.push("role = ?");
      values.push(formData.role);
    }
    if (formData.active_status !== undefined) {
      updates.push("active_status = ?");
      values.push(formData.active_status);
    }

    // Ensure there are updates to make
    if (updates.length === 0) {
      throw new Error("No fields to update");
    }

    // Add the WHERE clause
    const sql = `UPDATE Users SET ${updates.join(", ")} WHERE user_id = ?`;
    values.push(userId);

    await connection.beginTransaction();
    const [result] = await connection.query(sql, values);
    await connection.commit();

    return result.affectedRows > 0;
  } catch (error) {
    await connection.rollback();
    throw error;
  } finally {
    connection.release();
  }
}

//delete user by id
async function deleteUserById(userId) {
  const sql = `DELETE FROM Users WHERE user_id = ?`;
  const connection = await conn.pool.getConnection();
  try {
    await connection.beginTransaction();
    const [result] = await connection.query(sql, [userId]);
    await connection.commit();
    return result.affectedRows > 0;
  } catch (error) {
    await connection.rollback();
    throw error;
  } finally {
    await connection.release();
  }
}

//update password by email
async function updatePasswordByEmail(email, newPassword) {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);

    const sql = `UPDATE Users SET password_hashed = ? WHERE email = ?`;
    const connection = await conn.pool.getConnection();

    try {
      await connection.beginTransaction();
      const [result] = await connection.query(sql, [hashedPassword, email]);
      await connection.commit();
      return result.affectedRows > 0;
    } catch (error) {
      await connection.rollback();
      throw error;
    } finally {
      await connection.release();
    }
  } catch (error) {
    throw error;
  }
}


// export the functions
module.exports = { createUser, getAllUsers, getUserByEmail, checkIfUserExists, getUserById, updateUserById, deleteUserById, updatePasswordByEmail };
