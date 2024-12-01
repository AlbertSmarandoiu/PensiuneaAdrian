
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Nav from "./Components/Nav/Nav";
// import Header from "./Components/Header/Header";
// import About from "./Components/About/About";
// import Services from "./Components/Services/Services";
// import Rooms from "./Components/Rooms/Room";
// import Amenities from "./Components/Amenities/Amenities";
// import Testimonials from "./Components/Testimonials/Testimonials";
// import Footer from "./Components/Footer/Footer";
// import Galerie from "./Components/Galerie/Galerie";
// import ObiectiveTuristice from "./Components/ObiectiveTuristice/ObiectiveTuristice";
// import Drepturi from "./Components/Drepturi/Drepturi";
// import RoomDetails1 from "./Components/RoomModificat/RoomDetails1";
// import CamereButon from "./Components/RoomModificat/CamereButon";
// import ScrollToTop from "./Components/Scroll/Scroll"
// import "./App.css";
// import { useLocation } from "react-router-dom";

// function App() {


//   return (
//     <Router>
//       <ScrollToTop />
//       <Nav />
//       {/* <Header /> */}
      
//       <Routes>
//         <Route
//           path="/"
//           element={
//             <>
//              <Header />
//               <About />
//               <Services />
//               <CamereButon />
//               <Amenities />
//               <Galerie />
//               <ObiectiveTuristice />
//               <Testimonials />
//             </>
//           }
//         />
//         <Route path="/room/:roomId" element={<RoomDetails1 />} />
//       </Routes>
//       <Footer />
//       <Drepturi />
//     </Router>
//   );
// }

// export default App;
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav/Nav";
import Header from "./Components/Header/Header";
import About from "./Components/About/About";
import Services from "./Components/Services/Services";
import CamereButon from "./Components/RoomModificat/CamereButon";
import Amenities from "./Components/Amenities/Amenities";
import Galerie from "./Components/Galerie/Galerie";
import ObiectiveTuristice from "./Components/ObiectiveTuristice/ObiectiveTuristice";
import Testimonials from "./Components/Testimonials/Testimonials";
import Footer from "./Components/Footer/Footer";
import Drepturi from "./Components/Drepturi/Drepturi";
import RoomDetails1 from "./Components/RoomModificat/RoomDetails1";
import ScrollToTop from "./Components/Scroll/Scroll";
import "./App.css";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <About />
              <Services />
              <CamereButon />
              <Amenities />
              <Galerie />
              <ObiectiveTuristice />
              <Testimonials />
            </>
          }
        />
        <Route path="/room/:roomId" element={<RoomDetails1 />} />
      </Routes>
      <Footer />
      <Drepturi />
    </Router>
  );
}

export default App;
