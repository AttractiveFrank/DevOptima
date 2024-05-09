import React from 'react'
import maskGroup1 from '../../assets/Maskgroup2.png'
import maskGroup2 from '../../assets/Maskgroup.png'
import maskGroup3 from '../../assets/Maskgroup3.png'

const Solution = () => {
  return (
    <div>
      <p className='text-white text-48 text-center'>Innovative solutions<br />for operational excellence</p>
      <p className='text-txtGray text-20 text-center mt-5'>Tailored DevOps expertise driving your business momentum.<br />Personalized solutions for growth and evolution.</p>
      <div className='flex justify-between mt-14'>
        <div className='w-380 h-auto bg-btnPrimary rounded-md'>
          <img src={maskGroup1} />
          <p className='text-white text-20 ml-4 mt-4'>Continuous Integration &<br />Deployment</p>
          <p className='text-txtGray mt-3 ml-4 mb-4'>Streamline your development process with our advanced CI/CD solutions, ensuring faster and more reliable code deployment.</p>
        </div>
        <div className='w-380 h-auto bg-btnPrimary rounded-md'>
          <img src={maskGroup2} />
          <p className='text-white text-20 ml-4 mt-4 mr-4'>Cloud Solutions & Infrastructure<br />Management</p>
          <p className='text-txtGray mt-3 ml-4 mb-4 mr-4'>Leverage the cloud for scalability and efficiency. We provide comprehensive cloud infrastructure management and optimization services.</p>
        </div>
        <div className='w-380 h-auto bg-btnPrimary rounded-md'>
          <img src={maskGroup3} />
          <p className='text-white text-20 ml-4 mt-10 mr-4'>Automated Testing & Quality<br />Assurance</p>
          <p className='text-txtGray mt-3 ml-4 mb-4 mr-4'>Enhance product quality with our automated testing services, designed to detect issues early and reduce time-to-market.</p>
        </div>
      </div>
    </div>
  )
}

export default Solution