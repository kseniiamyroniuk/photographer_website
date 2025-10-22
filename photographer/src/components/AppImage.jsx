import React from "react";
import '../componentsCSS/AppImage.css'

function AppImage ({ images }) {
  return (
    <div className="apps">
      {images.map((image, index) => (
        <div key={index}>
          <img className="apps-item" src={image.src} alt={image.alt}/>
        </div>
      ))}
    </div>
  );
};

export default AppImage