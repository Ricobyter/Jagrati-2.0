// import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Link} from 'react-router-dom'

export default function Login(){
    const navigate = useNavigate();
  return (
    <div className='h-[100vh] w-[100vw] flex items-center justify-center'>
      <div className='p-5 shadow-xl rounded-lg w-[500px] px-4'>
        <h1 className='text-center text-3xl mb-6 font-semibold'>Welcome <span className='text-orange-600'>Back!</span></h1>
        <div >
          <form className='flex flex-col gap-5'>

          <input type="text" className='py-1 px-2 border-2  rounded-md text-gray-800' placeholder='Username'/>
          <input type="text" className='py-1 px-2 border-2  rounded-md text-gray-800' placeholder='Password'/>
          <button type='submit' className='px-auto w-full py-2 rounded-lg text-white bg-orange-500 text-md font-medium mt-2'>Login Now</button>
          </form>
          <button type='submit' className='px-auto w-full py-2 rounded-lg text-orange-500 border-2 border-orange-500 text-md mt-2 font-medium' onClick={() => navigate('/register')}>Register Now</button>
        </div>

      </div>
    </div>
  )
}
