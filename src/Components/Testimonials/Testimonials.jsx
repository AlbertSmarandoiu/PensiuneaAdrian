import React from "react";
import testimonialsCSS from './../Testimonials/Testimonials.module.css'
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css'
import { Autoplay } from "swiper/modules";

import img1 from './../../assets/roxana.png'
import img2 from './../../assets/ovidiu.png'
import img3 from './../../assets/ioana.png'
import img4 from './../../assets/daniela.png'


function Testimonials(){
    return(
        <div className={ `${testimonialsCSS.testimonials_wrapper} section` }>
            <small  className="section_Heading">Recenzii</small>
            <h2 className="section_Title">Ce au spus  <span>clientii </span>despre noi:</h2>

            <Swiper 
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                autoplay={{
                    delay: 3000,
                }}
                breakpoints={{
                    768: {
                        slidesPerView: 1,
                    },
                    1200: {
                        slidesPerView:2,
                    },
                }}
                speed={1500}
                modules={[Autoplay]}
                className={testimonialsCSS.swiper}
                >
                
                <SwiperSlide>
                    <div className={testimonialsCSS.testimonial}>
                        <img src={img1} alt=""/>
                        <div className={testimonialsCSS.content}>
                            <h3>Roxana <span></span></h3>
                            <p> „Am ales aceasta locație datorită piscinei de care am putut sa me bucurăm ( fără costuri suplimentare) Piscina este foarte mare, apa curată și temperatura potrivită. Camerele și baile, bucătăria sunt foarte spațioase și curate. Proprietarii sunt ...”</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={testimonialsCSS.testimonial}>
                        <img src={img2} alt=""/>
                        <div className={testimonialsCSS.content}>
                            <h3>Ovidiu888<span></span></h3>
                            <p> Raport calitate pret foarte bun! Pozitionarea este buna, la 15-20 de min de mers cu masina pana la Ranca. Paracare in fata curtii, personalul a fost amabil, posibilitatea</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={testimonialsCSS.testimonial}>
                        <img src={img3} alt=""/>
                        <div className={testimonialsCSS.content}>
                            <h3>Ioana <span></span></h3>
                            <p> Totul la această pensiune este de poveste . Gazda minunata un exemplu pentru cum administrează totul . Tot ceea ce doresti găsesti la această pensiune. Felicitări acestor oameni minunați si muncitori, o sa revenim cu mare drag!</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={testimonialsCSS.testimonial}>
                        <img src={img4} alt=""/>
                        <div className={testimonialsCSS.content}>
                            <h3>Daniela <span></span></h3>
                            <p>„Locație superba! Ne am simțit ca acasă! Proprietarii foarte primitori! Cu siguranță vom revenii!”</p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}


export default Testimonials