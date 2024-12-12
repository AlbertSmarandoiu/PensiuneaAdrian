import React from "react";
import { Link } from "react-router-dom";
import "./Camere.css"; // Importă corect fișierul CSS

import img1 from "./../../assets/CameraDelux1.jpg";
import img2 from "./../../assets/queen1.jpg";
import img3 from "./../../assets/dubla1.jpg";
import img4 from "./../../assets/tripla1.jpg";

// Array-ul camerelor
const rooms = [
  { id: "delux", name: "Camera Delux", image: img1 },
  { id: "queen", name: "Camera Queen", image: img2 },
  { id: "dubla", name: "Camera Dublă", image: img3 },
  { id: "tripla", name: "Camera Triplă", image: img4 },
];

function CamereButon() {
  return (
    <div id="camere" className="rooms-container">
      {rooms.map((room) => (
        <div key={room.id} className="room-card">
          <img
            style={{
              borderRadius: "20px",
            }}
            src={room.image}
            alt={room.name}
            className="room-image"
          />
          <div className="room-overlay">
            <h3>{room.name}</h3>
            <Link
              style={{
                marginTop: "10px",
                padding: "10px 20px",
                backgroundColor: "#3a2f25fa",
                color: "white",
                border: "none",
                borderRadius: "20px",
                cursor: "pointer",
              }}
              to={`/room/${room.id}`}
              className="room-button"
            >
              Vezi Detalii
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CamereButon;
