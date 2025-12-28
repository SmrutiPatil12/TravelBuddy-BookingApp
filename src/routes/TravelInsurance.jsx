import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './TravelInsurance.css'

function TravelInsurance() {
  return (
    <>
      <Navbar />

      {/* Smaller Hero */}
      <div className="insurance-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Travel Insurance</h1>
          <p>Protect your trip and travel with complete peace of mind</p>
        </div>
      </div>

      <div className="insurance-content">
        <div className="insurance-intro">
          <h2>Why Travel Insurance is Essential</h2>
          <p>Life is unpredictable. One moment everything is perfect, the next — flight cancelled, lost luggage, or medical emergency. Stay protected.</p>
        </div>

        <div className="coverage-grid">
          <div className="coverage-card">
            <div className="coverage-icon">🩺</div>
            <h3>Medical Coverage</h3>
            <p>Emergency medical treatment, hospital stays, and evacuation — up to $500,000 coverage</p>
          </div>

          <div className="coverage-card">
            <div className="coverage-icon">❌</div>
            <h3>Trip Cancellation</h3>
            <p>Get reimbursed for non-refundable expenses if you have to cancel for covered reasons</p>
          </div>

          <div className="coverage-card">
            <div className="coverage-icon">🧳</div>
            <h3>Baggage Protection</h3>
            <p>Coverage for lost, stolen, or delayed baggage and personal belongings</p>
          </div>

          <div className="coverage-card">
            <div className="coverage-icon">⏰</div>
            <h3>Flight Delay</h3>
            <p>Compensation for meals, hotels, and rebooking during significant delays</p>
          </div>

          <div className="coverage-card">
            <div className="coverage-icon">🌍</div>
            <h3>Worldwide Assistance</h3>
            <p>24/7 emergency hotline for medical, legal, and travel assistance anywhere</p>
          </div>

          <div className="coverage-card">
            <div className="coverage-icon">🛡️</div>
            <h3>Personal Liability</h3>
            <p>Protection against accidental damage or injury to others during your trip</p>
          </div>
        </div>

        <div className="insurance-cta">
          <h2>Get Covered in Minutes</h2>
          <p>Compare plans from trusted providers and find the perfect coverage for your journey.</p>
          <button className="primary-cta" onClick={() => alert('Insurance comparison feature coming soon!')}>
            Get Instant Quote →
          </button>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default TravelInsurance