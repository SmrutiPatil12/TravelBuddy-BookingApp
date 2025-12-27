import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import { SignedIn, SignedOut } from '@clerk/clerk-react'
import LandingDashboard from './routes/LandingDashboard'
import Home from './routes/Home'
import About from './routes/About'
import Service from './routes/Service'
import Booking from './routes/Booking'
import Contact from './routes/Contact'

function App() {
  return (
    <>
      
      <Routes>
      
      <Route path="/" element={
        <>
          <SignedOut>
            <LandingDashboard />
          </SignedOut>
          <SignedIn>
            <Home /> 
          </SignedIn>
        </>
      } />

      <Route path="/about" element={<About />} />
      <Route path="/service" element={<Service />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/booking" element={<Booking />} /> 
      
    </Routes>
    </>
  )
}

export default App
