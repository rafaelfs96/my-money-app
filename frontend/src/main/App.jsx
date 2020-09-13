import '../common/template/dependencies'
import React from 'react'

import Routes from './routes'
import { BrowserRouter as Router } from 'react-router-dom'

import Header from '../common/template/header'
import Sidebar from '../common/template/sidebar'
import Footer from '../common/template/footer'

import Messages from '../common/msg/messages'

export default ({}) => {
  return (
    <Router>
      <Messages />
      <div className='wrapper'>
        <Header />
        <Sidebar />
        <div className='content-wrapper'>
          <Routes></Routes>
        </div>
        <Footer />
      </div>
    </Router>
  )
}
