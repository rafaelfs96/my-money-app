import '../common/template/dependencies'

import React, { useEffect } from 'react'

import axios from 'axios'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Main from './Main'
import Auth from '../auth/auth'
import { validateToken } from '../auth/authActions'

function App({ auth, validateToken, children }) {
  useEffect(() => {
    if(auth.user) {
      validateToken(auth.user.token)
    }
  })

  const isLoggedIn = () => {
    if(auth.user && auth.validToken) {
      axios.defaults.headers.common['authorization'] = auth.user.token
      return <Main>{children}</Main>
    } else if(!auth.user && !auth.validToken) {
      return <Auth />
    } else return false
  }

  return isLoggedIn()
}

const mapStateToProps = state => ({ auth: state.auth })
const mapDispatchToProps = dispatch => bindActionCreators({ validateToken }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App)