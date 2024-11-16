import React, { useState } from "react";
import galerieCSS from "./../Galerie/Galerie.module.css";

import img1 from "./../../assets/pensiune_integrala.png";
import img2 from "./../../assets/piscina.png";
import img3 from "./../../assets/jacuzzi.png";
import img4 from "./../../assets/pensiune_integrala2.png";
// ... import all 20 images
import img18 from "./../../assets/gratar.png";

const images = [
    img1, img2, img3, img4, 
    // add all your images in this array
    img18
];

function Galerie() {
    const [currentIndex, setCurrentIndex] = useState(null);

    const openLightbox = (index) => {
        setCurrentIndex(index);
    };

    const closeLightbox = () => {
        setCurrentIndex(null);
    };

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    return (
        <div className={galerieCSS.galerie_Wrapper}>
            <small className="section_Heading">Galerie <span>foto</span>:</small>
            <h2 className="section_Title"><span></span></h2>
            
            <div className={galerieCSS.galleryGrid}>
                {images.map((img, index) => (
                    <img 
                        key={index} 
                        src={img} 
                        alt={`Photo ${index + 1}`} 
                        onClick={() => openLightbox(index)}
                        className={galerieCSS.thumbnail}
                    />
                ))}
            </div>

            {currentIndex !== null && (
                <div className={galerieCSS.lightbox}>
                    <button className={galerieCSS.closeButton} onClick={closeLightbox}>✖</button>
                    <button className={galerieCSS.prevButton} onClick={goToPrevious}>◀</button>
                    <img src={images[currentIndex]} alt={`Photo ${currentIndex + 1}`} className={galerieCSS.lightboxImage}/>
                    <button className={galerieCSS.nextButton} onClick={goToNext}>▶</button>
                </div>
            )}
        </div>
    );
}

export default Galerie;
