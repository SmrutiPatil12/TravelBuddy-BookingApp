import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './routes/Home'
import About from './routes/About'
import Service from './routes/Service'
import Booking from './routes/Booking'
import Contact from './routes/Contact'

function App() {
  return (
    <>
      
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/service" element={<Service/>}/>
        <Route path="/booking" element={<Booking />} />
        <Route path="/contact" element = {<Contact/>}/>
        <Route path="*" element={<Home/>} />

      </Routes>
    </>
  )
}

export default App
