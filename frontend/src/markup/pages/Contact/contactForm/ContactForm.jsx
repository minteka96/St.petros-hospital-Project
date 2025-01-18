
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import contactService from "../../../../Services/contact.service";
import { useAuth } from "../../../../contexts/AuthContext";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
  const { user } = useAuth();
  const token = user?.token || null;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!token) {
      setError('You must be logged in to submit feedback.');
      return;
    }

    try {
      const contactData = { name, email, subject, message };
      await contactService.createContact(contactData, token);
      setSuccess('Your feedback has been submitted successfully');
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
      setError('');
    } catch (error) {
      console.error('Error submitting feedback:', error);
      setError(`There was an error submitting your feedback: ${error.message}. Please try again.`);
    }
  };

  return (
    <div className="row">
      <div className="col-lg-12">
        <div className="contact-form">
          <div className="section-title text-center">
            <p>Contact</p>
            <h2 className="title">
              <span> We Always Ready</span> To Help You
            </h2>
          </div>
          {error && <div className={styles.errorMessage}>{error}</div>}
          {success && <div className={styles.successMessage}>{success}</div>}
          <form className="contact-form-wrapper" id="contact-form" onSubmit={handleSubmit} method="post">
            <div className="row">
              <div className="col-md-4">
                <div className="form-group">
                  <input
                    className="form-control"
                    type="text"
                    name="con_name"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <input
                    className="form-control"
                    type="email"
                    name="con_email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <input
                    className="form-control"
                    type="text"
                    name="con_subject"
                    placeholder="Subject (optional)"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group mb-0">
                  <textarea
                    name="con_message"
                    rows="5"
                    placeholder="Write your message here"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  ></textarea>
                </div>
              </div>
              <div className="col-md-12 text-center">
                <div className="form-group mb-0">
                  <button className="btn btn-theme btn-block" type="submit">
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
