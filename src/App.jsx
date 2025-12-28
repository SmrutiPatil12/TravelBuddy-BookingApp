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
import TravelGuides from './routes/TravelGuides'
import TravelInsurance from './routes/TravelInsurance'

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
      <Route path="/travel-guides" element={<TravelGuides />} />
      <Route path="/travel-insurance" element={<TravelInsurance />} />
    </Routes>
    </>
  )
}

export default App
