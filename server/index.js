require('dotenv').config()
const express = require('express')
const cors = require('cors')
const axios = require('axios')

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

const RAPIDAPI_KEY = process.env.RAPIDAPI_KEY
const SERPAPI_KEY = process.env.SERPAPI_KEY

app.post('/api/search', async (req, res) => {
  const { engine, params } = req.body

  if (!engine || !params) {
    return res.status(400).json({ error: 'Missing engine or params' })
  }

  console.log('🔍 Search:', engine, params)

  try {
    let url = ''
    let config = { params: {}, timeout: 30000 }

    // Google Flights & Hotels
    if (engine === 'google_flights' || engine === 'google_hotels') {
      url = 'https://serpapi.com/search'
      config.params = {
        engine,
        api_key: SERPAPI_KEY,
        ...params
      }
    }

    // TripAdvisor Attractions (Activities) - CORRECT ENDPOINT
    else if (engine === 'tripadvisor_attractions') {
      url = 'https://travel-advisor.p.rapidapi.com/attractions/list'
      config.headers = {
        'X-RapidAPI-Key': RAPIDAPI_KEY,
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
      }
      config.params = {
        location_id: '1', // Default fallback
        lunit: 'km',
        currency: 'USD',
        lang: 'en_US',
        q: params.destination // City name
      }
    }

    // Booking.com Car Rentals - CORRECT ENDPOINT
    else if (engine === 'booking_cars') {
      url = 'https://booking-com15.p.rapidapi.com/api/v1/cars/searchCars'
      config.headers = {
        'X-RapidAPI-Key': RAPIDAPI_KEY,
        'X-RapidAPI-Host': 'booking-com15.p.rapidapi.com'
      }
      config.params = {
        pick_up_location: params.pickupLocation,
        drop_off_location: params.dropoffLocation || params.pickupLocation,
        pick_up_datetime: `${params.pickupDate} ${params.pickupTime || '10:00'}`,
        drop_off_datetime: `${params.dropoffDate} ${params.dropoffTime || '10:00'}`,
        driver_age: params.driverAge || 30,
        currency_code: 'USD'
      }
    }

    else {
      return res.status(400).json({ error: `Unsupported engine: ${engine}` })
    }

    const response = await axios.get(url, config)
    res.json(response.data)
  } catch (error) {
    console.error('❌ API Error:', error.response?.data || error.message)
    res.status(error.response?.status || 500).json({
      error: error.response?.data?.message || 'External API failed'
    })
  }
})

app.listen(PORT, () => {
  console.log(`🚀 Proxy running on http://localhost:${PORT}`)
  console.log('Keys loaded:', !!SERPAPI_KEY, !!RAPIDAPI_KEY)
})