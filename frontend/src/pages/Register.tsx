import { Link, useNavigate } from 'react-router-dom'
import img1 from '../assets/images/child.jpg'

export default function Register() {
    const navigate = useNavigate()


  return (
<div className='min-h-screen flex justify-center items-center' >
  <div className='container mx-auto'>
    <div className='flex flex-col lg:flex-row w-10/12  lg:w-8/12 bg-white rounded-2xl mx-auto shadow-xl overflow-hidden '>
      <div className='w-full lg:w-1/2 text-white flex flex-col items-center justify-center p-12 opacity-90 bg-no-repeat bg-center bg-cover'
      style={{backgroundSize: 'cover',
        backgroundImage: `url(${img1})`}}>
      </div>
      <div className='w-full lg:w-1/2 py-10 lg:py-16 px-6 lg:px-12'>
        <h1 className='text-3xl mb-4 font-semibold'>Registration</h1>
        <p className='mb-4 font-sm '>Get registered to join the <span className='text-orange-500'>Jagrati</span> Family</p>
        <form>

          <div className='mt-5'>
          <input type = 'text' className = 'border border-gray-400 py-1 px-2 w-full rounded-sm' placeholder = 'Your Name'/>
          </div>
          <div className='mt-5'>
          <input type = 'text' className = 'border border-gray-400 py-1 px-2 w-full rounded-sm' placeholder = 'Email'/>
          </div>
          <div className='mt-5'>
          <input type = 'password' className = 'border border-gray-400 py-1 px-2 w-full rounded-sm' placeholder = 'Password'/>
          </div>
          <div className='mt-5'>
          <input type = 'password' className = 'border border-gray-400 py-1 px-2 w-full rounded-sm' placeholder = ' Confirm Password'/>
          </div>
          <div className='mt-5 flex'>
            <p>Insert profile picture <span className='text-orange-500'>(optional)</span></p>
            <input type="file"  />
          </div>
          <div className='mt-5'>
            <button className='text-center text-white w-full rounded-lg py-2 font-semibold bg-gradient-to-r from-orange-500 to-orange-400 hover:{bg-gradient-to-r from-orange-400 to-orange-500}' ><Link to="/login">Register Now</Link></button>
          </div>
        </form>
         
      </div>

    </div>
  </div>
  

</div>
  )
}
