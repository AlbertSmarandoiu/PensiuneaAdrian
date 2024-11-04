import React from "react";
import aboutCSS from './../About/About.module.css'

import aboutImg from './../../assets/piscina.png'


function About(){
    return(
        <div className={`${aboutCSS.about_wrapper} section`}>
            <div className = {aboutCSS.about_img}>
                <img src={aboutImg} alt="about_img"/>
            </div>
            <div className = {aboutCSS.about_content}>
                <small className="section_Heading">Pensiunea Adrian</small>
                <h2 className="section_Title">Despre <span>noi</span></h2>
                <div>
                    <h3 className={aboutCSS.aboutPensiune}>
                    Pensiunea Adrian se află în Novaci-Străini, la 22 km de Ranca Ski Resort, și pune la dispoziție o grădină, o zonă de plajă privată, o terasă și parcare privată gratuită. Printre facilitățile disponibile la această proprietate se numără o bucătărie comună și o recepție deschisă nonstop, precum și WiFi gratuit în întreaga proprietate. Oaspeții pot să utilizeze o cadă cu hidromasaj sau să se bucure de vederea la oraș.
                     Camerele de la această pensiune sunt echipate cu zonă de relaxare, televizor cu ecran plat cu canale prin cablu, bucătărie, zonă de luat masa și baie proprie cu articole de toaletă gratuite, duș și un uscător de păr. Pensiunea Adrian oferă anumite camere care includ un balcon, iar fiecare cameră include o cafetieră. La Pensiunea Adrian, fiecare cameră este dotată cu lenjerie de pat și prosoape. Această pensiune pune la dispoziție un teren de joacă pentru copii.
                      La Pensiunea Adrian puteți juca biliard, iar zona este populară pentru hiking și schi.
                    
                    </h3>
                </div>
                <div className={aboutCSS.Cards}>
                    <p>260+ <span>Reviwuri</span></p>
                    <p>25k <span>Vizitatori</span></p>
                </div>
                
            </div>
        </div>
    )
}

export default About