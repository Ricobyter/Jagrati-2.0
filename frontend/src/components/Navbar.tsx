import logo from '../assets/images/logo.png'
import { useState } from 'react'

import {FaBars, FaTimes} from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom';

const NavLinks = [
  {title: "Home",
  link: "/"
},
  {title: "About",
  link: "/about"
},
  {title: "Gallery",
  link: "/gallery"
},
  {title: "Events",
  link: "/events"
},
  {title: "Contact",
  link: "/contact"
}, 


]


export default function Navbar() {
  const [open, setOpen]= useState<boolean>(false);

  const navigate = useNavigate()

  const handleMenu = () => {
    setOpen((prev) => !prev)
  };
  return (
    <div className='sticky top-0 opacity-95 z-50 bg-white m-0 w-full'>

        <div className='w-full flex justify-between items-center px-5 sm:px-10  lg:px-[100px] py-2'>
          <img src={logo} alt="" className='h-[40px] sm:h-[55px]'/>
          <button className='bg-orange-500 px-1 py-1 text-sm sm:text-md md:text-lg sm:px-2 sm:py-1 hover:scale-110 transition duration-150 ease-in-out  rounded-lg text-white'>Donate Now</button>
        </div>

        <div className='bg-orange-500 text-white'>
          <div className='mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='flex items-center md:justify-center h-16'>
              
                {/* hamburger */}
              <div className='-mr-2 flex md:hidden'>
                <button className='py-1 px-2 justify-center flex items-center rounded-md text-white cursor-pointer' type='button' onClick={handleMenu} >
                {open === true? <FaTimes />: <FaBars/>}
                </button>
              </div>
              {/* menu  */}
              <div className='hiddden md:block '>
                <div className='ml-10  items-baseline space-x-4 hidden md:flex'>
                  {NavLinks.map((link) => (
                    <a href={link.link} key={link.title} className='text-white border-b-2 border-transparent hover:border-b-white transition-all duration-200'>{link.title}</a>
                  ))}
                  <button className='text-white border-b-2 border-transparent hover:border-b-white transition-all duration-200' ><Link to="/login">Login</Link></button>
                </div>

              </div>
            </div>

            {/* mobile-menu  */}
            {open? (
              <div className='md:hidden '>
                <div className='px-2 py-1 space-y-1 sm:px-3'>
                {NavLinks.map((link) => (
                    <a href={link.link} key={link.title} className='text-white text-xl font-serif z-50 block px-3 py-2 rounded-md  font-medium'>{link.title}</a>
                  ))}
                  
                </div>
              </div>
            ): null}
          </div>

        </div>
      
    </div>
  )
}
