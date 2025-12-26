import React from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './HomeStyles.css'  // Create this CSS file for the destinations grid

function Home() {
  return (
    <>
      <Navbar />

      <Hero
        cName="hero"
        heroImg="https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?cs=srgb&dl=pexels-jaime-reimer-1376930-2662116.jpg&fm=jpg"
        title="Your Journey, Your Story"
        text="Discover breathtaking destinations and create memories that last a lifetime."
        buttonText="Start Planning"
        url="/service"
        btnClass="show"
      />

      <div className="destinations-section">
        <h2 className="destinations-title">Popular Destinations</h2>
        <p className="destinations-subtitle">Explore the world's most amazing places handpicked for you</p>

        <div className="destinations-grid">
          {/* Destination 1: Taal Volcano */}
          <div className="destination-card">
            <img src="https://jamescarveronline.com/wp-content/uploads/2017/01/tagaytay-volcano.jpg" alt="Taal Volcano, Philippines" />
            <div className="card-overlay">
              <h3>Taal Volcano, Philippines</h3>
              <p>Volcano inside a lake – a unique natural wonder with easy hikes and stunning views.</p>
            </div>
          </div>

          {/* Destination 2: Cinque Terre, Italy */}
          <div className="destination-card">
            <img src="https://publish.purewow.net/wp-content/uploads/sites/2/2024/02/most-beautiful-places-in-the-world_manarola-italy.jpg?fit=680%2C400" alt="Cinque Terre, Italy" />
            <div className="card-overlay">
              <h3>Cinque Terre, Italy</h3>
              <p>Colorful cliffside villages, hiking trails, and crystal-clear Mediterranean waters.</p>
            </div>
          </div>

          {/* Destination 3: Seychelles Beach */}
          <div className="destination-card">
            <img src="https://afar.brightspotcdn.com/dims4/default/7ce6c42/2147483647/strip/false/crop/2400x1529+0+0/resize/1486x947!/quality/90/?url=https%3A%2F%2Fk3-prod-afar-media.s3.us-west-2.amazonaws.com%2Fbrightspot%2F50%2F79%2F0aecc26b4af2919c8908975d30b8%2Fsource-dargent-at-la-digue-island-seychelles-zoltan-benyei-shutterstock.jpg" alt="Seychelles" />
            <div className="card-overlay">
              <h3>Seychelles Islands</h3>
              <p>Pristine white-sand beaches, granite boulders, and tropical paradise vibes.</p>
            </div>
          </div>

          {/* Destination 4: St. Barts */}
          <div className="destination-card">
            <img src="https://www.travelandleisure.com/thmb/GDxEZKZXbB1gs7RLZkuwXD19Plc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/TAL-st-barts-BTFLISLANDS0623-7b39c353fb644ac8a637f02498359f71.jpg" alt="St. Barts" />
            <div className="card-overlay">
              <h3>St. Barts, Caribbean</h3>
              <p>Luxury beaches, yacht-filled harbors, and exclusive island getaway experience.</p>
            </div>
          </div>

          {/* Destination 5: Venice, Italy */}
          <div className="destination-card">
            <img src="https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2024/03/18170058/venice-1-1600x900.jpeg" alt="Venice, Italy" />
            <div className="card-overlay">
              <h3>Venice, Italy</h3>
              <p>Romantic canals, historic architecture, and unforgettable gondola rides.</p>
            </div>
          </div>

          {/* Destination 6: California Coast */}
          <div className="destination-card">
            <img src="https://media.cntraveler.com/photos/62981e8f54c04d73f0d0bdfa/4:3/w_3728,h_2796,c_limit/Avalon-California-GettyImages-1278733827.jpg" alt="California Coast" />
            <div className="card-overlay">
              <h3>California Coast, USA</h3>
              <p>Dramatic cliffs, charming beach towns, and endless Pacific Ocean views.</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Home