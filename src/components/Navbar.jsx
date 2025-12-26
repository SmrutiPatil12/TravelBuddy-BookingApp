import { useState } from 'react'
import { Link } from 'react-router-dom'
import { MenuItems } from './MenuItems'
import './Navbar.css'

function Navbar() {
  const [clicked, setClicked] = useState(false)

  const handleClick = () => setClicked(!clicked)
  const closeMobileMenu = () => setClicked(false)

  return (
    <nav className="NavbarItems">
      <h1 className="navbar-logo">TravelBuddy</h1>

      {/* Hamburger Icon */}
      <div className="menu-icons" onClick={handleClick}>
        <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
      </div>

      {/* Navigation Links */}
      <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
        {MenuItems.map((item, index) => (
          <li key={index}>
            <Link className="nav-links" to={item.url} onClick={closeMobileMenu}>
              {item.icon && <i className={item.icon}></i>}
              {item.title}
            </Link>
          </li>
        ))}

        {/* Mobile-only Sign Up Button (inside menu) */}
        <li className="nav-signup-mobile">
          <Link to="/signup" className="signup-btn-mobile" onClick={closeMobileMenu}>
            Sign Up
          </Link>
        </li>
      </ul>

      {/* Desktop Sign Up Button (outside menu) */}
      {/* <Link to="/signup" className="signup-btn-desktop">
        Sign Up
      </Link> */}
    </nav>
  )
}

export default Navbar