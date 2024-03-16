// import React from 'react'
import { useState } from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState<boolean>(true);

  const toggle = () => {
    setShowPass(!showPass)
  }
  return (
    <div className='h-[100vh] w-[100vw] flex items-center justify-center'>
      <div className='p-5 shadow-xl rounded-lg w-[90vw] sm:w-[74vw] md:w-[50vw] lg:w-[35vw] px-4 '>
        <h1 className='text-center text-3xl mb-6 font-semibold'>Welcome <span className='text-orange-600'>Back!</span></h1>
        <div >
          <form className='flex flex-col '>
            <div>
            <input type="text" className='py-1 px-2 border-2  rounded-md text-gray-800 w-full' placeholder='Username' />
            </div>
            <div className='relative'>

            <div className='relative mt-5'>
            <input type={showPass ? 'text' : 'password'} className='py-1 w-full px-2 border-2  rounded-md text-gray-800' placeholder='Password' />
            </div>
            <div className='text-xl absolute top-7 right-2 cursor-pointer text-black'>
              {
                showPass ? <AiFillEyeInvisible onClick={toggle} /> : <AiFillEye onClick={toggle} />
              }
            </div>
              </div>
            <div>
            <button type='submit' className='px-auto w-full py-2 rounded-lg text-white bg-orange-500 text-md font-medium mt-2'>Login Now</button>
          <button type='submit' className='px-auto w-full py-2 rounded-lg text-orange-500 border-2 border-orange-500 text-md mt-2 font-medium' onClick={() => navigate('/register')}>Register Now</button>
            </div>
          </form>

        </div>

      </div>
    </div>
  )
}
