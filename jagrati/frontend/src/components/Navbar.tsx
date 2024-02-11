import logo from '../assets/images/logo.png'

export default function Navbar() {
  return (
    <div>

        <div className='w-full flex justify-between items-center px-[100px] py-2'>
          <img src={logo} alt="" className='h-[55px]'/>
          <button className='bg-orange-500 px-2 py-1 hover:scale-110 transition duration-150 ease-in-out  rounded-lg text-white'>Donate Now</button>
        </div>

        <div className='bg-orange-500 text-white py-3 text-md flex justify-center items-center font-rubik gap-8'>
          <button className='bg-transparent border-b-2 px-1 border-transparent transition duration-300  hover:border-b-white cursor-pointer'>Home</button>
          <button className='bg-transparent border-b-2 px-1 border-transparent transition duration-300   hover:border-b-white cursor-pointer'>About</button>
          <button className='bg-transparent border-b-2 px-1 border-transparent transition duration-300   hover:border-b-white cursor-pointer'>Events</button>
          <button className='bg-transparent border-b-2 px-1 border-transparent transition duration-300 hover:border-b-white cursor-pointer'>Gallery</button>
          <button className='bg-transparent border-b-2 px-1 border-transparent transition duration-300 hover:border-b-white cursor-pointer'>Login</button>
        </div>
      
    </div>
  )
}
