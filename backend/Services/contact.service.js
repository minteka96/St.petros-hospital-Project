const { query } = require('../config/db.config'); // Database query function

async function createContact(name, email, subject, message) {
  try {
    const sql = 'INSERT INTO contacts (name, email, subject, message) VALUES (?, ?, ?, ?)';
    const params = [name, email, subject, message];

    // Execute the SQL query to insert a new contact
    const result = await query(sql, params);
    return result.insertId;  // Return the contact ID
  } catch (error) {
    console.error('Error in createContact service:', error);
    throw new Error('Failed to create contact');
  }
}

// Get a contact by its ID
async function getContactById(id) {
  try {
    const sql = 'SELECT * FROM contacts WHERE id = ?';
    const result = await query(sql, [id]);
    return result[0];  // Return the contact if found
  } catch (error) {
    console.error('Error in getContactById service:', error);
    throw new Error('Failed to get contact by ID');
  }
}

// Get all contacts
async function getAllContacts() {
  try {
    const sql = 'SELECT * FROM contacts';
    const result = await query(sql);
    return result;  // Return all contacts
  } catch (error) {
    console.error('Error in getAllContacts service:', error);
    throw new Error('Failed to get all contacts');
  }
}

// Delete a contact by its ID
async function deleteContact(id) {
  try {
    const sql = 'DELETE FROM contacts WHERE id = ?';
    const result = await query(sql, [id]);
    return result.affectedRows > 0;  // Return true if a contact was deleted
  } catch (error) {
    console.error('Error in deleteContact service:', error);
    throw new Error('Failed to delete contact');
  }
}

module.exports = {
  createContact,
  getContactById,
  getAllContacts,
  deleteContact,
};
