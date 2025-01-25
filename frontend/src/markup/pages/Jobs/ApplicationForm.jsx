import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import classes from "./JobsDetails/ApplicantForms.module.css"; 
import applicantService from "../../../Services/applicant.service";
import jobService from "../../../Services/jobs.service";

const ApplicantForms = () => {
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get("undfjw");
  const navigate = useNavigate();

  const [title, setTitle] = useState(null);
  const [closingDate, setClosingDate] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const currentDate = new Date().getTime();
  useEffect(() => {
    const fetchJob = async () => {
      try {
        const response = await jobService.getJobById(id);
        setTitle(response.job_title);
        setClosingDate(new Date(response.deadline).getTime());
      } catch (error) {
        console.error("Error fetching job:", error);
        setError("Failed to fetch job details. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchJob();
  }, [id]);

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      position: title || "",
    }));
  }, [title]);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone_number: "",
    position: title,
    additionalInfo: "",
    cvFile: null,
    testimonials: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("first_name", formData.firstName);
    formDataToSend.append("last_name", formData.lastName);
    formDataToSend.append("email_address", formData.email);
    formDataToSend.append("phone_number", formData.phone_number);
    formDataToSend.append("position_applied_for", formData.position);
    formDataToSend.append("additional_information", formData.additionalInfo);
    if (formData.cvFile) formDataToSend.append("cv_file", formData.cvFile);
    if (formData.testimonials)
      formDataToSend.append("testimonials", formData.testimonials);

    try {
      const response = await applicantService.postApplicant(
        formDataToSend,
      );
      if (response.status === 201) {
        alert("CV submitted successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone_number: "",
          position: "",
          additionalInfo: "",
          cvFile: null,
          testimonials: "",
        });
        navigate("/");
      } else {
        alert("Failed to submit CV. Please try again.");
      }
      // console.log("response", response);
    } catch (error) {
      console.error("Error submitting CV:", error);
      alert(error.message.split(":")[2]);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="alert alert-danger text-center">{error}</div>;
  }

  if (currentDate > closingDate) {
    return (
      <div className="alert alert-danger text-center">
        The application period has ended.
      </div>
    );
  }

  return (
    <div className={`container my-5 ${classes.formContainer}`}>
      <div className={classes.formBox}>
        <h2 className="text-center">{title} Position CV Submission</h2>
        <p className="text-center">
          Do you want to work with us? Please fill in your details below.
        </p>
        <Form onSubmit={handleSubmit} className={classes.cvForm}>
          <Form.Group className="mb-3" controlId="formFirstName">
            <Form.Label>
              First Name <span className="text-danger">*</span>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your first name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formLastName">
            <Form.Label>
              Last Name <span className="text-danger">*</span>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your last name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>
              Email Address <span className="text-danger">*</span>
            </Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email address"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>
              Phone <span className="text-danger">*</span>
            </Form.Label>
            <Form.Control
              type="tel"
              placeholder="Enter your phone number"
              name="phone_number"
              value={formData.phone_number}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPosition">
            <Form.Label>Position Applying For</Form.Label>
            <Form.Control
              type="text"
              disabled
              name="position"
              value={formData.position}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formAdditionalInfo">
            <Form.Label>
              Additional Information <span className="text-danger">*</span><br/>
              <span className="text-muted">
                (optional)
              </span>
            </Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter additional information"
              name="additionalInfo"
              value={formData.additionalInfo}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formCVFile">
            <Form.Label>
              Upload your CV Here <span className="text-danger">*</span>
            </Form.Label>
            <div className={classes.fileUploadBox}>
              <Form.Control
                type="file"
                name="cvFile"
                onChange={handleFileChange}
                required
              />
            </div>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formTestimonials">
            <Form.Label>Other Testimonials (e.g. Certificates)</Form.Label><br/>
            <span>(optional)</span>
            <div className={classes.fileUploadBox}>
              <Form.Control
                type="file"
                name="testimonials"
                onChange={handleFileChange}
              />
            </div>
          </Form.Group>

          <Button variant="success" type="submit" className="w-100">
            Submit CV
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default ApplicantForms;
