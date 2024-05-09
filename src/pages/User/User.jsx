import React from 'react'
import user1Img from '../../assets/user1.png'
import user2Img from '../../assets/user2.png'
import avatar1 from '../../assets/avatar1.png'
import avatar2 from '../../assets/avatar2.png'

const User = () => {
  return (
    <div className='userBgImg flex justify-center gap-100 mt-24 mb-24'>
      <div className='w-380 mt-24'>
        <img src={user1Img} />
        <p className='text-txtGray mt-5'>Thanks to DevOptima, our team can focus more on <span className='text-white'>innovation</span> and less on operational challenges. Their <span className='text-white'>cloud management solutions</span> are top-notch.</p>
        <div className='flex items-center mt-8'>
          <img src={avatar1} className='w-44 h-44 rounded-full' />
          <div className='text-txtGray text-18 ml-2'>John Smith<br /><span className='text-15'>IT Director at Reflex</span></div>
        </div>
      </div>
      <div className='w-380 mt-24'>
        <img src={user2Img} />
        <p className='text-txtGray mt-5'>DevOptima has been a game-changer for us. With their support, we've shifted our focus <span className='text-white'>from operational hurdles to pushing boundaries in innovation.</span></p>
        <div className='flex items-center mt-8'>
          <img src={avatar2} className='w-44 h-44 rounded-full' />
          <div className='text-txtGray text-18 ml-2'>Jane Doe<br /><span className='text-15'>Tech Lead at Dribble</span></div>
        </div>
      </div>
    </div>
  )
}

export default User