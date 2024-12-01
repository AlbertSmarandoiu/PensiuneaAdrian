

import React from "react";
import roomsCSS from "./../Rooms/Room.module.css";

const roomDetails = [
  {
    id: 1,
    title: "Camera Delux",
    frontClass: roomsCSS.Card_front1,
    backClass: roomsCSS.Card_back1,
    features: ["Baie proprie", "Prosoape față/baie", "Aer condiționată","Uscător de păr" ,  "Cada cu hidromasaj" , "Produse de igienă"],
    link: "https://wa.me/+40757741699?text=Hello%20Pensiunea%20Adrian,%20I%20would%20like%20to%20make%20a%20reservation.",
  },
  
  {
    id: 2,
    title: "Camera Queen",
    frontClass: roomsCSS.Card_front3,
    backClass: roomsCSS.Card_back3,
    features:["Baie proprie", "Prosoape față/baie", "Aer condiționată","Uscător de păr" ,  "Cada cu hidromasaj" , "Produse de igienă"],
    link: "https://wa.me/+40757741699?text=Hello%20Pensiunea%20Adrian,%20I%20would%20like%20to%20make%20a%20reservation.",
  },
  
  {
    id: 3,
    title: "Camera Dubla",
    frontClass: roomsCSS.Card_front2,
    backClass: roomsCSS.Card_back2,
    features: ["Baie proprie", "Prosoape față/baie", "Aer condiționată","Uscător de păr" , "Produse de igienă"],
    link: "https://wa.me/+40757741699?text=Hello%20Pensiunea%20Adrian,%20I%20would%20like%20to%20make%20a%20reservation.",
  },
  
  {
    id: 4,
    title: "Camera Tripla",
    frontClass: roomsCSS.Card_front4,
    backClass: roomsCSS.Card_back4,
    features: ["Baie proprie", "Prosoape față/baie", "Aer condiționată","Uscător de păr" , "Produse de igienă"],
    link: "https://wa.me/+40757741699?text=Hello%20Pensiunea%20Adrian,%20I%20would%20like%20to%20make%20a%20reservation.",
  },
];

function Rooms() {
  return (
    <div id="camere" className={`${roomsCSS.Rooms_container} section`}>
      <small className="secxtion_Heading"></small>
      <h2 className="section_Title">
        Despre <span>camere</span> noastre:
      </h2>
      <div className={roomsCSS.cards}>
        {roomDetails.map((room) => (
          <div key={room.id} className={roomsCSS.card_Container}>
            <div className={roomsCSS.card}>
              <div className={`${roomsCSS.Card_front} ${room.frontClass}`}>
                <button>{room.title}</button>
              </div>
              <div className={`${roomsCSS.Card_back} ${room.backClass}`}>
                <div className={roomsCSS.Card_content}>
                  <h3>{room.title}</h3>
                  {room.features.map((feature, index) => (
                    <p key={index}>- {feature}</p>
                  ))}
                </div>
                <div className={roomsCSS.BookNow}>
                  {room.link ? (
                    <a
                      href={room.link}
                      className={roomsCSS.btn}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Book new
                    </a>
                  ) : (
                    <button>Book new</button>
                  )}
                  <i className="ri-arrow-left-line"></i>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Rooms;
