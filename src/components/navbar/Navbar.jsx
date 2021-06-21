import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

function Navbar () {
  const [showLogo, setShowLogo] = useState(true)

  const handleShowLogo = () => {
    if (window.innerWidth < 540) {
      setShowLogo(false)
    } else {
      setShowLogo(true)
    }
  }

  window.addEventListener('resize', handleShowLogo)

  useEffect(() => {
    handleShowLogo()
  }, [])

  return (
    <nav className='nav-container'>
      <div>{showLogo && <span className='logo'>CHTL</span>}</div>
      <ul className='nav-ul'>
        <li className='nav-item'>
          <NavLink to='/'>HOME</NavLink>
        </li>
        <li className='nav-item'>
          <NavLink to='/teams'>TEAMS</NavLink>
        </li>
        <li className='nav-item'>
          <NavLink to='/players'>PLAYERS</NavLink>
        </li>
        <li className='nav-item'>
          <NavLink to='/contact-us'>CONTACT-US</NavLink>
        </li>
        <li className='nav-item'>
          <NavLink to='/about-us'>ABOUT-US</NavLink>
        </li>
        <i className='fas fa-times' />
      </ul>
    </nav>
  )
}

export default Navbar
