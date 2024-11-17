/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from 'react';

const UploadWidget = ({ onUpload }) => {
  const uploadButtonRef = useRef(null);

  useEffect(() => {
    const widget = window.cloudinary.createUploadWidget(
      {
        cloudName: 'dejvexuq9',
        uploadPreset: 'z3hwqybc',
      },
      (error, result) => {
        if (!error && result.event === 'success') {
          console.log('Upload Successful:', result.info);
          onUpload(result.info);
        }
      }
    );

    const uploadButton = uploadButtonRef.current;
    if (uploadButton) {
      uploadButton.addEventListener('click', () => widget.open(), false);
    }

    return () => {
      if (uploadButton) {
        uploadButton.removeEventListener('click', () => widget.open());
      }
    };
  }, [onUpload]);

  return (
    <button ref={uploadButtonRef} className="upload-button">
      Upload Image
    </button>
  );
};

export default UploadWidget;
