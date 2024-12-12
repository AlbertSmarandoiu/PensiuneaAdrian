// import React from "react";
// import { Link } from "react-router-dom";
// import roomsModificatCSS from "./RoomModificat.Module.css";

// // Exemplu de date despre camere
// const roomDetails = [
//   {
//     id: "delux",
//     title: "Camera Delux",
//     features: ["Pat king size", "Balcon privat", "Baie proprie"],
//     frontClass: roomsModificatCSS.Card_front, // Clasa CSS specifică pentru partea din față
//     backClass: roomsModificatCSS.Card_back, // Clasa CSS specifică pentru partea din spate
//   },
//   {
//     id: "queen",
//     title: "Camera Queen",
//     features: ["Pat queen size", "Aer condiționat", "Wi-Fi gratuit"],
//     frontClass: roomsModificatCSS.Card_front2,
//     backClass: roomsModificatCSS.Card_back2,
//   },
//   {
//     id: "dubla",
//     title: "Camera Dubla",
//     features: ["Două paturi single", "TV", "Baie cu duș"],
//     frontClass: roomsModificatCSS.Card_front3,
//     backClass: roomsModificatCSS.Card_back3,
//   },
//   {
//     id: "tripla",
//     title: "Camera Tripla",
//     features: ["Pat king-size și single", "Balcon privat", "Canapea extensibilă"],
//     frontClass: roomsModificatCSS.Card_front4,
//     backClass: roomsModificatCSS.Card_back4,
//   },
// ];

// function RoomsModificat() {
//   return (
//     <div id="camere" className={`${roomsModificatCSS.Rooms_container} section`}>
//       <h2 className="section_Title">
//         Despre <span>camere</span> noastre:
//       </h2>
//       <div className={roomsModificatCSS.cards}>
//         {roomDetails.map((room) => (
//           <div key={room.id} className={roomsModificatCSS.card_Container}>
//             <div className={roomsModificatCSS.card}>
//               <div className={`${roomsModificatCSS.Card_front} ${room.frontClass}`}>
//                 <button>{room.title}</button>
//               </div>
//               <div className={`${roomsModificatCSS.Card_back} ${room.backClass}`}>
//                 <div className={roomsModificatCSS.Card_content}>
//                   <h3>{room.title}</h3>
//                   {room.features.map((feature, index) => (
//                     <p key={index}>- {feature}</p>
//                   ))}
//                 </div>
//                 <div className={roomsModificatCSS.BookNow}>
//                   <Link
//                     to={`/room/${room.id}`}
//                     className={roomsModificatCSS.btn}
//                   >
//                     Vezi Detalii
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default RoomsModificat;
