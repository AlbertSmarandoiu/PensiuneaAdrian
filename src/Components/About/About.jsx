import React from "react";
import aboutCSS from './../About/About.module.css'

import aboutImg from './../../assets/piscina.png'


function About(){
    return(
        <div id="despre-noi" className={`${aboutCSS.about_wrapper} section`}>
            <div className = {aboutCSS.about_img}>
                <img src={aboutImg} alt="about_img"/>
            </div>
            <div className = {aboutCSS.about_content}>
                <small className="section_Heading">Pensiunea Adrian</small>
                <h2 className="section_Title">Despre <span>noi</span></h2>
                {/* <div>
                 className={aboutCSS.aboutPensiune} 
                    <h3>
                    Pensiunea Adrian se află în Novaci-Transalpina, la 18 km de Rânca Ski Resort și vă pune la dispoziție 6 camere duble și 2 camere triple. Printre facilitățile proprietății se numără două bucătării complet echipate, un grătar exterior, terasă generoasă, diverse zone cu verdeață și spații pentru copii, parcare privată gratuită, ciubăr cu aeromasaj de care va puteti bucura tot anul si piscină încălzită până în sezonul de iarnă, însoțita de o arie privată de plajă cu șezlonguri, baldachine, umbrele și măsuțe. 

                    Camerele sunt dotate cu aer condiționat, lenjerii albe din bumbac, dulapuri încăpătoare și TV. Fiecare cameră are baia sa proprie cu  duș walk-in, cabină sau cadă cu aeromasaj. Pe lângă acestea, oaspeții noștri au la dispoziție prosoape mici și mari, produse de toaletă gratuită și uscătoare de păr.  
                    Curtea exterioară este spațioasă, cu zone de luat masa, foișor și biliard. 

                    <h3>În ceea ce privește zonele turistice, noi vă recomandăm: </h3>
                    <h4>        *Rânca Ski Resort și Parc </h4>
                    <h4>        *Peștera Muierilor </h4>
                    <h4>        *Peștera Polovragi </h4>
                    <h4>*Mănăstirea Polovragi </h4>
                    <h4>*Căsuța Răsturnată </h4>
                    <h4>*Castelul Vrăjitoarelor</h4>
                    <h4>*Pădurea colorată  </h4> 
                    </h3>
                    <h3>Colaboram cu diverse restaurante din zona, unde beneficiati de reduceri si transport gratuit.</h3>
                   
                </div> */}
                <div>
    <h3></h3>
    <p>
    Pensiunea Adrian se află în Novaci-Transalpina, la 18 km de Rânca Ski Resort și vă pune la dispoziție 6 camere duble și 2 camere triple. Printre facilitățile proprietății se numără două bucătării complet echipate, un grătar exterior, terasă generoasă, diverse zone cu verdeață și spații pentru copii, parcare privată gratuită, ciubăr cu aeromasaj de care va puteti bucura tot anul si piscină încălzită până în sezonul de iarnă, însoțita de o arie privată de plajă cu șezlonguri, baldachine, umbrele și măsuțe. 

         </p>
    <p>
    Camerele sunt dotate cu aer condiționat, lenjerii albe din bumbac, dulapuri încăpătoare și TV. Fiecare cameră are baia sa proprie cu  duș walk-in, cabină sau cadă cu aeromasaj. Pe lângă acestea, oaspeții noștri au la dispoziție prosoape mici și mari, produse de toaletă gratuită și uscătoare de păr.  
    </p>
    <p>
    Curtea exterioară este spațioasă, cu zone de luat masa, foișor și biliard.     </p>
    <h3>În ceea ce privește zonele turistice, noi vă recomandăm:    </h3>
    <ul>
        <li><a href="#PesteraMuierii">Pestera Muierii</a></li>
        <li><a href="#PesteraPolovragi">Pestera Polovragi</a></li>
        <li><a href="#Casutele">Casutele Rasturnate</a> </li>
        <li><a href="#Padurea">Padurea Colorata</a> </li>
        <li>Rânca Ski Resort și Parc</li>
        <li>Castelul Vrăjitoarelor</li>
    </ul>
    <h3>
    Colaboram cu diverse restaurante din zona, unde beneficiati de reduceri si transport gratuit.
    </h3>
</div>

                <div className={aboutCSS.Cards}>
                    <p>260+ <span>Recenzii</span></p>
                    <p>2000+ <span>Vizitatori</span></p>
                </div>
                
            </div>
        </div>
    )
}

export default About