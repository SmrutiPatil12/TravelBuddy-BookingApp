import React from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './AboutStyles.css'  // Create this file for extra styles

function About() {
  return (
    <>
      <Navbar />
      
      <Hero
        cName="hero"
        heroImg="https://m.media-amazon.com/images/I/71bsjDGHkLL.jpg"  // Adventure Awaits World Map
        title="About Us"
        text="Discover who we are and why we're passionate about making your travel dreams come true."
        buttonText="Contact Us"
        url="/contact"
        btnClass="show"
      />

      <div className="about-content">
        <div className="about-text">
          <h2>Welcome to TravelBuddy</h2>
          <p>
            At TravelBuddy, we believe travel is more than just visiting new places — it's about creating unforgettable stories, experiencing diverse cultures, and making lifelong memories.
          </p>
          <p>
            Founded in 2020, we've helped thousands of travelers explore the world with carefully curated tours, personalized itineraries, and 24/7 support. From exotic beach getaways to thrilling mountain adventures, we're here to turn your journey into something extraordinary.
          </p>

          <div className="mission-vision">
            <div className="mission">
              <h3>Our Mission</h3>
              <p>To inspire and enable everyone to explore the world safely, sustainably, and authentically.</p>
            </div>
            <div className="vision">
              <h3>Our Vision</h3>
              <p>To be the most trusted and innovative travel partner, connecting people with the beauty of our planet.</p>
            </div>
          </div>

          <h2>Why Choose Us?</h2>
          <ul className="why-choose">
            <li>Expert local guides and personalized service</li>
            <li>Handpicked destinations and hidden gems</li>
            <li>Affordable prices with no hidden fees</li>
            <li>Eco-friendly and responsible tourism practices</li>
            <li>24/7 customer support before, during, and after your trip</li>
          </ul>
        </div>

        <div className="about-gallery">
          <img src="https://travelprofessionalnews.com/wp-content/uploads/2019/03/Travel-Agent-Information-Article-by-We-Book-Travel.jpg" alt="Our professional travel team" />
          <img src="https://images.goway.com/production/featured_images/Young-happy-woman-in-yellow-coat-walking-in-Red-Square-in-Moscow-Russia-_315797243.jpg" alt="Happy traveler exploring the world" />
          <img src="https://thumbs.dreamstime.com/b/happy-diverse-tourists-exploring-famous-landmarks-vibrant-illustration-featuring-group-young-adults-world-hold-maps-405209632.jpg" alt="Diverse group of tourists" />
          <img src="https://m.media-amazon.com/images/I/71S4G36bYsL.jpg" alt="Adventure awaits backdrop" />
        </div>
      </div>

      <Footer />
    </>
  )
}

export default About