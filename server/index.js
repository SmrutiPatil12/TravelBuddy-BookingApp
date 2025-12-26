require('dotenv').config()
const express = require('express')
const cors = require('cors')
const axios = require('axios')

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

app.post('/api/search', async (req, res) => {
  const { engine, params } = req.body

  if (!engine || !params) {
    return res.status(400).json({ error: 'Missing engine or params' })
  }

  console.log('Received request:', { engine, params }) // Debug log

  try {
    const response = await axios.get('https://serpapi.com/search', {
      params: {
        engine,
        api_key: process.env.VITE_SERPAPI_KEY,
        ...params
      },
      timeout: 30000 // 30 second timeout
    })

    res.json(response.data)
  } catch (error) {
    console.error('SerpApi Error:', error.message) // This will show in server console
    if (error.response) {
      console.error('Status:', error.response.status)
      console.error('Data:', error.response.data)
      res.status(error.response.status).json(error.response.data)
    } else {
      res.status(500).json({ error: 'Proxy server error: ' + error.message })
    }
  }
})

app.listen(PORT, () => {
  console.log(`Proxy server running on http://localhost:${PORT}`)
  console.log('API Key loaded:', !!process.env.VITE_SERPAPI_KEY ? 'Yes' : 'No - Check .env!')
})