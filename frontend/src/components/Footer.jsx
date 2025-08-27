import React from 'react'
import { assets } from '../assets/assets'
import { NavLink, Link } from 'react-router-dom'
import {FaFacebook, FaInstagram, FaTiktok} from 'react-icons/fa'


const Footer = () => {
  return (
    <div className='border-t mt-20'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 text-sm'>
            <div>
                <img className='mb-5 w-32' src={assets.logo} alt="Logo" />
                <p className='w-full md:w-2/3'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus vero similique perspiciatis porro nihil tenetur doloremque laboriosam quisquam id veniam, ipsum natus, quam blanditiis distinctio. Corporis dignissimos deleniti nulla sit?
                </p>
            </div>

            <div>
                <p className='font-medium text-xl mb-5'>Navigation</p>
                <ul className='flex flex-col gap-2'>
                    <Link to='/' onClick={() => {window.scrollTo({ top: 0, behavior: 'smooth' })}} className='hover:text-tertiary'>Home</Link>
                    <Link to='/collection' onClick={() => {window.scrollTo({ top: 0, behavior: 'smooth' })}} className='hover:text-tertiary'>Collection</Link>
                    <Link to='/about' onClick={() => {window.scrollTo({ top: 0, behavior: 'smooth' })}} className='hover:text-tertiary'>About</Link>
                    <Link to='/contact' onClick={() => {window.scrollTo({ top: 0, behavior: 'smooth' })}} className='hover:text-tertiary'>Contact</Link>
                </ul>
            </div>

            <div>
                <p className='font-medium text-xl mb-5'>Get In Touch</p>
                <div className='flex flex-col gap-2'>
                    <p>000-000-0000</p>
                    <p>dummy@gmail.com</p>
                    <ul className='flex gap-5 mt-2'>
                        <a href='https://www.facebook.com/'><FaFacebook size={20} className="text-blue-600 hover:text-blue-800 transition" /></a>
                        <a href='https://www.instagram.com/'><FaInstagram size={20} className="text-pink-500 hover:text-pink-700 transition"/></a>
                        <a href='https://www.tiktok.com/'><FaTiktok size={20} className="text-black hover:text-gray-800 transition"/></a>
                    </ul>
                </div> 
            </div>   
        </div>
        
        <p className='text-sm text-center'>Copyright 2025@ trevore.com - All Right Reserved</p>
    </div>
  )
}

export default Footer