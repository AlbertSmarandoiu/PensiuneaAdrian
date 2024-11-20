import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './Components/Nav/Nav'
import Header from './Components/Header/Header'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import Rooms from './Components/Rooms/Room'
import Amenities from './Components/Amenities/Amenities'
import Testimonials from './Components/Testimonials/Testimonials'
import Footer from './Components/Footer/Footer'
import Galerie from './Components/Galerie/Galerie'
import ObiectiveTuristice from './Components/ObiectiveTuristice/ObiectiveTuristice'
import Drepturi from './Components/Drepturi/Drepturi'
function App() {
   const [count, setCount] = useState(0)

  return (
    <>
    <Nav/>
    <Header/>
    <About/>
    <Services/>
    <Rooms/>
    <Amenities/>
    <Galerie/>
    <ObiectiveTuristice/>
    <Testimonials/>
    <Footer/>
    <Drepturi/>
    </>
    
  )
}

export default App
