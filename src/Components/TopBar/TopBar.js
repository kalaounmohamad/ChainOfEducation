import React from 'react'
import { Link } from 'react-router-dom' 
import './TopBar.css'

export default function TopBar() {
  return (
    <div className='mainTop'>
        <nav>
        <Link to='/home'className='links'>Home</Link>
        <Link to='/colorbtn' className='links'>ColorButton</Link>
        <Link to='/calculator' className='links'>Calculator</Link>
        <Link to='/car' className='links'>Car</Link>
        </nav>
    </div>
  )
}
