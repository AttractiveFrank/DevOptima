import React from 'react'
import logo from '../../assets/logo.png'
import twitter from '../../assets/twitter.png'
import linkedin from '../../assets/linkedin.png'
import github from '../../assets/github.png'
import discourse from '../../assets/discourse.png'

const Footer = () => {
  return (
    <div className='bg-footerCol w-full border-t-2 border-borderFooter pt-16 pb-12'>
      <div className='max-w-screen-2xl mx-auto flex w-full'>
        <div style={{ width: '50%' }} className='text-white'>
          <div className='flex relative'>
            <img src={logo} className='absolute w-30 h-31' />
            <p className='fontFamily text-white text-24 ml-7 mt-2'>DevOptima</p>
          </div>
          <p className='text-15 text-txtGray mt-24'>Devoptima 2023 © All rights reserved</p>
        </div>
        <div style={{ width: '50%' }} className='flex justify-between' >
          <div className='gap-16'>
            <p className='text-white'>Resources</p>
            <div className='mt-4'><a href='#' className='text-14 text-txtGray hover:text-white hover:text-16'>Docs</a></div>
            <div className='mt-4'><a href='#' className='text-14 text-txtGray hover:text-white hover:text-16'>Release notes</a></div>
            <div className='mt-4'><a href='#' className='text-14 text-txtGray hover:text-white hover:text-16'>Security</a></div>
          </div>
          <div>
            <p className='text-white'>Community</p>
            <div className='mt-4 flex items-center gap-10'>
              <img src={twitter} />
              <a href='#' className='text-14 text-txtGray hover:text-white hover:text-16'>Twitter</a>
            </div>
            <div className='mt-4 flex items-center gap-10'>
              <img src={linkedin} />
              <a href='#' className='text-14 text-txtGray hover:text-white hover:text-16'>LinkedIn</a>
            </div>
            <div className='mt-4 flex items-center gap-10'>
              <img src={github} />
              <a href='#' className='text-14 text-txtGray hover:text-white hover:text-16'>GitHub</a>
            </div>
            <div className='mt-4 flex items-center gap-10'>
              <img src={discourse} />
              <a href='#' className='text-14 text-txtGray hover:text-white hover:text-16'>Discourse</a>
            </div>
          </div>
          <div>
            <p className='text-white'>Legal</p>
            <div className='mt-4'><a href='#' className='text-14 text-txtGray hover:text-white hover:text-16'>Privacy policy</a></div>
            <div className='mt-4'><a href='#' className='text-14 text-txtGray hover:text-white hover:text-16'>Terms of service</a></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer