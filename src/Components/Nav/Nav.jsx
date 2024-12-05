import React, { useRef } from "react";
import navCSS from "./../Nav/Nav.module.css";

 import img1 from './../../assets/logo.png'

function Nav() {
    const menu = useRef();
    const navbar = useRef();

    // Menu toggle function
    const menuHandler = () => {
        menu.current.classList.toggle(navCSS.showNav);
    };

    // Scroll effect
    window.addEventListener("scroll", function () {
        if (window.scrollY > 100) {
            navbar.current.classList.add(navCSS.navbarScroll);
        } else {
            navbar.current.classList.remove(navCSS.navbarScroll);
        }
    });

    return (
        <div className={navCSS.nav_wrapper} ref={navbar}>
            
            
            <div className={navCSS.logo}>
            <img src={img1} alt="aminties-img"className={navCSS.imageLogo}/>
                <a href="#">
                     
                    Pensiunea Adrian
                </a>
            </div>

            {/* Menu UL */}
            <ul ref={menu} className={navCSS.nav_menu}>
                <li><a href="#">Acasa</a></li>
                <li><a href="#despre-noi">Despre Noi</a></li>
                <li><a href="#camere">Camere</a></li>
                <li><a href="#galerieFoto">Galerie</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            {/* WhatsApp Button */}
            <div className={navCSS.Nav_btns}>
                <a
                    href="https://wa.me/+40757741699?text=Hello%20Pensiunea%20Adrian,%20I%20would%20like%20to%20make%20a%20reservation."
                    className={navCSS.btn}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Book now
                </a>
                <i className="ri-menu-4-line" id={navCSS.bars} onClick={menuHandler}></i>
            </div>
        </div>
    );
}

export default Nav;
