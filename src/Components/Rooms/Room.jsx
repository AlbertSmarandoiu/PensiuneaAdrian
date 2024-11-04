import React from "react";
import roomsCSS from './../Rooms/Room.module.css'

function Rooms(){
    return(
        <div className={`${roomsCSS.Rooms_container} section`}>
            <small  className="section_Heading">Camerele Noastre:</small>
            <h2 className="section_Title">Despre <span>camere</span> noastre:</h2>

            <div className={roomsCSS.cards}>
                <div className={roomsCSS.card_Container}>
                    <div className={roomsCSS.card}>
                        <div className={`${roomsCSS.Card_front} ${roomsCSS.Card_front1}`}>
                            <button>Camera Delux</button>
                        </div>
                        <div className={roomsCSS.Card_back}></div>
                            <div className={roomsCSS.prince}>
                                <p></p>
                            </div>
                            <div className={roomsCSS.Card_content}>
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
                <div className={roomsCSS.card_Container}>
                    <div className={roomsCSS.card}>
                        <div className={`${roomsCSS.Card_front} ${roomsCSS.Card_front2}`}>
                            <button>Camera Queen</button>
                        </div>
                        <div className={`${roomsCSS.Card_back} ${roomsCSS.Card_back2}`}></div>
                            <div className={roomsCSS.prince}>
                                <p></p>
                            </div>
                            <div className={roomsCSS.Card_content}>
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
                <div className={roomsCSS.card_Container}>
                    <div className={roomsCSS.card}>
                        <div className={`${roomsCSS.Card_front} ${roomsCSS.Card_front3}`}>
                            <button>Camera Dubla</button>
                        </div>
                        <div className={`${roomsCSS.Card_back} , ${roomsCSS.Card_back3}`}></div>
                            <div className={roomsCSS.prince}>
                                <p></p>
                            </div>
                            <div className={roomsCSS.Card_content}>
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
                <div className={roomsCSS.card_Container}>
                    <div className={roomsCSS.card}>
                        <div className={`${roomsCSS.Card_front} ${roomsCSS.Card_front4}`}>
                            <button>Camera Tripla</button>
                        </div>
                        <div className={`${roomsCSS.Card_back} , ${roomsCSS.Card_back}`}></div>
                            <div className={roomsCSS.prince}>
                                <p></p>
                            </div>
                            <div className={roomsCSS.Card_content}>
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
        
    )
}

export default Rooms