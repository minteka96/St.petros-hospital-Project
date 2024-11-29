import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { addNews } from "../../../Util/api/api";

const AddNewsForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    image: "",
    alt: "",
    detailsLink: "",
    categoryLink: "",
    category: "",
    date: "",
    author: "",
    authorLink: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addNews(formData);
      // Clear the form fields
      setFormData({
        title: "",
        content: "",
        image: "",
        alt: "",
        detailsLink: "",
        categoryLink: "",
        category: "",
        date: "",
        author: "",
        authorLink: "",
      });
    } catch (error) {
      console.error("Error adding news:", error);
    }
  };

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <div className="p-4 shadow-lg rounded bg-light">
            <h2 className="text-center mb-4">Add News</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  name="title"
                  placeholder="Enter news title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formContent">
                <Form.Label>Content</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  name="content"
                  placeholder="Enter news content"
                  value={formData.content}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formImage">
                <Form.Label>Image URL</Form.Label>
                <Form.Control
                  type="text"
                  name="image"
                  placeholder="Enter image URL"
                  value={formData.image}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formAlt">
                <Form.Label>Image Alt Text</Form.Label>
                <Form.Control
                  type="text"
                  name="alt"
                  placeholder="Enter image alt text"
                  value={formData.alt}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formDetailsLink">
                <Form.Label>Details Link</Form.Label>
                <Form.Control
                  type="text"
                  name="detailsLink"
                  placeholder="Enter details link"
                  value={formData.detailsLink}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formCategoryLink">
                <Form.Label>Category Link</Form.Label>
                <Form.Control
                  type="text"
                  name="categoryLink"
                  placeholder="Enter category link"
                  value={formData.categoryLink}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formCategory">
                <Form.Label>Category</Form.Label>
                <Form.Control
                  type="text"
                  name="category"
                  placeholder="Enter news category"
                  value={formData.category}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formDate">
                <Form.Label>Date</Form.Label>
                <Form.Control
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formAuthor">
                <Form.Label>Author</Form.Label>
                <Form.Control
                  type="text"
                  name="author"
                  placeholder="Enter author name"
                  value={formData.author}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formAuthorLink">
                <Form.Label>Author Link</Form.Label>
                <Form.Control
                  type="text"
                  name="authorLink"
                  placeholder="Enter author link"
                  value={formData.authorLink}
                  onChange={handleChange}
                />
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100">
                Add News
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AddNewsForm;
