import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./Detalii.css";


import img1 from "./../../assets/CameraDelux1.jpg";
import img2 from "./../../assets/CameraDelux2.jpg";
import img3 from "./../../assets/CameraDelux3.jpg";
import img4 from "./../../assets/CameraDelux4.jpg";
import img5 from "./../../assets/CameraDelux5.jpg";
import img6 from "./../../assets/CameraDelux6.jpg";


import imgqueen1 from "./../../assets/queen1.jpg";
import imgqueen2 from "./../../assets/queen2.jpg";
import imgqueen3 from "./../../assets/queen3.jpg";
import imgqueen4 from "./../../assets/queen4.jpg";
import imgqueen5 from "./../../assets/queen5.jpg";



import imgtripla1 from "./../../assets/tripla1.jpg"
import imgtripla2 from "./../../assets/tripla2.jpg"
import imgtripla3 from "./../../assets/tripla3.jpg"
import imgtripla4 from "./../../assets/tripla4.jpg"
import imgtripla5 from "./../../assets/tripla5.jpg"
import imgtripla6 from "./../../assets/tripla6.jpg"
import imgtripla7 from "./../../assets/tripla7.jpg"
import imgtripla8 from "./../../assets/tripla8.jpg"
import imgtripla9 from "./../../assets/tripla9.jpg"
import imgtripla10 from "./../../assets/tripla10.jpg"
import imgtripla11 from "./../../assets/tripla11.jpg"

import imgdubla1 from "./../../assets/dubla1.jpg"
import imgdubla2 from "./../../assets/dubla2.jpg"
import imgdubla3 from "./../../assets/dubla3.jpg"

const roomData = {
  delux: {
    title: "Camera Delux",
    description: "O cameră luxoasă cu toate facilitățile moderne.",
    details: [
      "Pat king size",
      "Baie proprie",
      "TV si Wi-fi",
      "Produse de igienă",
      "Uscător de păr",
      "Prosoape față/baie",
      "Aer condiționat",
    ],
    images: [img1, img2, img3, img4, img5, img6],
  },
  queen: {
    title: "Camera Queen",
    description: "Confort regal pentru o experiență de neuitat.",
    details: [
      "Pat queen size",
      "Baie prorpie cu cada",
      "TV si Wi-fi",
      "Produse de igienă",
      "Uscător de păr",
      "Prosoape față/baie",
      "Aer condiționat",
    ],
    images: [ imgqueen1, imgqueen2,  imgqueen3 , imgqueen4, imgqueen5],
  },
  dubla: {
    title: "Camera Dubla",
    // description: "Perfectă pentru doi oaspeți, cu spațiu generos.\nDispunem de 4 camere duble",
    description: <p>Perfectă pentru doi oaspeți, cu spațiu generos. <br /> Dispunem de 4 camere duble</p>,
    details: [
      "Un pat dublu",
      "TV și Wi-Fi",
      "Produse de igienă",
      "Uscător de păr",
      "Prosoape față/baie",
      "Aer condiționat",
    ],
    images: [imgdubla1, imgdubla2, imgdubla3],
  },
  tripla: {
    title: "Camera Tripla",
    description: "Ideală pentru familii sau grupuri de trei persoane.",
    details: [
      "Un pat king-size și un pat single",
      "Lenjerii albe",
      "TV și Wi-Fi",
      "Produse de igienă",
      "Uscător de păr",
      "Prosoape față/baie",
      "Aer condiționat",
    ],
    images: [imgtripla1,
      imgtripla2 ,
       imgtripla3, 
       imgtripla4,
       imgtripla5,
       imgtripla6,
       imgtripla7,
       imgtripla8,
       imgtripla9,
       imgtripla10,
       imgtripla11],
  },
};

function RoomDetails1() {
  const { roomId } = useParams();
  const room = roomData[roomId];

  const [mainImage, setMainImage] = useState(room?.images[0]); // Imaginea principală

  if (!room) {
    return <p>Camera nu a fost găsită!</p>;
  }

  return (
    <div
      id="camera-content"
      style={{
        padding: "20px",
        fontFamily: "'Arial', sans-serif",
      }}
    >
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>{room.title}</h1>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "20px",
          flexWrap: "wrap",
        }}
        className="responsive-container"
      >
        {/* Descriere */}
        <div
          style={{
            flex: "1",
            minWidth: "300px",
            maxWidth: "600px",
            backgroundColor: "#f4f4f4",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <p
            style={{
              fontSize: "1.4em",
              fontWeight: "bold",
              color: "#333",
              marginBottom: "10px",
            }}
          >
            Descriere
          </p>
          <p
            style={{
              fontSize: "1.2em",
              lineHeight: "1.8",
              color: "#555",
              marginBottom: "20px",
            }}
          >
            {room.description}
          </p>

          <p
            style={{
              fontSize: "1.4em",
              fontWeight: "bold",
              color: "#333",
              marginBottom: "10px",
            }}
          >
            Detalii
          </p>
          <ul
            style={{
              marginBottom: "20px",
              paddingLeft: "20px",
              listStyleType: "disc",
              color: "#555",
              lineHeight: "1.8",
              fontSize: "1.1em",
            }}
          >
            {room.details.map((detail, index) => (
              <li key={index} style={{ marginBottom: "10px" }}>
                {detail}
              </li>
            ))}
          </ul>
        </div>

        {/* Galerie imagini */}
        <div
          style={{
            flex: "2",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
          }}
        >
          {/* Imaginea principală */}
          <div style={{ textAlign: "center", marginBottom: "20px" }}>
            <img
              src={mainImage}
              alt="Imagine principală"
              style={{
                width: "100%",
                maxWidth: "600px",
                height: "auto",
                borderRadius: "10px",
                marginBottom: "20px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              }}
            />
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "10px",
              flexWrap: "wrap",
            }}
          >
            {/* Imaginile mici */}
            {room.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Miniatură ${index + 1}`}
                style={{
                  width: "100px",
                  height: "100px",
                  objectFit: "cover",
                  borderRadius: "5px",
                  cursor: "pointer",
                  boxShadow: mainImage === img ? "0 0 5px 2px #cb5c00" : "none",
                }}
                onClick={() => setMainImage(img)} // Setează imaginea selectată ca principală
              />
            ))}
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "30px",
        }}
      >
        <button
          style={{
            padding: "15px 30px",
            backgroundColor: "#cb5c00",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "1em",
          }}
          onClick={() =>
            window.open(
              "https://wa.me/+40757741699?text=Hello%20Pensiunea%20Adrian,%20I%20would%20like%20to%20make%20a%20reservation.",
              "_blank"
            )
          }
        >
          Book Now
        </button>
      </div>

     
    </div>
  );
}

export default RoomDetails1;
