import React from "react";
import amenitiesCSS from './../Amenities/Amenities.module.css'
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css'

import img1 from './../../assets/piscina1.png'
import img2 from './../../assets/gratar.png'
import img3 from './../../assets/jacuzzi.png'
import img4 from './../../assets/biliard.png'
import { Autoplay } from "swiper/modules";


function Amenities(){
    const menuHandler = () => {
        menu.current.classList.toggle(navCSS.showNav);
    };
    return(
        <div className={`${amenitiesCSS.amenities_wrapper} section`}>
            <small  className="section_Heading">Facilitati :</small>
            <h2 className="section_Title">Cele mai bune <span>facilitati </span>ale noastre:</h2>

            <Swiper 
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                autoplay={{
                    delay: 1000,
                }}
                speed={2000}
                modules={[Autoplay]}
                className={amenitiesCSS.swiper}
            >
                <SwiperSlide>
                    <div className={amenitiesCSS.amenities_item}>
                            <img src={img1} alt="aminties-img"/>
                            <div className={amenitiesCSS.content}>
                                <h2>
                                    Piscina
                                </h2>
                                <p>Aveti piscina incalzita gratuita pe intreaga perioadei</p>
                                <button>Book Now</button>
                            </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={amenitiesCSS.amenities_item}>
                            <img src={img2} alt="aminties-img" />
                            <div className={amenitiesCSS.content}>
                                <h2>
                                    Gratar
                                </h2>
                                <p>Loc de gratar</p>
                                <button>Book Now</button>
                            </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={amenitiesCSS.amenities_item}>
                        <img src={img3} alt="aminties-img"/>
                            <div className={amenitiesCSS.content}>
                                <h2>
                                    Javuzzi
                                </h2>
                                <p>Aveti jacuzzi gratuit pe intreaga perioadei</p>
                                <button>Book Now</button>
                            </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={amenitiesCSS.amenities_item}>
                        <img src={img4} alt="aminties-img"/>
                            <div className={amenitiesCSS.content}>
                                <h2>
                                    Biliard
                                </h2>
                                <p>Aveti biliard gratuit pe intreaga perioadei</p>
                                <button>Book Now</button>
                            </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        
        </div>
    )
}
export default Amenities