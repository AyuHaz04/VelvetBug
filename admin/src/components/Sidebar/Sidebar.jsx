import React from 'react'
import  './Sidebar.css'
import { assets } from '../../assets/assets'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebar-options">
        <NavLink to='/add' className="sidebar-option">
            <img src={assets.add_icon} alt="" />
            <p>Add Items Cards</p>
        </NavLink>
        <NavLink to='/list' className="sidebar-option">
            <img src={assets.order_icon} alt="" />
            <p>List Items Cards</p>
        </NavLink>
        <NavLink to='/add_home' className="sidebar-option">
            <img src={assets.add_icon} alt="" />
            <p>Add Items Home</p>
        </NavLink>
        <NavLink to='/list_home' className="sidebar-option">
            <img src={assets.order_icon} alt="" />
            <p>List Items Home</p>
        </NavLink>
      </div>
    </div>
  )
}

export default Sidebar
