import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img className='logo' src={assets.logo} alt="This is logo" />
      <img className='profile' src={assets.profile_image} alt="This is profile picture" />
    </div>
  )
}

export default Navbar
