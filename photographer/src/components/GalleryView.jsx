import React from "react";
import '../componentsCSS/HorizontalGallery.css'

function HorizontalGallery ({ images }) {
  return (
    <div className="gallery">
      {images.map((image, index) => (
        <div key={index}>
          <img className="gallery-item" src={image.src} alt={image.alt}/>
        </div>
      ))}
    </div>
  );
};

export default HorizontalGallery