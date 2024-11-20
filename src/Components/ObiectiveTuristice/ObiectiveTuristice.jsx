

import React from "react"; 
import ObiectiveTuristiceCSS from './../ObiectiveTuristice/ObiectiveTuristice.module.css';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';

import img1 from './../../assets/pesteraMuierii.png';
import img2 from './../../assets/casuteleRasturnate1.png';
import img3 from './../../assets/Transalpina.png';
import img4 from './../../assets/Ranca.png';
import img5 from './../../assets/LaculOasa.png';
import { Autoplay } from "swiper/modules";

function ObiectiveTuristice() {
    return (
        <div className={`${ObiectiveTuristiceCSS.ObiectiveTuristice_container} section`}>
            <small style={{ fontSize: 30 }} className="secxtion_Heading">Obiective turistice:</small>
            <h2 className="section_Title">Cateva obiective <span>turistice</span> din zona noastra:</h2>     

            <Swiper 
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                autoplay={{
                    delay: 3000,
                }}
                speed={2000}
                modules={[Autoplay]}
                className={ObiectiveTuristiceCSS.swiper}
            >
                <SwiperSlide>
                    <div className={ObiectiveTuristiceCSS.obiective_item}>
                        <img src={img1} alt="ObiectivaTuristice-img" className={ObiectiveTuristiceCSS.image}/>
                        <div className={ObiectiveTuristiceCSS.content}>
                            <h2>Pestera Muierii</h2>
                            <p>Peștera Muierii este una dintre cele mai cunoscute și vizitate peșteri din România. Peștera se află în comuna Baia de Fier, în județul Gorj. Este importantă și impresionantă atât datorită formațiunilor dezvoltate în interior, dar și pentru relicvele descoperite în ea.
                            Citeşte întreaga ştire: Peștera Muierii - cum ajungi, care e povestea ei și ce mai poți vizita în zonă</p>
                            <button onClick={() => window.open('https://www.libertatea.ro/lifestyle/pestera-muierii-cum-ajungi-legenda-obiective-turistice-3601397', '_blank')}>
                                Vezi site-pestera
                            </button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={ObiectiveTuristiceCSS.obiective_item}>
                        <img src={img2} alt="ObiectivaTuristice-img" className={ObiectiveTuristiceCSS.image}/>
                        <div className={ObiectiveTuristiceCSS.content}>
                            <h2>Casutele Rasturnate</h2>
                            <p>Ți-ai imaginat cum ar fi dacă ai sta într-o casă care, practic, este cu susul în jos.Noi am trecut la fapte și am construit o astfel de locuință !</p>
                            <button onClick={() => window.open('https://www.casutarasturnata.com/', '_blank')}>
                                Site Casute Rasturnate
                                </button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={ObiectiveTuristiceCSS.obiective_item}>
                        <img src={img3} alt="ObiectivaTuristice-img" className={ObiectiveTuristiceCSS.image}/>
                        <div className={ObiectiveTuristiceCSS.content}>
                            <h2>Transalpina</h2>
                            <p>Transalpina este cel mai înalt drum rutier din România cât și din întregul lanț al Munților Carpați, atât din țară cât și din afara ei, atingând altitudinea maxima (2145 m) în Pasul Urdele.</p>
                            <button onClick={() => window.open('https://coltisorderomania.ro/2019/04/11/transalpina-drumul-regelui-cel-mai-inalt-si-mai-frumos-drum-din-romania/', '_blank')}> 
                                Site Transalpina
                                </button>
                        </div>
                    </div>
                </SwiperSlide>
                
                <SwiperSlide>
                    <div className={ObiectiveTuristiceCSS.obiective_item}>
                        <img src={img4} alt="ObiectivaTuristice-img" className={ObiectiveTuristiceCSS.image}/>
                        <div className={ObiectiveTuristiceCSS.content}>
                            <h2>Ranca</h2>
                            <p>Situată la poalele Muntelui Păpușa, stațiunea Rânca este o alegere inspirată atât pentru vacanţele de iarnă, cât şi cele de vară, în special pentru turiştii care îşi doresc să scape de aglomeraţia oraşului pentru câteva zile
                            Citeşte întreaga ştire: Stațiunea Rânca - ce poți face în cea mai înaltă stațiune din România</p>
                            <button onClick={() => window.open('https://www.libertatea.ro/lifestyle/statiunea-ranca-obiective-turistice-3690123', '_blank')}>
                                Vezi Ranca
                                </button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={ObiectiveTuristiceCSS.obiective_item}>
                        <img src={img5} alt="ObiectivaTuristice-img" className={ObiectiveTuristiceCSS.image}/>
                        <div className={ObiectiveTuristiceCSS.content}>
                            <h2>Lacul Oasa</h2>
                            <p>Din Obârşia Lotrului, după ce se trece pe Transalpina de stațiunea Rânca, turiştii au mai multe opţiuni de a-şi petrece timpul liber.
                            Citeşte întreaga ştire: Stațiunea Rânca - ce poți face în cea mai înaltă stațiune din România</p>
                            <button onClick={() => window.open('https://www.libertatea.ro/lifestyle/lacul-oasa-3970880', '_blank')}>
                                Vezi Lacul Oasa
                                </button>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper> 
        </div>
    );
}

export default ObiectiveTuristice;
