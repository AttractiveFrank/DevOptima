import React from 'react'
import logo from '../../assets/logo.png'

const Header = () => {
  return (
    <div className='flex h-20 justify-between items-center'>
      <div className='flex relative'>
        <img src={logo} className='absolute w-30 h-31' />
        <p className='fontFamily text-white text-29 ml-7'>DevOptima</p>
      </div>
      <div className='flex'>
        <a href='#' className='text-white'>About us</a>
        <a href='#' className='text-white ml-12'>Services</a>
        <a href='#' className='text-white ml-12'>Why DevOptima </a>
      </div>
      <button className='text-white w-157 h-12 bg-btnPrimary rounded-full border-2 border-borderPrimary transition duration-500 ease-in-out hover:bg-hoverbtnPrimary'>Get started</button>
    </div>
  )
}

export default Header