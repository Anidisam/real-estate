import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Resident from "./components/Resident"
import Value from "./components/Value"
import Blogs from "./components/Blogs"
import Footer from "./components/Footer"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Hero />
      <Resident />
      <Value />
      <Blogs />
      <Footer />
    </>
  )
}

export default App
