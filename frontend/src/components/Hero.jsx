import React from 'react'
import {assets} from '../assets/assets'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row border border-primary bg-white'>
        {/* HERO LEFT SIDE */}
        <div className='w-full h-[70vw] border-b sm:h-auto sm:w-1/2 sm:-h-0 sm:border-b-0 sm:border-r flex items-center justify-center py-10 sm:py-0'>
            <div>
                <div className='flex items-center gap-2'>
                    <p className='w-8 md:w-11 h-[2px] bg-primary'></p>
                    <p className='font-medium text-sm md:text-base'>OUR BEST SELLER</p>
                </div>
            
                <h1 className='text-4xl sm:py-3 lg:text-6xl leading-relaxed border-tertiary'>Latest Arrivals</h1>

                <div className='flex items-center gap-2'>
                    <Link to='/collection' className='font-medium bg-primary text-secondary p-2 rounded-sm text-sm md:text-base hover:bg-tertiary transition-all duration-300'>SHOP NOW</Link>
                </div>
            </div>
        </div>

        {/* HERO RIGHT SIDE */}
        <img className='w-full  sm:w-1/2' src={assets.hero_img} alt="Hero Image" />
        

    </div>
  )
}

export default Hero