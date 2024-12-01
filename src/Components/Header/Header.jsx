import React from "react";
import headerCSS from './../Header/Header.module.css'

import {Swiper ,SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Autoplay  , Parallax} from "swiper/modules"

function Header(){
    return(
        <div className={headerCSS.header_wrapper}>
            <Swiper 
            slidesPerView={1}
            spaceBetween={0}
            loop={true}

            className={headerCSS.swiper}
            autoplay={{
                delay:3500,
            }}
            parallax={true}
            speed={[1500]}
            modules={[Autoplay , Parallax]}
            >
                <SwiperSlide>
                    <div className={`${headerCSS.Header_slide} ${headerCSS.slider3}`}>
                        <div className={headerCSS.content}>
                            <small style={{
                                fontSize:  60,
                                color: '#ffff'}} data-swiper-parallax="-200">Pensiunea Adrian</small>
                            <h2 data-swiper-parallax="-300">Bucură-te de o vacanță memorabilă, <br />unde luxul întâlnește confortul,<br /> iar fiecare moment devine o experiență de neuitat! ✨🌿
                            </h2>
                            <p data-swiper-parallax="-400">Suna acum <span>0757741699</span></p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`${headerCSS.Header_slide} ${headerCSS.slider2}`}>
                        <div className={headerCSS.content}>
                            <small data-swiper-parallax="-200">Pensiunea Adrian</small>
                            <h2 data-swiper-parallax="-300">Cu o piscină încălzită și experiențe de lux,<br /> vacanța ta devine un răsfăț la superlativ! 🌊✨
                            </h2>
                            <p data-swiper-parallax="-400">Suna acum <span>0757741699</span></p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`${headerCSS.Header_slide} ${headerCSS.slider1}`}>
                        <div className={headerCSS.content}>
                            <small data-swiper-parallax="-200"></small>
                            <h2 data-swiper-parallax="-300">    
                            </h2>
                            <p data-swiper-parallax="-400">Suna acum <span>0757741699</span></p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}


export default Header