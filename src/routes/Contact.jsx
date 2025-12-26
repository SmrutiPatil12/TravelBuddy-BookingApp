import React, { useState } from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './ContactStyles.css'  // Create this CSS file

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real app, this would send data to a backend/email service
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <>
      <Navbar />

      <Hero
        cName="hero"
        heroImg="https://static.vecteezy.com/system/resources/thumbnails/051/166/491/small/communication-concept-with-email-message-box-and-contacts-icons-e-mail-marketing-customer-support-counseling-and-support-hotline-connection-with-modern-network-technology-contact-us-free-photo.jpg"
        title="Contact Us"
        text="We're here to help make your next adventure unforgettable. Reach out today!"
        buttonText="Send Message"
        url="#contact-form"
        btnClass="show"
      />

      <div className="contact-section">
        <h2 className="contact-title">Get in Touch</h2>
        <p className="contact-intro">
          Have questions about tours, bookings, or custom trips? Our team is ready to assist you.
        </p>

        <div className="contact-info">
          <div className="info-card">
            <img src="https://media.istockphoto.com/id/2189888573/vector/contact-us-icon-web-icon-set.jpg?s=612x612&w=0&k=20&c=Vt6pkGjHU7EVgGt2GV6o49FxTGCM4JU7ou3MP3AjUrs=" alt="Phone Icon" />
            <h3>Phone</h3>
            <p>+1 (123) 456-7890</p>
          </div>

          <div className="info-card">
            <img src="https://www.shutterstock.com/image-vector/business-icon-company-connection-set-260nw-2565046997.jpg" alt="Email Icon" />
            <h3>Email</h3>
            <p>info@TravelBuddy.com</p>
          </div>

          <div className="info-card">
            <img src="https://static.vecteezy.com/system/resources/thumbnails/010/682/691/small_2x/contact-icons-information-business-communication-symbols-collection-call-internet-location-address-mail-icon-pack-vector.jpg" alt="Location Icon" />
            <h3>Address</h3>
            <p>123 Adventure Street<br />Travel City, TC 12345</p>
          </div>
        </div>

        <div className="contact-form-container" id="contact-form">
          <form className="contact-form" onSubmit={handleSubmit}>
            <h3>Send Us a Message</h3>
            
            <div className="form-row">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />

            <textarea
              name="message"
              rows="6"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit" className="submit-btn">Send Message</button>
          </form>

          <div className="map-placeholder">
            <img src="https://thumbs.dreamstime.com/b/vector-white-world-map-gradient-blue-background-airplane-ideal-website-holidays-travel-agency-other-154352188.jpg" alt="World Map" />
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Contact