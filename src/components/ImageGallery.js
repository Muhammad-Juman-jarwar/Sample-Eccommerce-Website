import React from 'react';
import img1 from '../images/building.jpg'
import img2 from '../images/desk.jpg'
import img3 from '../images/loft.jpg'
import img4 from '../images/mountain_bg.jpg'
import img5 from '../images/star-sky.jpg'
import img6 from '../images/nature.jpg'
import './ImageGallery.css';

const ImageGallery = () => {
  const images = [
    {
      src: img1,
      alt: 'Image 1',
      title: 'Image 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      src: img2,
      alt: 'Image 2',
      title: 'Image 2',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      src: img3,
      alt: 'Image 3',
      title: 'Image 3',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      src: img4,
      alt: 'Image 3',
      title: 'Image 3',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      src: img5,
      alt: 'Image 3',
      title: 'Image 3',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      src: img6,
      alt: 'Image 3',
      title: 'Image 3',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
  ];

  return (
    <div className="ImageGallery">
      <div>
        <h2 className="ImageGallery__title">Image Gallery</h2>
        </div>
        {/* make a Suitable Description as well */}
        <div>
        <p className="ImageGallery__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      {images.map((image, index) => (
        <div className="ImageGallery__item" key={index}>
          <img className="ImageGallery__image" src={image.src} alt={image.alt} />
          <div className="ImageGallery__overlay">
            <h2 className="ImageGallery__title">{image.title}</h2>
            <p className="ImageGallery__description">{image.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
