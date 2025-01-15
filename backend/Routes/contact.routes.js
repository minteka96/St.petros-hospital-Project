const express = require('express');
const router = express.Router();
const contactController = require('../Controllers/contact.controller');  // Ensure the correct path

// Handle POST request for contact form submission
router.post('/contact', contactController.createContact);

// Handle GET request to fetch contact by ID
router.get('/contact/:id', contactController.getContactById);

// Handle GET request to fetch all contacts
router.get('/contacts', contactController.getAllContacts);

// Handle DELETE request to delete contact by ID
router.delete('/contact/:id', contactController.deleteContact);

module.exports = router;
