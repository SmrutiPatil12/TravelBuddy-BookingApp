# TravelBuddy Booking App ✈️🏨

A modern, responsive travel booking web application built with **React** and **Vite**. It provides real-time flight and hotel search powered by **SerpApi** (Google Flights & Google Hotels), along with static/premium pages for services, travel guides, and insurance.

**Live Demo:** https://travelbuddy-swart.vercel.app  
**Repository:** https://github.com/SmrutiPatil12/TravelBuddy-BookingApp

### Features

- Premium glassmorphism UI with smooth animations, hover effects, and mobile-first design
- Real-time flight search (round-trip & one-way) powered by SerpApi
- Real-time hotel search with images, ratings, amenities, and direct booking links
- Beautiful Services page with clickable cards linking to Flights & Hotels
- Dedicated static pages for Travel Guides & Tips and Travel Insurance
- Protected Booking page (only accessible after login with Clerk Auth)
- Responsive mobile sidebar menu with glassmorphism blur effect
- Secure API calls via Node.js/Express proxy server (no exposed keys)
- Clean, maintainable code structure with React Router

### Tech Stack

- **Frontend:** React, Vite, React Router, Clerk Authentication
- **Styling:** Pure CSS (glassmorphism, gradients, custom animations)
- **Backend Proxy:** Node.js, Express (for SerpApi calls)
- **API Integration:** SerpApi (Google Flights & Hotels)
- **Icons:** Font Awesome
- **Deployment:** Vercel (frontend)

### Installation & Local Setup

#### Frontend
1. Clone the repository:
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
   VITE_CLERK_PUBLISHABLE_KEY=pk_test_xxxxxxxxxxxx
   VITE_SERPAPI_KEY=your_serpapi_key_here   # optional for direct testing
   ```
4. Start development server:
   ```bash
   npm run dev
   ```
   Open http://localhost:5173

#### Proxy Server (Required for Searches)
1. Go to `server/` folder:
   ```bash
   cd server
   npm install
   ```
2. Create `.env` in `server/`:
   ```
   SERPAPI_KEY=your_serpapi_key_here
   PORT=5000
   ```
3. Run the proxy:
   ```bash
   node index.js
   ```

### Deployment

**Frontend (Vercel)**
- Push to GitHub
- Connect repo in Vercel dashboard
- Add environment variables: `VITE_CLERK_PUBLISHABLE_KEY`
- Deploy → Live in minutes

**Proxy Backend**
- Deploy on Render.com, Railway.app, or Cyclic.sh
- Add `SERPAPI_KEY` as environment variable
- Update fetch URLs in `Booking.jsx` to your live proxy URL

### Future Improvements

- Add real car rentals & activities via RapidAPI
- User dashboard with saved searches/bookings
- Multi-city flight search
- Travel package builder (flight + hotel + car)
- Dark mode toggle

### Acknowledgments

Built with love by **Smruti Patil**  
Inspired by modern travel platforms like Booking.com, Google Flights, and premium UI trends.

Happy Traveling! 🌍✈️🏨  
Feedback & stars ⭐ welcome!
