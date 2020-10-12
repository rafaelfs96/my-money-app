import React, { useState } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { logout } from '../../auth/authActions'

function Navbar({ user }) {
  const [open, updateOpen] = useState(false)

  const changeOpen = () => { updateOpen(!open) }

  const { name, email } = user
  return (
    <div className='navbar-custom-menu'>
      <ul className='nav navbar-nav'>
        <li onMouseLeave={ () => changeOpen() }
          className={`dropdown user user-menu ${open ? 'open' : ''}`}>
            <a href='#/'
              onClick={ () => changeOpen() }
              aria-expanded={open ? 'true' : 'false'}
              className='dropdown-toggle'
              data-toggle='dropdown'>
              <img src='http://lorempixel.com/160/160/abstract'
                alt='user'
                className='user-image'/>
              <span className='hidden-xs'>{ name }</span>
            </a>
            <ul className='dropdown-menu'>
              <li className='user-header'>
                <img src='http://lorempixel.com/160/160/abstract'
                  alt='user'
                  className='img-circle'/>
                <p>{ name }<small>{ email }</small></p>
              </li>
              <li className='user-footer'>
                <div className='pull-right'>
                  <a href='#/'
                    onClick={ logout }
                    className='btn btn-default btn-flat'>Sair</a>
                </div>
              </li>
            </ul>
        </li>
      </ul>
    </div>
  )
}

const mapStateToProps = state => ({ user: state.auth.user })
const mapDispatchToProps = dispatch => bindActionCreators({ logout }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)