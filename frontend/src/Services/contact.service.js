/* eslint-disable no-unused-vars */
const api_url = import.meta.env.VITE_API_URL; // Define the API base URL

// Function to send POST request to create a new contact
const createContact = async (contactData) => {

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json", // Ensure the content type is JSON
    },
    body: JSON.stringify(contactData), // Send contact data as JSON
  };

  try {
    const response = await fetch(`${api_url}/api/contact`, requestOptions);
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`HTTP error! Status: ${response.status}, Details: ${errorText}`);
    }
    return await response.json(); // Return the response data
  } catch (error) {
    console.error("Error creating contact:", error);
    throw error;
  }
};

// Function to send GET request to fetch all contacts
const getAllContacts = async (token) => {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "x-access-token": token,
    },
  };

  try {
    const response = await fetch(`${api_url}/api/contacts`, requestOptions);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json(); // Return the list of contacts
  } catch (error) {
    console.error("Error fetching contacts:", error);
    throw error;
  }
};

// Function to send DELETE request to delete a contact by ID
const deleteContact = async (contactId, token) => {
  if (!token) throw new Error("Token is missing.");

  const requestOptions = {
    method: "DELETE",
    headers: {
      "x-access-token": token,
    },
  };

  try {
    const response = await fetch(`${api_url}/api/contact/${contactId}`, requestOptions);
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`HTTP error! Status: ${response.status}, Details: ${errorText}`);
    }
    return await response.json(); // Return the response data (e.g., success message)
  } catch (error) {
    console.error("Error deleting contact:", error);
    throw error;
  }
};

// Function to send GET request to fetch a contact by ID
export const getContactById = async (id, token) => {
  try {
    const response = await fetch(`${api_url}/api/contacts/${id}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    return response.json();
  } catch (error) {
    throw new Error('Failed to fetch contact');
  }
};

// Exporting the contact service functions
const contactService = {
  createContact,
  getAllContacts,
  getContactById,
  deleteContact,
};

export default contactService;
