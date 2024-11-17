/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// adminstrativeService.jsx
import React from 'react';
import classes from './adminstrativeservice.module.css'; // Rename 'styles' to 'classes'

// Sample service data with images
const services = [
 {
    name: 'Human Resource',
    description: 'Handles all employee management and development.',
    images: [
      '../../../assets/img/services/human-resource1.jpg',
      '../../../assets/img/services/human-resource2.jpg',
      '../../../assets/img/services/human-resource3.jpg',
    ],
  },
  {
    name: 'Legal Service',
    description: 'Oversees legal affairs and compliance.',
    images: [
      '../../../assets/img/services/legal-service1.jpg',
      '../../../assets/img/services/legal-service2.jpg',
      '../../../assets/img/services/legal-service3.jpg',
    ],
  },
  // ... other services
  {
    name: 'Tsremusena',
    description: 'Specializes in public communication and community relations.',
    images: [
      '../../../assets/img/services/tsremusena1.jpg',
      '../../../assets/img/services/tsremusena2.jpg',
    ],
  },
  {
    name: 'Good Governance',
    description: 'Promotes transparency, accountability, and ethical practices within the hospital.',
    images: [
      '../../../assets/img/services/good-governance1.jpg',
      '../../../assets/img/services/good-governance2.jpg',
    ],
  },
];
 [
  { name: 'Human Resource',
     description: 'Handles all employee management and development.', 
     images: [
      '../../../assets/img/services/good-governance1.jpg',
      '../../../assets/img/services/good-governance2.jpg',
    ],
},
  { name: 'Legal Service', description: 'Oversees legal affairs and compliance.',
     images: [
      '../../../assets/img/services/good-governance1.jpg',
      '../../../assets/img/services/good-governance2.jpg',
    ],
   },
  { name: 'Finance', description: 'Manages budgeting, financial planning, and financial records.', 
    images: [
      '../../../assets/img/services/good-governance1.jpg',
      '../../../assets/img/services/good-governance2.jpg',
    ],
  },
  { name: 'Plan & Budget', description: 'Focuses on organizational planning and budgeting processes.',
    images: [
      '../../../assets/img/services/good-governance1.jpg',
      '../../../assets/img/services/good-governance2.jpg',
  ]},
  { name: 'Internal Audit', description: 'Ensures adherence to internal policies and audits financial records.' ,
    images: [
      '../../../assets/img/services/good-governance1.jpg',
      '../../../assets/img/services/good-governance2.jpg',
    ],
  },
  { name: 'General Service', description: 'Manages general hospital facilities and services.',
    images: [
      '../../../assets/img/services/good-governance1.jpg',
  ]},
  { name: 'Laundry Service', description: 'Provides laundry support for hospital linens and uniforms.',
    images: [
      '../../../assets/img/services/good-governance1.jpg',
      '../../../assets/img/services/good-governance2.jpg',
    ],
   },
  { name: 'Food Preparation Service', description: 'Handles meal preparation and nutrition services.',
    images: [
      '../../../assets/img/services/good-governance1.jpg',
      '../../../assets/img/services/good-governance2.jpg',
    ],
   },
  { name: 'Library', description: 'Offers resources and research materials for healthcare professionals.' },
  { name: 'Gender Health', description: 'Provides gender-focused healthcare and resources.',
    images: [
      '../../../assets/img/services/good-governance1.jpg',
      '../../../assets/img/services/good-governance2.jpg',
  ]

   },
  
  
];
// Gallery component for rendering service images
const ImageGallery = ({ images }) => (
  <div className={classes.imageGallery}> 
    {images.map((image, index) => (
      <img
        key={index}
        src={image}
        alt={`Service Image ${index + 1}`}
        className={classes.galleryImage} 
       
      />
    ))}
  </div>
);

// Single service component with image gallery
const ServiceItem = ({ name, description, images }) => (
  <div className={classes.serviceItem}> {/* Changed styles to classes */}
    <h3>{name}</h3>
    <p>{description}</p>
    <ImageGallery images={images} />
  </div>
);

// Main administrative services component
const AdministrativeService = () => {
  return (
    <section className={classes.administrativeService}> {/* Changed styles to classes */}
      <div className={classes.container}> {/* Changed styles to classes */}
        <h2>Administrative Services</h2>
        <div className={classes.servicesList}> {/* Changed styles to classes */}
          {services.map((service, index) => (
            <ServiceItem
              key={index}
              name={service.name}
              description={service.description}
              images={service.images}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdministrativeService;
