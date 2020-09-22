/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import './Header.scss'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import HeaderNavigation from '../../navigations/HeaderNavigation'
import logo from '../../../assets/logo.png'

export default function (props) {
  console.log(props)
  return (
    <Router>
      <nav className='header' style={{ margin: 0 }}>
        <div className='left-links'>
          <Link className='logo' to='/'>
            <img src={logo} />
          </Link>
        </div>
        <div className='rigth-links'>
          <Link className='link' to='/plans'>
            Planes
          </Link>
          <Link className='link' to='/login'>
            Iniciar Sesión
          </Link>
          <Link className='link' to='/register'>
            Registrate
          </Link>
        </div>
      </nav>

      <HeaderNavigation />
    </Router>
  )
}