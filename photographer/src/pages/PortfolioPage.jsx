import React from "react";
import Texts from "../components/Texts"
import HorizontalGallery from "../components/GalleryView";

function PortfolioPage() {
    const imagesView = [
      {src: 'src/assets/view/IMG_0034.jpeg', alt: "гарний вид"},
      {src: 'src/assets/view/IMG_1070.jpeg', alt: "гарний вид"},
      {src: 'src/assets/view/IMG_1081.jpeg', alt: "гарний вид"}, 
      {src: 'src/assets/view/IMG_1271.jpeg', alt: "гарний вид"},  
      {src: 'src/assets/view/IMG_1313.JPG', alt: "гарний вид"}, 
      {src: 'src/assets/view/IMG_1358.jpeg', alt: "гарний вид"}, 
    
    ]

    const imagesStudio = [
       {src: 'src/assets/studio/P1222572 copy.jpg', alt: "красива людина"},
        {src: 'src/assets/studio/P1222638 copy.jpg', alt: "красива людина"},
        {src: 'src/assets/studio/P1222690 copy.jpg', alt: "красива людина"},
        {src: 'src/assets/studio/P1222779 copy.jpg', alt: "красива людина"},
        {src: 'src/assets/studio/P1222935 copy.jpg', alt: "красива людина"},
        {src: 'src/assets/studio/P1211158 copy.jpg', alt: "красива людина"},
        {src: 'src/assets/studio/P1211468 copy.jpg', alt: "красива людина"},
        {src: 'src/assets/studio/P1211526 copy.jpg', alt: "красива людина"},
        {src: 'src/assets/studio/P1211659 copy.jpg', alt: "красива людина"},
        
        ]

    const imagesOutdoor = [
        {src: 'src/assets/outdoor/P1244458 copy.jpg', alt: "красива людина"},
        {src: 'src/assets/outdoor/P1244488 copy.jpg', alt: "красива людина"},
        {src: 'src/assets/outdoor/P1277561.jpg', alt: "красива людина"},
        {src: 'src/assets/outdoor/P1277578.jpg', alt: "красива людина"},
        {src: 'src/assets/outdoor/P1277637.jpg', alt: "красива людина"},
        {src: 'src/assets/outdoor/P1277659.jpg', alt: "красива людина"},
        {src: 'src/assets/outdoor/P1277772.jpg', alt: "красива людина"},
        // {src: '', alt: "красива людина"},

    ]
    
    return (
        <>
            <Texts text="Portfolio"></Texts>
            <HorizontalGallery images={imagesView}></HorizontalGallery>
            <HorizontalGallery images={imagesStudio}></HorizontalGallery>
            <HorizontalGallery images={imagesOutdoor}></HorizontalGallery>
        </>
    )
}

export default PortfolioPage;