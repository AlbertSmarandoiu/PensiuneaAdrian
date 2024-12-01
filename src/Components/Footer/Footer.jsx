import React from "react";
import footerCSS from './../Footer/Footer.module.css'

function Footer(){
    return(
        <footer id="contact" className={`${footerCSS.footer_wrapper} section`}>
            <div className={footerCSS.FooterLinks}>
                <div className={footerCSS.logo}></div>
                <h2>Pensiunea Adrian</h2>
                <p>Un loc unde natura îmbrățișează confortul, unde distracția și relaxarea se întâlnesc, iar fiecare oaspete descoperă bucuria unui sejur de neuitat. La noi, clipele frumoase devin amintiri pentru totdeauna!</p>
            </div>
            <div className={footerCSS.FooterLinks}>
                <h3>Cateva Linkuri:</h3>
                {/* <p >Despre</p> */}
                <li><a href="#despre-noi">Despre Noi</a></li>
                {/* <p>Contact us</p> */}
                <li><a href="#contact">Contact</a></li>
                {/* <p>Camere</p> */}
                <li><a href="#camere">Camere</a></li>
            </div>
            <div className={footerCSS.FooterLinks}>
            <h3>Locatia</h3>
                <p>Romania, Judetul Gorj ,Novaci </p>
            </div>
            <div className={footerCSS.FooterLinks}>
            <h3>Contact Us</h3>
            <p>
                    Adresa: 
                    <a
                        href="https://www.google.com/maps/search/?api=1&query=Pensiunea+Adrian +Nr.78+215300+Novaci-Straini+Romania"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={footerCSS.link}
                    >
                        Strada Nucilor, Nr.78, 215300, Novaci-Straini Romania
                    </a>
                </p>
                <p>
                    Email: 
                    <a
                        href="mailto:adrian.cirtina@yahoo.com"
                        className={footerCSS.link}
                    >
                        adrian.cirtina@yahoo.com
                    </a>
                </p>   <p>
                    Telefon: 
                    <a
                        href="tel:0757741699"
                        className={footerCSS.link}
                    >
                        0757741699
                    </a>
                </p>
            </div>
        </footer>
    )
}

export default Footer