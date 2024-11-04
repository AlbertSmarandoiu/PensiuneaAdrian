import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './Components/Nav/Nav'
import Header from './Components/Header/Header'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import Rooms from './Components/Rooms/Room'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Nav/>
    <Header/>
    <About/>
    <Services/>
    <Rooms/>
    </>
    
  )
}

export default App
