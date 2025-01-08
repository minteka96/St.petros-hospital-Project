const contactService = require('../Services/contact.service'); // Ensure this path is correct

// Handle POST request to create a contact submission
exports.createContact = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({ message: 'Name, email, and message are required.' });
    }

    // Call the service to create a new contact in the database
    const contactId = await contactService.createContact(name, email, subject, message);

    // Respond with success message
    return res.status(201).json({
      message: 'Your feedback has been submitted successfully.',
      contactId: contactId,
    });
  } catch (error) {
    console.error('Error in creating contact:', error);
    return res.status(500).json({
      message: 'There was an error submitting your feedback. Please try again.',
    });
  }
};

// Get contact by ID
exports.getContactById = async (req, res) => {
  try {
    const { id } = req.params;

    // Call the service to get the contact by ID
    const contact = await contactService.getContactById(id);

    if (!contact) {
      return res.status(404).json({ message: 'Contact not found.' });
    }

    // Respond with the contact data
    return res.status(200).json(contact);
  } catch (error) {
    console.error('Error in getting contact by ID:', error);
    return res.status(500).json({
      message: 'There was an error fetching the contact. Please try again.',
    });
  }
};

// Get all contacts
exports.getAllContacts = async (req, res) => {
  try {
    // Call the service to get all contacts
    const contacts = await contactService.getAllContacts();

    // Respond with the list of contacts
    return res.status(200).json(contacts);
  } catch (error) {
    console.error('Error in getting all contacts:', error);
    return res.status(500).json({
      message: 'There was an error fetching the contacts. Please try again.',
    });
  }
};

// Delete a contact by ID
exports.deleteContact = async (req, res) => {
  try {
    const { id } = req.params;

    // Call the service to delete the contact by ID
    const deleted = await contactService.deleteContact(id);

    if (!deleted) {
      return res.status(404).json({ message: 'Contact not found or already deleted.' });
    }

    // Respond with success message
    return res.status(200).json({ message: 'Contact deleted successfully.' });
  } catch (error) {
    console.error('Error in deleting contact:', error);
    return res.status(500).json({
      message: 'There was an error deleting the contact. Please try again.',
    });
  }
};
