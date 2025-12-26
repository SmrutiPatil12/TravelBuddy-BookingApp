# TravelBuddy Booking App ✈️🏨

A modern, responsive travel booking website built with **React** and **Vite**. Features real-time flight and hotel search powered by **SerpApi** (Google Flights & Google Hotels integration).

Live Demo: (Deploy on Vercel/Netlify and add link here)  
Repo: https://github.com/SmrutiPatil12/TravelBuddy-BookingApp

## Features
- **Premium Glassmorphism Design** — Modern UI with blur effects, hover animations, and elegant typography
- **Real-Time Search** — Powered by SerpApi for live flight prices, schedules, and hotel deals
- **Flights Tab** — Search round-trip/one-way with airline details, duration, stops, and direct booking links
- **Hotels Tab** — Search by destination with images, ratings, amenities, and direct "View Deal" links
- **Fully Responsive** — Looks stunning on desktop, tablet, and mobile
- **Fast & Secure** — Uses a backend proxy to keep API keys hidden (no CORS issues)

## Tech Stack
- **Frontend**: React, Vite, React Router
- **Styling**: Pure CSS (with glassmorphism, gradients, and animations)
- **API**: SerpApi (Google Flights & Google Hotels) via Node.js/Express proxy
- **Icons**: Font Awesome

## Setup & Run Locally

### Frontend (This Repo)
1. Clone the repo:
   ```bash
   git clone https://github.com/SmrutiPatil12/TravelBuddy-BookingApp.git
   cd TravelBuddy-BookingApp
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create `.env` in root:
   ```
   VITE_SERPAPI_KEY=your_serpapi_key_here
   ```
4. Run:
   ```bash
   npm run dev
   ```
   Open http://localhost:5173

### Backend Proxy (Required for Searches)
Create a `server` folder in the project or separately:
```bash
mkdir server && cd server
npm init -y
npm install express cors axios dotenv
```

Create `index.js` (proxy code from earlier) and `.env` with your `SERPAPI_KEY`.

Run:
```bash
node index.js
```

## Deployment
- Frontend: Vercel, Netlify, or GitHub Pages (free & easy)
- Backend Proxy: Render, Vercel Serverless Functions, or Railway

## Future Improvements
- Add car rentals & activities search
- User accounts & booking history
- Payment integration mock
- Multi-language support

Made with ❤️ by **Smruti Patil**  
Feel free to star ⭐ the repo and fork it!

Happy Traveling! 🌍✈️
