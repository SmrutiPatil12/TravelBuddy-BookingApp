import React from 'react'
import { useNavigate } from 'react-router-dom'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './ServiceStyles.css'

function Service() {
  const navigate = useNavigate()

  const handleBookingClick = (tab) => {
    navigate('/booking', { state: { activeTab: tab } })
  }

  return (
    <>
      <Navbar />

      <Hero
        cName="hero"
        heroImg="https://images.pexels.com/photos/386009/pexels-photo-386009.jpeg"
        title="Our Services"
        text="Everything you need for an unforgettable journey — all in one place."
        buttonText="Start Planning"
        url="/booking"
        btnClass="show"
      />

      <div className="services-section">
        <h2 className="services-title">Comprehensive Travel Solutions</h2>
        <p className="services-intro">
          From flights to stays and beyond — plan your perfect trip with confidence.
        </p>

        <div className="services-grid">
          {/* Flight Booking */}
          <div 
            className="service-card clickable" 
            onClick={() => handleBookingClick('flights')}
          >
            <img 
              src="https://images.pexels.com/photos/2104742/pexels-photo-2104742.jpeg" 
              alt="Flight Booking" 
            />
            <h3>Flight Booking</h3>
            <p>Search real-time flights worldwide. Compare prices, airlines, and routes instantly.</p>
            <span className="service-cta">Search Now →</span>
          </div>

          {/* Hotel Booking */}
          <div 
            className="service-card clickable" 
            onClick={() => handleBookingClick('hotels')}
          >
            <img 
              src="https://images.pexels.com/photos/2506988/pexels-photo-2506988.jpeg" 
              alt="Hotel Booking" 
            />
            <h3>Hotel Booking</h3>
            <p>Find the perfect stay — from luxury resorts to cozy boutique hotels at the best rates.</p>
            <span className="service-cta">Find Hotels →</span>
          </div>

          {/* Car Rentals */}
          <div className="service-card clickable"
          onClick={() => handleBookingClick('hotels')}>
            <img 
              src="https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg" 
              alt="Car Rental" 
            />
            <h3>Car Rentals</h3>
            <p>Rent a car at your destination for complete freedom and flexibility.</p>
            <span className="service-cta">Car Rentals →</span>
          </div>

          {/* Activities & Tours - Coming Soon */}
          <div className="service-card coming-soon"
          onClick={() => handleBookingClick('hotels')}>
            <img 
              src="https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg" 
              alt="Activities" 
            />
            <h3>Activities & Tours</h3>
            <p>Book local experiences, guided tours, attractions, and adventures.</p>
            <span className="service-cta">Activities →</span>
          </div>

          {/* Travel Guides & Tips - Navigates to dedicated page */}
          <div 
            className="service-card clickable" 
            onClick={() => navigate('/travel-guides')}
          >
            <img 
              src="https://images.pexels.com/photos/450597/pexels-photo-450597.jpeg" 
              alt="Travel Guides" 
            />
            <h3>Travel Guides & Tips</h3>
            <p>Destination guides, visa info, packing lists, and expert travel advice.</p>
            <span className="service-cta">Explore Guides →</span>
          </div>

          {/* Travel Insurance - Navigates to dedicated page */}
          <div 
            className="service-card clickable" 
            onClick={() => navigate('/travel-insurance')}
          >
            <img 
              src="https://images.pexels.com/photos/394372/pexels-photo-394372.jpeg" 
              alt="Travel Insurance" 
            />
            <h3>Travel Insurance</h3>
            <p>Protect your trip with coverage for cancellations, medical emergencies, and lost baggage.</p>
            <span className="service-cta">Get a Quote →</span>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Service