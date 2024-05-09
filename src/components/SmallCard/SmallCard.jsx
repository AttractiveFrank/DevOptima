import React from 'react'

const SmallCard = (props) => {
  return (
    <div className='w-242 mt-10'>
      <img src={props.icon} />
      <p className='text-white text-20'>{props.title}</p>
      <p className='text-txtGray'>{props.text}</p>
    </div>
  )
}

export default SmallCard