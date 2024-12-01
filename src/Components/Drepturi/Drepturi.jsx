import React from "react";
import DrepturiCSS from "./../Drepturi/Drepturi.module.css";

function Drepturi() {
    return (
        <footer id="contact" className={`${DrepturiCSS.Drepturi_wrapper} section`}>
            <p>
    Realizare site si mentenanta de <strong>Smarandoiu Albert</strong> | 
    <a href="https://www.linkedin.com/in/albert-smarandoiu-b905ba29a/" className={DrepturiCSS.link} target="_blank" rel="noopener noreferrer">
        LinkedIn
    </a> | 
    <a href="mailto:smarandoiualbert@yahoo.com" className={DrepturiCSS.link}>
        Email
    </a>
</p>

           
        </footer>
    );
}

export default Drepturi;



