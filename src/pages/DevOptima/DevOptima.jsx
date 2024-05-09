import React from 'react'
import FrameImg from '../../assets/Frame.png'
import SmallCard from '../../components/SmallCard/SmallCard'
import smallicon from '../../assets/smallIcon.png'
import smallicon2 from '../../assets/smallIcon2.png'
import smallicon3 from '../../assets/smallIcon3.png'
import smallicon4 from '../../assets/smallIcon4.png'

const data = [
  {
    icon: smallicon,
    title: 'DevOps transformation',
    text: 'Reshaping businesses with DevOps expertise.'
  },
  {
    icon: smallicon2,
    title: 'Efficient operations',
    text: 'Streamline processes for productivity gains.'
  },
  {
    icon: smallicon3,
    title: 'CI/CD implementation',
    text: 'Seamless software delivery pipeline.'
  },
  {
    icon: smallicon4,
    title: 'Automation mastery',
    text: 'Unlock full automation potential.'
  }
]

const DevOptima = () => {
  return (
    <div className='flex items-center mt-24 mb-28 '>
      <div className='w-589'><img src={FrameImg} /></div>
      <div className='ml-20'>
        <p className='text-white text-48'>What is DevOptima?</p>
        <div className='text-txtGray text-20 mt-5'>At DevOptima, we are a team of passionate DevOps experts<br />committed to transforming the way businesses approach software<br />development and operations.</div>
        <div className='w-580 justify-between flex flex-wrap'>
          {
            data.map((item, idx) => (
              <SmallCard key={idx} icon={item.icon} title={item.title} text={item.text} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default DevOptima