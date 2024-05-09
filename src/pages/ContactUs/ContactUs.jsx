import React from 'react'

const ContactUs = () => {
  return (
    <div className='mb-24'>
      <p className='text-48 text-white text-center pt-10'>Ready to elevate your DevOps strategy?</p>
      <p className='text-20 text-txtGray text-center mt-5'>Join the multitude of companies benefiting from optimized DevOps practices. <br />Contact us to discover how DevOptima can help your business.</p>
      <div className='flex justify-center mt-10 gap-18'>
        <button className='text-white w-157 h-12 bg-borderPrimary rounded-full border-2 border-borderPrimary transition duration-500 ease-in-out hover:bg-hoverbtnPrimary'>Contact Us</button>
        <button className='text-white w-157 h-12 bg-btnPrimary rounded-full border-2 border-borderPrimary transition duration-500 ease-in-out hover:bg-hoverbtnPrimary'>Try for free</button>
      </div>
    </div>
  )
}

export default ContactUs