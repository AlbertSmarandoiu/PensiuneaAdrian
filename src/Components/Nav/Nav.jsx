import React ,{useRef} from "react";
import navCSS from './../Nav/Nav.module.css'

function Nav(){

    const menu = useRef();

    const navbar = useRef();
    // const menuHandler =() =>{
    //     menu.current.classList.toggle(navCSS.showNav);
    // }
    // const menuHandler = () => {
    //     const menu = document.querySelector(navCSS.nav_wrapper);
    //     menu.classList.toggle(navCSS.showNav);
    // };
    const menuHandler = () => {
        menu.current.classList.toggle(navCSS.showNav);
    };

    window.addEventListener('scroll' ,function(){
        if(window.scrollY>100){
            navbar.current.classList.add(navCSS.navbarScroll)
        }else{
            navbar.current.classList.remove(navCSS.navbarScroll)
        }
    })

    return(
        <div className ={navCSS.nav_wrapper} ref={navbar}>
            <div className = {navCSS.logo}>
                <a href="#"><span>Pensiunea</span> Adrian</a>
            </div>

            <ul ref={menu}>
                <li> <a href="#">Acasa</a> </li>
                <li> <a href="#">Despre Noi</a> </li>
                <li> <a href="#">Camere</a> </li>
                <li> <a href="#">Aici vad dupa</a> </li>
                <li> <a href="#">Contact</a> </li>

            </ul>

            <div className={navCSS.Nav_btns}>
                <button  className={navCSS.btn}>Fa o rezervare acum</button>
                <i className="ri-menu-4-line" id={navCSS.bars} onClick={menuHandler}></i> 
                           
            </div>
        </div>
        
    )

}

export default Nav