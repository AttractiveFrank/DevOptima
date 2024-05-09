import React, { useState } from 'react'
import about from '../../assets/about.png'

const Home = () => {
  const [email, setEmail] = useState({ email: '' })
  const [temp, setTemp] = useState(false)

  const handleChange = (e) => {
    setEmail({ ...email, [e.target.name]: e.target.value })
  }

  const submit = (email) => {
    email.email !== '' ? setTemp(false) : setTemp(true)
  }
  return (
    <div className='flex justify-between pb-24'>
      <div className="topBg mt-24">
        <p className='text-white w-716 text-72 leading-tight'>
          Revolutionize<br />
          your DevOps journey with DevOptima
        </p>
        <p className='text-txtGray w-716 mt-7'>Empower teams to innovate faster through streamlined development,<br /> efficient automated workflows, and reliable scaling.</p>
        <div className='relative w-464'>
          <input onChange={handleChange} className='w-464 h-14 mt-9 rounded-full bg-btnPrimary pl-5 text-txtGray' placeholder='Your business email...' name='email' type='email' />
          <div className='absolute top-11 right-2'><button onClick={() => submit(email)} className='text-white w-157 h-10 bg-hoverbtnPrimary rounded-full'>Free trial</button></div>
          {
            temp &&
            <p className='text-warning ml-8 mt-5'>Email is a required field</p>
          }
        </div>
      </div>
      <div className='bottomBg mt-20'>
        <img src={about} className='w-589' />
      </div>
    </div >
  )
}

export default Home