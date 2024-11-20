import React, { useState } from "react";
import galerieCSS from "./../Galerie/Galerie.module.css";

import img1 from "./../../assets/pensiune_integrala.png";
import img2 from "./../../assets/piscina.png";
import img3 from "./../../assets/jacuzzi.png";
import img4 from "./../../assets/pensiune_integrala2.png";
import img5 from "./../../assets/IMG-20241117-WA0007.jpg";
import img6 from "./../../assets/IMG-20241117-WA0008.jpg";
import img7 from "./../../assets/IMG-20241117-WA0009.jpg";
import img8 from "./../../assets/IMG-20241117-WA0010.jpg";
import img9 from "./../../assets/IMG-20241117-WA0011.jpg";
import img10 from "./../../assets/IMG-20241117-WA0012.jpg";
import img11 from "./../../assets/IMG-20241117-WA0013.jpg";
import img12 from "./../../assets/IMG-20241117-WA0014.jpg";
import img13 from "./../../assets/IMG-20241117-WA0015.jpg";
import img14 from "./../../assets/IMG-20241117-WA0016.jpg";
import img15 from "./../../assets/IMG-20241117-WA0017.jpg";
import img16 from "./../../assets/IMG-20241117-WA0018.jpg";
import img17 from "./../../assets/IMG-20241117-WA0019.jpg";

import img18 from "./../../assets/gratar.png";

const images = [
    img1, img2, img3, img4,img5 , img6 , 
    img7 , img8 , img9 , 
    img10,img11 ,
    img12 ,img13 ,img14,
    img15 ,img16,
    img17,
    // add all your images in this array
    img18
];

function Galerie() {
    const [currentIndex, setCurrentIndex] = useState(null);
    const [showAll, setShowAll] = useState(false); // Starea pentru a afișa toate imaginile


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
        <div id="galerieFoto" className={galerieCSS.galerie_Wrapper}>
            <small className="section_Heading"><span></span></small>
            <h2 className="section_Title"> Galerie <span> Foto:
                
                 </span></h2>
            <h2>  </h2>
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
