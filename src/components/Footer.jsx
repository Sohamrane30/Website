import React from 'react';
import catImage from '../assets/pngwing.com.png';
import reactLogo from '../assets/react.svg';
import '../css/Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="cat-wrapper">
        <img src={catImage} alt="Rainbow Cat" className="rainbow-cat" />
      </div>
      <div className="footer-text">
        Made with <span role="img" aria-label="heart">❤️</span> using
        <img src={reactLogo} alt="React Logo" className="react-logo" />
      </div>
    </footer>
  );
}
