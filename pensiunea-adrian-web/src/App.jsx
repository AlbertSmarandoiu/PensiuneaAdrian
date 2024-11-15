import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './Components/Nav/Nav'
import Header from './Components/Header/Header'
import About from './Components/About/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Nav/>
    <Header/>
    <About/>
    </>
    
  )
}

export default App
