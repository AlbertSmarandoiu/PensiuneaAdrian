import React from "react";
import ServicesCSS from './../Services/Services.module.css'



function Services(){
    return (
        <div className={`${ServicesCSS.Sevices_wrapper} section`}>
            <small  className="section_Heading">Facilitati:</small>
            <h2 className="section_Title">Despre <span>noi</span></h2>

            <div className={ServicesCSS.Services_cards}>
                <div className={ServicesCSS.Services_card}>
                    <i className="ri-hotel-line"></i>
                    <h3>-Facilitati normale:</h3>
                    <p>-Camere pentru nefumători</p>
                    <p>-WiFi gratuit inclus</p>
                    <p>-Parcare gratuită</p>
                    <p>-Camere de familie</p>
                    <p>-Piscina sezoniera</p>
                    <p>-Zonă de plajă privată</p>
                    <p>-Ciubar cu aero-masaj</p>
                    <p>-2 bucatarii comune</p>
                    <p>-Biliard</p>
                    <p>-Gratar curte</p>
                    <p>-Foisor exterior</p>
                    <p>-Vatra de foc</p>
                    </div>
                <div className={ServicesCSS.Services_card}>
                    <i className="ri-hotel-bed-line"></i>
                    <h3>-Facilitati Camere:</h3>
                    <p>-Lenjerii albe</p>
                    <p>-Tv</p>
                    <p>-Aer condiționat </p>
                    <p>-Prosoape față/baie</p>
                    <p>-Produse de igienă</p>
                    <p>-Uscător de păr</p>
                </div>
            </div>
                
        </div>
    )
}

export default Services