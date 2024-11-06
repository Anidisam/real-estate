import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Resident from "./components/Resident"
import Value from "./components/Value"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Hero />
      <Resident />
      <Value />
    </>
  )
}

export default App
