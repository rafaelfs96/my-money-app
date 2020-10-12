import React from 'react'
import { Link } from 'react-router-dom'

export default props => {
  return (
    <footer className='main-footer'>
      <strong>
        Copyright &copy; 2020
        <Link to='/' target='_blank'> Rafael</Link>.
      </strong>
    </footer>
  )
}
