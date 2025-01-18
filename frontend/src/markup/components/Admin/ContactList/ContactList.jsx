/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useAuth } from "../../../../contexts/AuthContext";
import contactService from "../../../../Services/contact.service";
import { FaTrash } from "react-icons/fa"; // Trash icon for deletion
import styles from "./ContactList.module.css";

const ContactList = () => {
  const { user } = useAuth();
  const token = user?.token || null;

  const [contacts, setContacts] = useState([]);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Fetch contacts when the component mounts
  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await contactService.getAllContacts(token);
        setContacts(response); // Set the list of contacts
      } catch (err) {
        setError("Failed to fetch contacts. Please try again.");
      }
    };
    fetchContacts();
  }, [token]);

  // Handle contact deletion
  const handleDelete = async (contactId) => {
    if (!window.confirm("Are you sure you want to delete this contact?")) return;

    try {
      await contactService.deleteContact(contactId, token);
      setContacts((prevContacts) =>
        prevContacts.filter((contact) => contact.id !== contactId)
      );
      setSuccess("Contact deleted successfully!");
    } catch (err) {
      setError("Failed to delete contact. Please try again.");
    }
  };

  return (
    <div className={styles.contactListContainer}>
      <h2>Contact List</h2>

      {/* Display success or error messages */}
      {error && <div className={styles.errorMessage}>{error}</div>}
      {success && <div className={styles.successMessage}>{success}</div>}

      {/* Display contacts in a table */}
      {contacts.length === 0 ? (
        <p>No contacts available.</p>
      ) : (
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.th}>Name</th>
              <th className={styles.th}>Email</th>
              <th className={styles.th}>Subject</th>
              <th className={styles.th}>Message</th>
              <th className={styles.th}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <tr key={contact.id} className={styles.tr}>
                <td className={styles.td}>{contact.name}</td>
                <td className={styles.td}>{contact.email}</td>
                <td className={styles.td}>{contact.subject}</td>
                <td className={styles.td}>{contact.message}</td>
                <td className={styles.td}>
                  <button className={styles.deleteButton} onClick={() => handleDelete(contact.id)}>
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ContactList;
