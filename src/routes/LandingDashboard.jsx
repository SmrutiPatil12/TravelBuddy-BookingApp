import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './LandingDashboard.css'
import Destination from '../components/Destination'

function LandingDashboard() {
  return (
    <>
      <Navbar /> {/* Will show limited menu */}
      <div className="landing-dashboard">
        <div className="hero-section">
          <h1>Welcome to TravelBuddy</h1>
          <p>Discover amazing destinations, plan your perfect trip, and book with ease.</p>
          <Link to="/" className="cta-btn">Sign Up</Link>
        </div>

        <div className="features">
          <div className="feature">
            <i className="fa-solid fa-plane-departure"></i>
            <h3>Real-Time Flights</h3>
            <p>Search and compare live flight deals</p>
          </div>
          <div className="feature">
            <i className="fa-solid fa-hotel"></i>
            <h3>Best Hotels</h3>
            <p>Find top-rated stays worldwide</p>
          </div>
          <div className="feature">
            <i className="fa-solid fa-headset"></i>
            <h3>24/7 Support</h3>
            <p>We're here to help every step</p>
          </div>
        </div>
      </div>
      <Destination/>
      <Footer />
    </>
  )
}

export default LandingDashboard