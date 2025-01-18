// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { getContactById } from "../../../../Services/contact.service";
import { useParams } from "react-router-dom";

const ContactDetail = () => {
  const { id } = useParams();
  const [contact, setContact] = useState(null);

  useEffect(() => {
    const fetchContact = async () => {
      try {
        const data = await getContactById(id);
        setContact(data);
      } catch (err) {
        console.error("Error fetching contact details:", err.message);
      }
    };
    fetchContact();
  }, [id]);

  if (!contact) {
    return <p>Loading contact details...</p>;
  }

  return (
    <div>
      <h2>Contact Details</h2>
      <p><strong>ID:</strong> {contact.id}</p>
      <p><strong>Name:</strong> {contact.name}</p>
      <p><strong>Email:</strong> {contact.email}</p>
      <p><strong>Subject:</strong> {contact.subject}</p>
      <p><strong>Message:</strong> {contact.message}</p>
    </div>
  );
};

export default ContactDetail;
