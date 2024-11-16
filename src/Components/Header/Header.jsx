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
                delay:2500,
            }}
            parallax={true}
            speed={[1500]}
            modules={[Autoplay , Parallax]}
            >
                <SwiperSlide>
                    <div className={`${headerCSS.Header_slide} ${headerCSS.slider1}`}>
                        <div className={headerCSS.content}>
                            <small data-swiper-parallax="-200">Pensiunea Adrian</small>
                            <h2 data-swiper-parallax="-300">Bucurate de o <span>vacanta</span> cu <br/>
                                <span>Exepriente</span> de Lux
                            </h2>
                            <p data-swiper-parallax="-400">Suna acum <span>0757741699</span></p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`${headerCSS.Header_slide} ${headerCSS.slider2}`}>
                        <div className={headerCSS.content}>
                            <small data-swiper-parallax="-200">Pensiunea Adrian</small>
                            <h2 data-swiper-parallax="-300">Cu  <span>piscina incalzita</span>  <br/>
                                <span>Exepriente</span> de Lux
                            </h2>
                            <p data-swiper-parallax="-400">Suna acum <span>0757741699</span></p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`${headerCSS.Header_slide} ${headerCSS.slider3}`}>
                        <div className={headerCSS.content}>
                            <small data-swiper-parallax="-200">Pensiunea Adrian</small>
                            <h2 data-swiper-parallax="-300">Bucurate de o vacanta cu <br/>
                                Exepriente de Lux
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