import { useState } from 'react'
import { Link } from 'react-router-dom'
import { MenuItems } from './MenuItems'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'
import './Navbar.css'

function Navbar() {
  const [clicked, setClicked] = useState(false)

  const handleClick = () => setClicked(!clicked)
  const closeMobileMenu = () => setClicked(false)

  return (
    <nav className="NavbarItems">
      {clicked && <div className="menu-overlay" onClick={closeMobileMenu}></div>}
      <h1 className="navbar-logo">TravelBuddy</h1>

      {/* Hamburger Icon */}
      <div className="menu-icons" onClick={handleClick}>
        <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
      </div>

      {/* Navigation Links */}
      <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
        {/* Signed Out: Limited Menu */}
        <SignedOut>
          {/* Only show About, Services, Contact */}
          {MenuItems.filter(item => 
            ['About', 'Services', 'Contact'].includes(item.title)
          ).map((item, index) => (
            <li key={index}>
              <Link className="nav-links" to={item.url} onClick={closeMobileMenu}>
                {item.icon && <i className={item.icon}></i>}
                {item.title}
              </Link>
            </li>
          ))}
        </SignedOut>

        {/* Signed In: Full Menu */}
        <SignedIn>
          {MenuItems.map((item, index) => (
            <li key={index}>
              <Link className="nav-links" to={item.url} onClick={closeMobileMenu}>
                {item.icon && <i className={item.icon}></i>}
                {item.title}
              </Link>
            </li>
          ))}

          {/* Booking Link - Only for signed-in users */}
          <li>
            <Link className="nav-links" to="/booking" onClick={closeMobileMenu}>
              <i className="fa-solid fa-plane-departure"></i> Booking
            </Link>
          </li>
        </SignedIn>

        {/* Auth Section - Mobile */}
        <li className="nav-auth-mobile">
          <SignedOut>
            <SignInButton mode="modal">
              <button className="cta-btn">Sign Up</button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </li>
      </ul>

      {/* Desktop Auth Section */}
      {/* <div className="desktop-auth">
        <SignedOut>
          <SignInButton mode="modal">
            <button className="signup-btn-desktop">Sign In / Sign Up</button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
      </div> */}
    </nav>
  )
}

export default Navbar