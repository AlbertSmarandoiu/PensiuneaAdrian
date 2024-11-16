import React from "react";
import roomsCSS from './../Rooms/Room.module.css'

function Rooms(){
    return(
        <div id="camere" className={`${roomsCSS.Rooms_container} section`}>
            <small  className="section_Heading">Camerele Noastre:</small>
            <h2 className="section_Title">Despre <span>camere</span> noastre:</h2>

            <div className={roomsCSS.cards}>
                <div className={roomsCSS.card_Container}>
                    <div className={roomsCSS.card}>
                        <div className={`${roomsCSS.Card_front} ${roomsCSS.Card_front1}`}>
                            <button>Camera Delux</button>
                        </div>
                        {/* in spatele imaginii */}
                        <div className={roomsCSS.Card_back}>
                            <div className={roomsCSS.Card_content}>
                                {/* <p className={roomsCSS.prince}>120</p> */}
                                <h3>Camera Delux</h3>
                                <p> - Baie proprie</p>
                                <p> - Wifi Gratuit</p>
                                <p> - Priveliște frumoasă</p>
                                <p> - Cada cu hidromasaj</p>
                            </div>
                            <div className={roomsCSS.BookNow}>
                                <button>Book new</button>
                                <i className="ri-arrow-left-line"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={roomsCSS.card_Container}>
                    <div className={roomsCSS.card}>
                        <div className={`${roomsCSS.Card_front} ${roomsCSS.Card_front2}`}>
                            <button>Camera dubla</button>
                        </div>
                        {/* in spatele imaginii */}
                        <div className={roomsCSS.Card_back}>
                            <div className={roomsCSS.Card_content}>
                                {/* <p className={roomsCSS.prince}>120</p> */}
                                <h3>Camera Delux</h3>
                                <p> - Baie proprie</p>
                                <p> - Wifi Gratuit</p>
                                <p> - Priveliște frumoasă</p>
                                <p> - Cada cu hidromasaj</p>
                            </div>
                            <div className={roomsCSS.BookNow}>
                                <button>Book new</button>
                                <i className="ri-arrow-left-line"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={roomsCSS.card_Container}>
                    <div className={roomsCSS.card}>
                        <div className={`${roomsCSS.Card_front} ${roomsCSS.Card_front3}`}>
                            <button>Camera queen</button>
                        </div>
                        {/* in spatele imaginii */}
                        <div className={roomsCSS.Card_back}>
                            <div className={roomsCSS.Card_content}>
                                {/* <p className={roomsCSS.prince}>120</p> */}
                                <h3>Camera Delux</h3>
                                <p> - Baie proprie</p>
                                <p> - Wifi Gratuit</p>
                                <p> - Priveliște frumoasă</p>
                                <p> - Cada cu hidromasaj</p>
                            </div>
                            <div className={roomsCSS.BookNow}>
                                <button>Book new</button>
                                <i className="ri-arrow-left-line"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={roomsCSS.card_Container}>
                    <div className={roomsCSS.card}>
                        <div className={`${roomsCSS.Card_front} ${roomsCSS.Card_front4}`}>
                            <button>Camera Delux</button>
                        </div>
                        {/* in spatele imaginii */}
                        <div className={roomsCSS.Card_back}>
                            <div className={roomsCSS.Card_content}>
                                {/* <p className={roomsCSS.prince}>120</p> */}
                                <h3>Camera Delux</h3>
                                <p> - Baie proprie</p>
                                <p> - Wifi Gratuit</p>
                                <p> - Priveliște frumoasă</p>
                                <p> - Cada cu hidromasaj</p>
                            </div>
                            <div className={roomsCSS.BookNow}>
                                <button>Book new</button>
                                <i className="ri-arrow-left-line"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        
    )
}

export default Rooms
// import React from "react";
// import roomsCSS from './../Rooms/Room.module.css';

// function Rooms(){
//     return(
//         <div id="camere" className={`${roomsCSS.Rooms_container} section`}>
//             <small className="section_Heading">Camerele Noastre:</small>
//             <h2 className="section_Title">Despre <span>camere</span> noastre:</h2>

//             <div className={roomsCSS.cards}>
//                 <div className={roomsCSS.card_Container}>
//                     <div className={roomsCSS.card}>
//                         {/* Front of the Card */}
//                         <div className={`${roomsCSS.Card_front}`}>
//                             <button>Camera Delux</button>
//                         </div>

//                         {/* Back of the Card */}
//                         <div className={roomsCSS.Card_back}>
//                             <div className={roomsCSS.Card_content}>
//                                 <p className={roomsCSS.price}>$120/N</p>
//                                 <h3>Junior Suite</h3>
//                                 <p>- Daily Cleaning</p>
//                                 <p>- Home Service</p>
//                                 <p>- Housekeeping</p>
//                                 <p>- Wifi & Parking</p>
//                             </div>
//                             <div className={roomsCSS.BookNow}>
//                                 <button>Book Now</button>
//                                 <i className="ri-arrow-left-line"></i>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Rooms;
