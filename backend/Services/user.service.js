const conn = require("../Config/db.config");
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
      return { id: result.insertId, ...user, password_hashed: hashedPassword };
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

module.exports = { createUser, getAllUsers, getUserByEmail, checkIfUserExists };
