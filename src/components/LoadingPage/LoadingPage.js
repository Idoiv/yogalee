import React, { useState, useEffect } from 'react';
import './LoadingPage.css';

const LoadingPage = () => {
  const [showSlogan, setShowSlogan] = useState(false);
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setShowImage(true);  // Show the image after 500 ms
    }, 500);

    const timer2 = setTimeout(() => {
      setShowSlogan(true); // Show the slogan after 1 second
    }, 1000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);  // Cleanup timers
    };
  }, []);

  return (
    <div className="loading-page">
      {showImage && <img className="fade-in" src="/favicon.ico" alt="Loading..." />}
      {showSlogan && <h1 className="fade-in">Connecting Mind, Body, and Soul</h1>}
    </div>
  );
};

export default LoadingPage;
