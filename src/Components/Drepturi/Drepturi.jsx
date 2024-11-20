import React from "react";
import DrepturiCSS from "./../Drepturi/Drepturi.module.css";

function Drepturi() {
    return (
        <footer id="contact" className={`${DrepturiCSS.Drepturi_wrapper} section`}>
            <p>
                Realizare site și mentenanță efectuată de <strong>Smarandoiu Albert</strong>.
                <br />
                LinkedIn:{" "}
                <a
                    href="https://www.linkedin.com/in/albert-smarandoiu-b905ba29a/"
                    className={DrepturiCSS.link}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    SmarandoiuAlbert
                </a>
                {" | "}
                Email:{" "}
                <a
                    href="mailto:smarandoiualbert@yahoo.com"
                    className={DrepturiCSS.link}
                >
                    smarandoiualbert@yahoo.com
                </a>
            </p>
            <div className="social-links">
                {/* Adaugăm linkuri pentru social media, dacă este cazul */}
                <a href="https://linkedin.com/in/albert-smarandoiu" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin"></i> {/* FontAwesome pentru iconițe */}
                </a>
                <a href="mailto:smarandoiualbert@yahoo.com">
                    <i className="fas fa-envelope"></i>
                </a>
            </div>
        </footer>
    );
}

export default Drepturi;
