import React from 'react'
import { Link } from 'react-router-dom'

import Navbar from './navbar'

export default props => {
  return (
    <header className='main-header'>
      <Link to='/' className='logo'>
        <span className='logo-mini'><b>my</b>m</span>
        <span className='logo-lg'>
          <i className='fa fa-money'></i>
          <b> My</b> Money
        </span>
      </Link>
      <nav className='navbar navbar-static-top'>
        <button className='sidebar-toggle' data-toggle='offcanvas'></button>
        <Navbar />
      </nav>
    </header>
  )
}

