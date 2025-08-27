import React, { useContext } from 'react'
import {assets} from '../assets/assets.js'
import { NavLink, Link } from 'react-router-dom'
import { useState } from 'react'
import { ShopContext } from '../context/ShopContext.jsx'
import {FaSearch, FaUser, FaShoppingBag} from 'react-icons/fa'

const Navbar = () => {
    const [visible, setVisible] = useState(false)
    const {setShowSearch, getCartCount} = useContext(ShopContext)
  return (
    <div className='flex justify-between items-center font-medium py-7 px-10 bg-primary mb-10'>
        <Link to='/'><img src={assets.logo1} className='w-36 cursor-pointer' alt="Logo" /></Link>

        <ul className='hidden sm:flex gap-5 text-sm text-secondary'>
            <NavLink to='/' className='flex flex-col items-center gap-1 hover:text-tertiary'>
                <p>HOME</p>
                <hr className='w-2/4 border none h-[1.5px] bg-primary hidden'/>
            </NavLink>
            
            <NavLink to='/collection' className='flex flex-col items-center gap-1 hover:text-tertiary'> 
                <p>COLLECTION</p>
                <hr className='w-2/4 border none h-[1.5px] bg-primary hidden'/>
            </NavLink>

             <NavLink to='/about' className='flex flex-col items-center gap-1 hover:text-tertiary'> 
                <p>ABOUT</p>
                <hr className='w-2/4 border none h-[1.5px] bg-primary hidden'/>
            </NavLink>
            
            <NavLink to='/contact' className='flex flex-col items-center gap-1 hover:text-tertiary'> 
                <p>CONTACT</p>
                <hr className='w-2/4 border none h-[1.5px] bg-primary hidden'/>
            </NavLink>
        </ul>

        <div className='flex items-center gap-6'> 
            <Link to='/collection'><FaSearch onClick={() => setShowSearch(true)} size={20} className='cursor-pointer text-secondary'/></Link>
            <div className='group relative'>
                <Link to={'/login'}><FaUser size={20} className='w-5 cursor-pointer text-secondary' /></Link> 
                <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                    <div className='flex flex-col gap-2 w-36 py-3 px-0 bg-slate-100 rounded'>
                        <p className='cursor-pointer px-5 py-2 hover:bg-tertiary hover:text-secondary'>My Profile</p>
                        <p className='cursor-pointer px-5 py-2 hover:bg-tertiary hover:text-secondary'>Orders</p>
                        <p className='cursor-pointer px-5 py-2 hover:bg-tertiary hover:text-secondary'>Logout</p>
                    </div>
                </div>
            </div>  
            <Link to='/cart' className='relative'>
                <FaShoppingBag size={20} className='w-5 text-secondary' />
                <p className='absolute right-[-5px] bottom-[-5px] w-4 leading-4 bg-tertiary aspect-square rounded-full text-[10px] text-center'>{getCartCount()}</p>
            </Link>

             <img className='w-5 cursor-pointer sm:hidden' onClick={() => setVisible(true)} src={assets.menu_icon} alt="Menu" />
        </div>

        {/* SideBar */}
        <div className={`sm:hidden absolute top-0 right-0 bottom-0 bg-white overflow-hidden transition-all ${visible ? 'w-full' : 'w-0'}`}>
            <div className='flex flex-col'>
                <div className='flex items-center gap-4 p-3 cursor-pointer hover:text-tertiary' onClick={() => setVisible(false)}>
                     <img className='rotate-180 h-4' src={assets.dropdown_icon} alt="Close" />
                     <p>Back</p>
                </div>
                <NavLink to='/' onClick={() => setVisible(false)} className='text-center py-2 hover:text-tertiary'>HOME</NavLink>
                <NavLink to='/collection' onClick={() => setVisible(false)} className='text-center py-2 hover:text-tertiary'>COLLECTION</NavLink>
                <NavLink to='/about' onClick={() => setVisible(false)} className='text-center py-2 hover:text-tertiary'>ABOUT</NavLink>
                <NavLink to='/contact' onClick={() => setVisible(false)} className='text-center py-2 hover:text-tertiary'>CONTACT</NavLink>
               
            </div>
            
            
        </div>

       

    </div>
  )
}

export default Navbar