// import { v4 as uuidv4 } from "uuid"; ;
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
  const connection = await conn.pool.getConnection();
  try {
    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(user.password_hashed, salt);
    const updated_by = "superAdmin";
    // Begin a transaction
    await connection.beginTransaction();

    // Insert user into Users table
    const userInsertQuery = `
      INSERT INTO Users (username, email, password_hashed, role, active_status, updated_by)
      VALUES (?, ?, ?, ?, ?, ?)
    `;
    const [result] = await connection.query(userInsertQuery, [
      user.username,
      user.email,
      hashedPassword,
      user.department,
      user.active_status,
      updated_by,
    ]);

    const userId = result.insertId;

    // Insert user privileges
    const privileges = user.privileges; // Ensure privileges come from the user object
    if (privileges && privileges.length > 0) {
      const privilegeInsertQuery = `
        INSERT INTO user_privileges (user_id, privilege)
        VALUES ?
      `;
      const privilegeValues = privileges.map((privilege) => [
        userId,
        privilege,
      ]);

      await connection.query(privilegeInsertQuery, [privilegeValues]);
    }

    // Commit the transaction
    await connection.commit();

    // Return the created user without the raw password
    return { ...user, user_id: userId, password_hashed: hashedPassword };
  } catch (error) {
    // Rollback transaction in case of error
    await connection.rollback();
    console.error("Error creating user:", error.message);
    throw new Error("Failed to create user.");
  } finally {
    // Release the connection back to the pool
    connection.release();
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
  const sql = `
    SELECT 
      u.user_id,
      u.username,
      u.email,
      u.password_hashed,
      u.role,
      u.updated_by,
      u.active_status,
      GROUP_CONCAT(up.privilege) AS privileges
    FROM 
      Users u
    LEFT JOIN 
      user_privileges up 
    ON 
      u.user_id = up.user_id
    WHERE 
      u.email = ?
    GROUP BY 
      u.user_id
  `;

  const connection = await conn.pool.getConnection();
  try {
    const [rows] = await connection.query(sql, [email]);
    if (rows.length === 0) {
      return null; // No user found with the given email
    }

    // Parse the privileges into an array
    const user = rows[0];
    user.privileges = user.privileges ? user.privileges.split(",") : [];

    return user;
  } catch (error) {
    console.error("Error fetching user by email:", error.message);
    throw new Error("Failed to fetch user.");
  } finally {
    connection.release();
  }
}

// get user by id
async function getUserById(userId) {
  const sql = `
  SELECT 
    Users.*,
    GROUP_CONCAT(user_privileges.privilege) AS privileges
  FROM 
    Users
  LEFT JOIN 
    user_privileges
  ON 
    Users.user_id = user_privileges.user_id
  WHERE 
    Users.user_id = ?
  GROUP BY 
    Users.user_id;
`;

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
const updateUserById = async (userId, formData) => {
  const connection = await conn.pool.getConnection();

  try {
    // Build the SQL query for updating the Users table
    const updates = [];
    const values = [];

    if (formData.username) {
      updates.push("username = ?");
      values.push(formData.username);
    }

    if (formData.password) {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(formData.password, salt);
      updates.push("password_hashed = ?");
      values.push(hashedPassword);
    }

    if (formData.updated_by) {
      updates.push("updated_by = ?");
      values.push(formData.updated_by);
    }

    // Ensure there are updates to make
    if (updates.length === 0 && !formData.privileges) {
      throw new Error("No fields to update");
    }

    // Update Users table if there are updates
    if (updates.length > 0) {
      const sql = `UPDATE Users SET ${updates.join(", ")} WHERE user_id = ?`;
      values.push(userId);
      await connection.query(sql, values);
    }

    // Handle privileges if provided
    if (formData.privileges) {
      const privileges = formData.privileges;
      const optionsArray = privileges.split(",").map((option) => option.trim());

      if (optionsArray && optionsArray.length > 0) {
        // Begin a transaction
        await connection.beginTransaction();

        try {
          // Step 1: Delete existing privileges for the user
          const deletePrivilegesQuery = `
            DELETE FROM user_privileges
            WHERE user_id = ?
          `;
          await connection.query(deletePrivilegesQuery, [userId]);

          // Step 2: Insert new privileges
          const privilegeInsertQuery = `
            INSERT INTO user_privileges (user_id, privilege)
            VALUES ?
          `;
          const privilegeValues = optionsArray.map((privilege) => [
            userId,
            privilege,
          ]);

          await connection.query(privilegeInsertQuery, [privilegeValues]);

          // Commit the transaction
          await connection.commit();
        } catch (err) {
          // Rollback the transaction in case of an error
          await connection.rollback();
          throw err; // Re-throw the error to handle it upstream
        }
      }
    }

    return true;
  } catch (error) {
    await connection.rollback(); // Rollback the transaction in case of an error
    console.error("Error updating user:", error.message);
    throw error;
  } finally {
    connection.release();
  }
};

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
    const updated_by = "system";

    const sql = `UPDATE Users SET password_hashed = ?, updated_by = ? WHERE email = ?`;
    const connection = await conn.pool.getConnection();

    try {
      await connection.beginTransaction();
      const [result] = await connection.query(sql, [
        hashedPassword,
        updated_by,
        email,
      ]);
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
module.exports = {
  createUser,
  getAllUsers,
  getUserByEmail,
  checkIfUserExists,
  getUserById,
  updateUserById,
  deleteUserById,
  updatePasswordByEmail,
};
