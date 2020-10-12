import './auth.scss'

import React, { useState } from 'react'

import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { login, signup } from './authActions'
import Row from '../common/layout/row'
import Grid from '../common/layout/grid'
import Messages from '../common/msg/messages'
import InputAuth from '../common/form/inputAuth'

function Auth({ handleSubmit, login, signup }) {
  const [loginMode, updateLoginMode] = useState(true)

  const changeLoginMode = () => { updateLoginMode(!loginMode) }

  const onSubmit = values => {
    loginMode ? login(values) : signup(values)
  }

  return (
    <div className='login-box'>
      <div className='login-logo'>My money</div>
      <div className='login-box-body'>
        <p className='login-box-mgs'>Bem Vindo!</p>
        <form onSubmit={handleSubmit(v => onSubmit(v))}>
          <Field component={ InputAuth } type='text' name='name'
            placeholder='Nome' icon='user' hide={ loginMode } />
          <Field component={ InputAuth } type='email' name='email'
            placeholder='Email' icon='envelope' />
          <Field component={ InputAuth } type='password' name='password'
            placeholder='Senha' icon='lock' />
          <Field component={ InputAuth } type='password' name='confirm_password'
            placeholder='Confirmar Senha' icon='lock' hide={ loginMode } />
          <Row>
            <Grid cols='4'>
              <button type='submit'
                className='btn btn-primary btn-flat'>
                { loginMode ? 'Entrar' : 'Registrar' }
              </button>
            </Grid>
          </Row>
        </form>
        <br />
        <a href='#/' onClick={ changeLoginMode }>
          {loginMode ? 'Novo usuário? Cadastre-se aqui!' : 'Já é cadastrado? Entrar Aqui!'}
        </a>
      </div>
      <Messages />
    </div>
  )
}

const AuthDecorated = reduxForm({ form: 'authForm' })(Auth)
const mapDispatchToProps = dispatch => bindActionCreators({ login, signup }, dispatch)
export default connect(null, mapDispatchToProps)(AuthDecorated)