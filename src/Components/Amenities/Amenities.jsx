import React from "react";
import amenitiesCSS from './../Amenities/Amenities.module.css'
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css'

import img1 from './../../assets/piscina1.png'
import img2 from './../../assets/gratar.png'
import img3 from './../../assets/jacuzzi.png'
import img4 from './../../assets/IMG-20241117-WA0012.jpg'
import img5 from './../../assets/firepit.jpg'

import { Autoplay } from "swiper/modules";


function Amenities(){
    const menuHandler = () => {
        menu.current.classList.toggle(navCSS.showNav);
    };
    return(
        <div className={`${amenitiesCSS.amenities_wrapper} section`}>
            <small  className="section_Heading"></small>
            <h2 className="section_Title">Cele mai bune facilitati ale noastre:</h2>

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
                            <img src={img1} alt="aminties-img"className={amenitiesCSS.image}/>
                            <div className={amenitiesCSS.content}>
                                <h2>
                                    Piscina
                                </h2>
                                <p>Relaxare totală cu acces gratuit la piscina încălzită pe toată durata șederii! Apusuri de vis, natură, și voie bună, totul într-un colț de paradis.</p>
                                <button>Book Now</button>
                            </div>
                    </div>
                </SwiperSlide>
                {/* <SwiperSlide>
                    <div className={amenitiesCSS.amenities_item}>
                            <img src={img2} alt="aminties-img"className={amenitiesCSS.image}/>
                            <div className={amenitiesCSS.content}>
                                <h2>
                                    Gratar
                                </h2>
                                <p>Loc </p>
                                <button>Book Now</button>
                            </div>
                    </div>
                </SwiperSlide> */}
                <SwiperSlide>
                    <div className={amenitiesCSS.amenities_item}>
                            <img src={img3} alt="aminties-img"className={amenitiesCSS.image}/>
                            <div className={amenitiesCSS.content}>
                                <h2>
                                    Jacuzzi
                                </h2>
                                <p>Jacuzzi-ul gratuit e răsfățul suprem pe toată durata șederii - bule relaxante, priveliști de vis și vibe-ul perfect pentru vacanța ta!</p>
                                <button>Book Now</button>
                            </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={amenitiesCSS.amenities_item}>
                        <img src={img4} alt="aminties-img"className={amenitiesCSS.image}/>
                            <div className={amenitiesCSS.content}>
                                <h2>
                                    Biliard
                                </h2>
                                <p>La pensiunea noastră, distracția prinde forme noi!<br /> Combinăm eleganța jocului de biliard cu energia tenisului de masă,<br /> oferindu-vă două activități clasice pentru momente memorabile alături de prieteni și familie.  </p>
                                <button>Book Now</button>
                            </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={amenitiesCSS.amenities_item}>
                            <img src={img5} alt="aminties-img"className={amenitiesCSS.image}/>
                            <div className={amenitiesCSS.content}>
                                <h2>
                                    Foc de tabara
                                </h2>
                                <p>Vă invităm să descoperiți colțul nostru de poveste - locul de vatră pentru foc, sub cerul liber! 
                                </p>
                                <button>Book Now</button>
                            </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        
        </div>
    )
}
export default Amenities