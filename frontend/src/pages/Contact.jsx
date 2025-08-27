import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10'>
        <Title text1={'CONTACT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="contact" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl'>Our Store</p>
          <p>Cavite, Philippines</p>
          <p>Tel: 000-000-0000 <br /> dummy@gmail.com</p>
          <p className='font-semibold text-xl'>Careers at Trevore</p>
          <p>Learn more about our teams  and job openings.</p>
          <button className='bg-primary text-secondary px-8 py-3 text-sm rounded-sm hover:bg-tertiary cursor-pointer transition-all duration-300'>Explore Jobs</button>
        </div>
      </div>

      <NewsLetterBox />
    </div>
  )
}

export default Contact