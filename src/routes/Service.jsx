import React from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './ServiceStyles.css'  // Create this CSS file

function Service() {
  return (
    <>
      <Navbar />

      <Hero
        cName="hero"
        heroImg="https://wildlandtrekking.com/content/webp-express/webp-images/doc-root/content/uploads/2021/08/guidedgroup-1200x901.jpg.webp"
        title="Our Services"
        text="We offer everything you need for the perfect trip – from planning to protection."
        buttonText="Contact Us"
        url="/contact"
        btnClass="show"
      />

      <div className="services-section">
        <h2 className="services-title">Explore Our Comprehensive Travel Services</h2>
        <p className="services-intro">
          From dream vacations to seamless logistics, we've got you covered every step of the way.
        </p>

        <div className="services-grid">

          <div className="service-card">
            <img src="https://s3-media0.fl.yelpcdn.com/bphoto/cxFd5SF3NqVxC3TOQP6nHw/l.jpg" alt="Tour Packages" />
            <h3>Tour Packages</h3>
            <p>Curated group and private tours to the world's most amazing destinations. Adventure, culture, relaxation – we have it all.</p>
          </div>

          <div className="service-card">
            <img src="https://theluxurytraveller.com/wp-content/uploads/2025/10/raffles-OWO-Hero-1-1024x639.webp" alt="Hotel Booking" />
            <h3>Hotel Booking</h3>
            <p>Luxury resorts, boutique hotels, budget stays – we find the perfect accommodation that matches your style and budget.</p>
          </div>

          <div className="service-card">
            <img src="https://www.investopedia.com/thmb/cKNkVv05oqLABZpcso-WhAZKRdc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-494327693-56a05c483df78cafdaa13d7f.jpg" alt="Flight Booking" />
            <h3>Flight Booking</h3>
            <p>Best deals on international and domestic flights. Flexible dates, direct routes, and premium airlines at competitive prices.</p>
          </div>

          <div className="service-card">
            <img src="https://cdn.passporthealthusa.com/wp-content/uploads/2018/05/Passport-Stamps.jpg?x13202" alt="Visa Assistance" />
            <h3>Visa Assistance</h3>
            <p>Expert guidance on visa applications, documentation, appointments, and approvals for hassle-free international travel.</p>
          </div>

          <div className="service-card">
            <img src="https://www.shutterstock.com/image-vector/travel-insurance-protection-businessman-carry-260nw-2671927197.jpg" alt="Travel Insurance" />
            <h3>Travel Insurance</h3>
            <p>Comprehensive coverage for medical emergencies, trip cancellations, lost baggage, and more – travel with peace of mind.</p>
          </div>

        </div>
      </div>

      <Footer />
    </>
  )
}

export default Service