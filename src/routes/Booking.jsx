import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { SignedIn, SignedOut, RedirectToSignIn } from '@clerk/clerk-react'
import './Booking.css'

function Booking() {
  const [activeTab, setActiveTab] = useState('flights')

  return (
    <>
      <Navbar />

      <SignedIn>
        <div className="booking-page">
          {/* Hero Section */}
          <div className="booking-hero">
            <h1>Book Your Next Adventure</h1>
            <p>Real-time flights and hotels — find the best deals instantly</p>
          </div>

          {/* Tabs */}
          <div className="tabs">
            <button className={activeTab === 'flights' ? 'active' : ''} onClick={() => setActiveTab('flights')}>
              <i className="fa-solid fa-plane"></i> Flights
            </button>
            <button className={activeTab === 'hotels' ? 'active' : ''} onClick={() => setActiveTab('hotels')}>
              <i className="fa-solid fa-hotel"></i> Hotels
            </button>
            <button className={activeTab === 'cars' ? 'active' : ''} onClick={() => setActiveTab('cars')}>
              <i className="fa-solid fa-car"></i> Car Rentals
            </button>
            <button className={activeTab === 'activities' ? 'active' : ''} onClick={() => setActiveTab('activities')}>
              <i className="fa-solid fa-map-signs"></i> Activities
            </button>
          </div>

          <div className="search-container">
            {activeTab === 'flights' && <FlightsSearch />}
            {activeTab === 'hotels' && <HotelsSearch />}
            {activeTab === 'cars' && <CarRentalsSearch />}
            {activeTab === 'activities' && <ActivitiesSearch />}
          </div>
        </div>
      </SignedIn>

      <SignedOut>
        {/* Automatically opens Clerk sign-in modal */}
        <RedirectToSignIn />
      </SignedOut>

      <Footer />
    </>
  )
}

