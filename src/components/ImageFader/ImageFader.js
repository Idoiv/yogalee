import React, { useState, useEffect } from 'react';
import './ImageFader.css';

const ImageFader = () => {
  const images = [
    '/WhatsApp Image 2023-09-01 at 13.36.06 (2).jpeg',
    '/WhatsApp Image 2023-09-01 at 13.36.06.jpeg',
    '/me.jpeg',
    '/malik.jpeg'
  ];
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // 5 seconds per image

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="image-fader">
      {images.map((image, index) => (
        <img 
          key={index}
          src={image}
          alt=""
          className={currentImageIndex === index ? 'visible' : 'hidden'}
        />
      ))}
    </div>
  );
};

export default ImageFader;
