import React, { useState } from 'react';
import { addNews } from '../../../Util/api/api';
import classes from './AddNewsForm.module.css';

const AddNewsForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');
  const [alt, setAlt] = useState('');
  const [detailsLink, setDetailsLink] = useState('');
  const [categoryLink, setCategoryLink] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');
  const [author, setAuthor] = useState('');
  const [authorLink, setAuthorLink] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addNews({
        title,
        content,
        image,
        alt,
        detailsLink,
        categoryLink,
        category,
        date,
        author,
        authorLink,
      });
      // Clear the form fields
      setTitle('');
      setContent('');
      setImage('');
      setAlt('');
      setDetailsLink('');
      setCategoryLink('');
      setCategory('');
      setDate('');
      setAuthor('');
      setAuthorLink('');
    } catch (error) {
      console.error('Error adding news:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={classes.formContainer}>
      <h2>Add News</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className={classes.inputField}
        required
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className={classes.textareaField}
        required
      />
      <input
        type="text"
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        className={classes.inputField}
      />
      <input
        type="text"
        placeholder="Image Alt Text"
        value={alt}
        onChange={(e) => setAlt(e.target.value)}
        className={classes.inputField}
      />
      <input
        type="text"
        placeholder="Details Link"
        value={detailsLink}
        onChange={(e) => setDetailsLink(e.target.value)}
        className={classes.inputField}
      />
      <input
        type="text"
        placeholder="Category Link"
        value={categoryLink}
        onChange={(e) => setCategoryLink(e.target.value)}
        className={classes.inputField}
      />
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className={classes.inputField}
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className={classes.inputField}
      />
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        className={classes.inputField}
      />
      <input
        type="text"
        placeholder="Author Link"
        value={authorLink}
        onChange={(e) => setAuthorLink(e.target.value)}
        className={classes.inputField}
      />
      <button type="submit" className={classes.submitButton}>
        Add News
      </button>
    </form>
  );
};

export default AddNewsForm;