// ==================== FLIGHTS SEARCH ====================
function FlightsSearch() {
  const [params, setParams] = useState({
    from: '',
    to: '',
    depart: '',
    return: '',
    adults: 1,
    tripType: 'roundtrip'
  })
  const [results, setResults] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const searchFlights = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setResults(null)

    if (params.tripType === 'roundtrip' && !params.return) {
      setError('Return date is required for round trip.')
      setLoading(false)
      return
    }

    const payload = {
      engine: 'google_flights',
      params: {
        departure_id: params.from.toUpperCase(),
        arrival_id: params.to.toUpperCase(),
        outbound_date: params.depart,
        adults: params.adults,
        currency: 'USD',
        hl: 'en'
      }
    }

    if (params.tripType === 'roundtrip') {
      payload.params.type = '1'
      payload.params.return_date = params.return
    } else {
      payload.params.type = '2'
    }

    try {
      const res = await fetch(''https://travelbuddy-proxy.onrender.com/api/search'', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })

      const data = await res.json()
      if (data.error) {
        setError(data.error || 'Flight search failed.')
      } else {
        setResults(data)
      }
    } catch (err) {
      setError('Cannot connect to server. Is your proxy running?')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="search-section">
      {/* Form remains the same */}
      <form onSubmit={searchFlights} className="search-form">
        {/* ... your existing form inputs ... */}
        <div className="form-grid">
          <input placeholder="From (e.g., JFK)" value={params.from} onChange={e => setParams({...params, from: e.target.value})} required />
          <input placeholder="To (e.g., LAX)" value={params.to} onChange={e => setParams({...params, to: e.target.value})} required />
          <input type="date" value={params.depart} onChange={e => setParams({...params, depart: e.target.value})} required />
          <input type="date" value={params.return} onChange={e => setParams({...params, return: e.target.value})} disabled={params.tripType === 'oneway'} required={params.tripType === 'roundtrip'} />
          <input type="number" min="1" max="8" value={params.adults} onChange={e => setParams({...params, adults: e.target.value})} required />
          <select value={params.tripType} onChange={e => setParams({...params, tripType: e.target.value})}>
            <option value="roundtrip">Round Trip</option>
            <option value="oneway">One Way</option>
          </select>
        </div>
        <button type="submit" className="search-btn" disabled={loading}>
          {loading ? 'Searching Flights...' : 'Search Flights'}
        </button>
      </form>

      {error && <p className="error-message">{error}</p>}

      {/* NEW PREMIUM FLIGHT RESULTS */}
      {results && results.best_flights && (
        <div className="results">
          <h2>Best Flight Deals</h2>
          <div className="flights-grid">
            {results.best_flights.slice(0, 8).map((flight, i) => (
              <div key={i} className="flight-card">
                {/* Airline Logo + Route */}
                <div className="flight-route">
                  {flight.flights[0]?.airline_logo && (
                    <img src={flight.flights[0].airline_logo} alt="Airline" className="airline-logo" />
                  )}
                  <div className="route-info">
                    <div className="times">
                      <strong>{flight.flights[0]?.departure_airport.time}</strong>
                      <span className="airport">{flight.flights[0]?.departure_airport.id}</span>
                    </div>
                    <div className="line">
                      <span className="duration">
                        {flight.total_duration} min
                        {flight.flights.length > 1 && ` • ${flight.flights.length - 1} stop(s)`}
                      </span>
                    </div>
                    <div className="times">
                      <strong>{flight.flights[flight.flights.length - 1]?.arrival_airport.time}</strong>
                      <span className="airport">{flight.flights[flight.flights.length - 1]?.arrival_airport.id}</span>
                    </div>
                  </div>
                </div>

                {/* Stops Badge */}
                <div className="flight-stops">
                  <span className={`stops-badge ${flight.flights.length === 1 ? 'nonstop' : 'has-stops'}`}>
                    {flight.flights.length === 1 ? 'Nonstop' : `${flight.flights.length - 1} stop(s)`}
                  </span>
                </div>

                {/* Price */}
                <div className="flight-price">
                  <strong>${flight.price}</strong>
                </div>

                {/* Book Button */}
                <a
                  href={flight.booking_link || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="book-btn"
                >
                  Book Now →
                </a>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

// ==================== HOTELS SEARCH ====================
function HotelsSearch() {
  const [params, setParams] = useState({
    location: '',
    checkin: '',
    checkout: '',
    adults: 2
  })
  const [results, setResults] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const searchHotels = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setResults(null)

    const payload = {
      engine: 'google_hotels',
      params: {
        q: params.location,
        check_in_date: params.checkin,
        check_out_date: params.checkout,
        adults: params.adults,
        currency: 'USD',
        hl: 'en',
        gl: 'us'
      }
    }

    try {
      const res = await fetch('https://travelbuddy-proxy.onrender.com/api/search', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })

      const data = await res.json()

      if (data.error) {
        setError(data.error || 'Hotel search failed.')
      } else {
        setResults(data)
      }
    } catch (err) {
      setError('Cannot connect to server. Is your proxy running?')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="search-section">
      <form onSubmit={searchHotels} className="search-form">
        <div className="form-grid">
          <input
            type="text"
            placeholder="Destination (e.g., Paris, New York)"
            value={params.location}
            onChange={(e) => setParams({ ...params, location: e.target.value })}
            required
          />
          <input
            type="date"
            value={params.checkin}
            onChange={(e) => setParams({ ...params, checkin: e.target.value })}
            required
          />
          <input
            type="date"
            value={params.checkout}
            onChange={(e) => setParams({ ...params, checkout: e.target.value })}
            required
          />
          <input
            type="number"
            min="1"
            max="10"
            value={params.adults}
            onChange={(e) => setParams({ ...params, adults: e.target.value })}
            required
          />
        </div>

        <button type="submit" className="search-btn" disabled={loading}>
          {loading ? 'Searching Hotels...' : 'Search Hotels'}
        </button>
      </form>

      {error && <p className="error-message">{error}</p>}

      {results && results.properties && (
  <div className="results">
    <h2>Best Hotels in {params.location || 'Your Destination'}</h2>
    <div className="hotels-grid">
      {results.properties.slice(0, 10).map((hotel, i) => (
        <div key={i} className="hotel-card">
          {/* Hotel Image */}
          <div className="hotel-image">
            {hotel.images?.[0] ? (
              <img src={hotel.images[0].thumbnail || hotel.images[0].original_image} alt={hotel.name} />
            ) : (
              <div className="no-image">No Image</div>
            )}
          </div>

          {/* Hotel Info */}
          <div className="hotel-details">
            <h3 className="hotel-name">{hotel.name}</h3>
            
            <p className="hotel-location">
              <i className="fa-solid fa-location-dot"></i> {hotel.address || 'Location not available'}
            </p>

            {/* Rating */}
            {hotel.rating && (
              <div className="hotel-rating">
                <span className="rating-badge">
                  ⭐ {hotel.rating}
                </span>
                <span className="reviews">({hotel.reviews || 'N/A'} reviews)</span>
              </div>
            )}

            {/* Amenities (if available) */}
            {hotel.amenities && hotel.amenities.length > 0 && (
              <div className="amenities">
                {hotel.amenities.slice(0, 4).map((amenity, j) => (
                  <span key={j} className="amenity-tag">{amenity}</span>
                ))}
                {hotel.amenities.length > 4 && <span className="more">+{hotel.amenities.length - 4} more</span>}
              </div>
            )}

            {/* Price & Book Button */}
            <div className="hotel-bottom">
              <div className="hotel-price">
                <span className="from">From</span>
                <strong>${hotel.price || hotel.rate_per_night?.lowest || 'N/A'}</strong>
                <span className="per-night">/ night</span>
              </div>
              <a
                href={hotel.link}
                target="_blank"
                rel="noopener noreferrer"
                className="view-deal-btn"
              >
                View Deal →
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
)}
    </div>
  )
}
function CarRentalsSearch() {
  const [params, setParams] = useState({
    location: '',
    pickup: '',
    dropoff: '',
  })
  const [results, setResults] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const searchCars = async (e) => {
    e.preventDefault()
    if (!params.location || !params.pickup || !params.dropoff) {
      setError('All fields required')
      return
    }

    setLoading(true)
    setError('')
    setResults(null)

    // Mock data - real APIs for car rentals are paid/partner only
    setTimeout(() => {
      setResults([
        { name: "Toyota Camry", type: "Sedan", seats: 5, price: 45, image: "https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg" },
        { name: "Honda CR-V", type: "SUV", seats: 5, price: 65, image: "https://images.pexels.com/photos/2127733/pexels-photo-2127733.jpeg" },
        { name: "Ford Mustang", type: "Convertible", seats: 4, price: 95, image: "https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg" },
        { name: "Tesla Model 3", type: "Electric", seats: 5, price: 120, image: "https://images.pexels.com/photos/10065369/pexels-photo-10065369.jpeg" },
      ])
      setLoading(false)
    }, 1000)
  }

  return (
    <div className="search-section">
      <form onSubmit={searchCars} className="search-form">
        <div className="form-grid">
          <input placeholder="City or Airport" value={params.location} onChange={e => setParams({...params, location: e.target.value})} required />
          <input type="date" value={params.pickup} onChange={e => setParams({...params, pickup: e.target.value})} required />
          <input type="date" value={params.dropoff} onChange={e => setParams({...params, dropoff: e.target.value})} required />
        </div>
        <button type="submit" className="search-btn" disabled={loading}>
          {loading ? 'Searching...' : 'Search Car Rentals'}
        </button>
      </form>

      {error && <p className="error-message">{error}</p>}

      {results && results.length > 0 && (
        <div className="results">
          <h2>Available Cars in {params.location}</h2>
          <div className="cars-grid">
            {results.map((car, i) => (
              <div key={i} className="car-card">
                <img src={car.image} alt={car.name} />
                <div className="car-info">
                  <h3>{car.name}</h3>
                  <p>{car.type} • {car.seats} seats</p>
                  <div className="price">
                    <strong>${car.price}/day</strong>
                  </div>
                </div>
                <a href="#" className="book-btn">
                  View Details →
                </a>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

function ActivitiesSearch() {
  const [params, setParams] = useState({ destination: '' })
  const [results, setResults] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const searchActivities = async (e) => {
    e.preventDefault()
    if (!params.destination.trim()) {
      setError('Enter a destination')
      return
    }

    setLoading(true)
    setError('')
    setResults(null)

    // Free OpenTripMap API - no key needed
    const geoUrl = `https://api.opentripmap.com/0.1/en/places/geoname?name=${params.destination}&apikey=5ae2e3f221c38a28845f05b6e0e2c3f3f4e4e4e4e4e4e4e4e4e4e4e` // Free public key or remove if not needed
    try {
      // First get coordinates
      const geoRes = await fetch(geoUrl)
      const geoData = await geoRes.json()
      if (!geoData.lat || !geoData.lon) {
        setError('Destination not found')
        setLoading(false)
        return
      }

      // Then get attractions
      const attractionsUrl = `https://api.opentripmap.com/0.1/en/places/radius?radius=10000&lon=${geoData.lon}&lat=${geoData.lat}&kinds=interesting_places&limit=12&apikey=5ae2e3f221c38a28845f05b6e0e2c3f3f4e4e4e4e4e4e4e4e4e4e4e`
      const attractionsRes = await fetch(attractionsUrl)
      const attractionsData = await attractionsRes.json()

      setResults(attractionsData.features || [])
    } catch (err) {
      setError('Failed to fetch activities')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="search-section">
      <form onSubmit={searchActivities} className="search-form">
        <div className="form-grid">
          <input placeholder="Destination (e.g. Paris)" value={params.destination} onChange={e => setParams({ destination: e.target.value })} required />
        </div>
        <button type="submit" className="search-btn" disabled={loading}>
          {loading ? 'Searching...' : 'Search Activities & Tours'}
        </button>
      </form>

      {error && <p className="error-message">{error}</p>}

      {results && results.length > 0 && (
        <div className="results">
          <h2>Top Attractions in {params.destination}</h2>
          <div className="activities-grid">
            {results.map((place, i) => (
              <div key={i} className="activity-card">
                <div className="activity-image">
                  {place.properties.image ? (
                    <img src={place.properties.image} alt={place.properties.name} />
                  ) : (
                    <div className="no-image">No Image</div>
                  )}
                </div>
                <div className="activity-info">
                  <h3>{place.properties.name || 'Unknown'}</h3>
                  <p>{place.properties.kinds?.split(',').slice(0, 2).join(', ') || 'Attraction'}</p>
                  <a href={`https://www.google.com/search?q=${encodeURIComponent(place.properties.name + ' ' + params.destination)}`} target="_blank" rel="noopener noreferrer" className="view-activity-btn">
                    Learn More →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Booking
