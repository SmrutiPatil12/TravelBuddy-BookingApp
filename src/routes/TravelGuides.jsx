import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './TravelInsurance.css'

function TravelGuides() {
  return (
    <>
      <Navbar />

      {/* Smaller Hero */}
      <div className="guides-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Travel Guides & Tips</h1>
          <p>Expert insights and practical advice to make every journey unforgettable</p>
        </div>
      </div>

      <div className="guides-content">
        <div className="guides-grid">
          <div className="guide-card">
            <div className="guide-icon">🗺️</div>
            <h3>Destination Guides</h3>
            <p>Hidden gems, must-see landmarks, and local secrets for over 100 popular destinations worldwide.</p>
          </div>

          <div className="guide-card">
            <div className="guide-icon">📋</div>
            <h3>Packing Checklists</h3>
            <p>Seasonal packing lists, carry-on essentials, and smart tips to travel light and prepared.</p>
          </div>

          <div className="guide-card">
            <div className="guide-icon">✈️</div>
            <h3>Airport & Flight Hacks</h3>
            <p>Navigate security faster, find the best airport lounges, and beat jet lag like a pro.</p>
          </div>

          <div className="guide-card">
            <div className="guide-icon">🍜</div>
            <h3>Food & Culture Etiquette</h3>
            <p>Local dining customs, street food safety, and how to experience authentic culture respectfully.</p>
          </div>

          <div className="guide-card">
            <div className="guide-icon">📸</div>
            <h3>Photography Tips</h3>
            <p>Capture golden hour magic, respect local photo rules, and create stunning travel memories.</p>
          </div>

          <div className="guide-card">
            <div className="guide-icon">💰</div>
            <h3>Budget Travel Secrets</h3>
            <p>Save big on flights, accommodation, food, and activities with proven money-saving strategies.</p>
          </div>
        </div>

        <div className="guides-cta">
          <h2>Ready for Your Next Adventure?</h2>
          <button onClick={() => window.location.href = '/booking'} className="primary-cta">
            Start Planning Now →
          </button>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default TravelGuides