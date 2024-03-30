import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { FaBook, FaCross, FaHome } from "react-icons/fa"
import { GiBlackBook } from "react-icons/gi";
import { IoIosPeople } from "react-icons/io";
import { MdCoPresent } from "react-icons/md";
import { Link } from "react-router-dom"
import logo from '../assets/images/logo.png'


const NavLinks = [
  {
    title: "Profile",
    link: "/",
    icon: <CgProfile />
  },
  {
    title: "Volunteers",
    link: "/about",
    icon: <IoIosPeople />
  },
  {
    title: "Attendance",
    link: "/gallery",
    icon: <MdCoPresent />
  },
  {
    title: "Syllabus",
    link: "/events",
    icon: <FaBook />
  },
  {
    title: "Material",
    link: "/contact",
    icon: <GiBlackBook />
  },
  {
    title: "Home",
    link: "/contact",
    icon: <FaHome />
  },
]



export default function Navbar() {
  const [open, setOpen] = useState<boolean>(true);

  const handleChange = () => {
    setOpen((open) => !open)
  }
  return (
    <div
      className={`transition-all duration-200 ease-in-out ${open ? "w-[60vw]" : "w-[15vw]"
        } bg-white lg:w-[20vw] flex-col  text-black h-screen fixed`}
    >
      <div className="mb-20 relative">
        {
          open ? <div className="flex justify-between items-center lg:px-6 pt-2 relative">
            <img src={logo} alt="" className="h-[40px] w-[40px] " />
            <FaCross onClick={handleChange} className=" block cursor-pointer lg:hidden" />
          </div> 
          : <div className="flex justify-around">
            <div onClick={handleChange} className="pt-2">
              <img src={logo} alt="" className="h-[40px] w-[40px]" />
            </div>

          </div>
        }


      </div>
      {NavLinks.map((link) => {
        return (
          <div className='flex justify-between px-6 items-center mt-4 pb-1 border-b-2 border-orange-500 text-xl text-orange-500' key={link.title}>
            
            {open ?

            <div className="flex justify-between items-center gap-4">
            {link.icon}
            <Link to='/' className="pt-2">{link.title} </Link>
            </div>
             : 
             <div>
               {link.icon}
             </div>

            }
          </div>
        )
      })}

    </div>
  )
}
