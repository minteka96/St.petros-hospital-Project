/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import UploadFile from './UploadFile';

const ImageUploader = () => {
  const [imageUrl, setImageUrl] = useState(null);

  // This function will receive the upload result from the UploadWidget component
  const handleUpload = (imageInfo) => {
    setImageUrl(imageInfo.secure_url); // Store the image URL in the state
  };

  return (
    <div>
      <h2>Upload an Image</h2>
      <UploadFile onUpload={handleUpload} />
      
      {imageUrl && (
        <div>
          <h3>Uploaded Image:</h3>
          <img src={imageUrl} alt="Uploaded" style={{ width: '300px', marginTop: '20px' }} />
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
