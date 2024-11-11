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
                    <p>-camere pentru nefumători</p>
                    <p>-facilităţi pentru persoane cu mobilitate redusă</p>
                    <p>-WiFi gratuit inclus</p>
                    <p>-parcare gratuită</p>
                    <p>-camere de familie</p>
                    <p>-Aparat de preparare a ceaiului/cafelei în toate camerele</p>
                    <p>-zonă de plajă privată</p>
                </div>
                <div className={ServicesCSS.Services_card}>
                    <i className="ri-hotel-bed-line"></i>
                    <h3>-Facilitati Camere:</h3>
                    <p>-Paturi confrtablie</p>
                    <p>-Baie individuala</p>
                    <p>-WiFi gratuit inclus</p>
                    <p>-TV si AC</p>
                    <p>-Bar</p>
                </div>
            </div>
                
        </div>
    )
}

export default Services