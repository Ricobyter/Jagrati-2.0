import { Link} from 'react-router-dom'
import img1 from '../assets/images/child.jpg'
import { useState } from 'react';

export default function Register() {
    // const navigate = useNavigate();

    const [selectedYear, setSelectedYear] = useState<number | null>(null);
    const [selectedDesignation, setSelectedDesignation] = useState<string | null>("");

    // Generate options HTML
    const optionsHTML = [];
    for (let ini = 2018; ini <= 2024; ini++) {
        optionsHTML.push(<option key={ini} value={ini}>{ini}</option>);
    }




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
          <input type = 'password' className = 'border border-gray-400 py-1 px-2 w-full rounded-sm' placeholder = ' Roll No.'/>
          </div>
          <div className='mt-5'>
          <input type = 'text' className = 'border border-gray-400 py-1 px-2 w-full rounded-sm' placeholder = 'Email'/>
          </div>
          <div className='mt-5 flex gap-3'>
                <select
                    name="cars"
                    id="cars"
                    value={selectedYear}
                    onChange={(e) => setSelectedYear(parseInt(e.target.value))}
                    className='border border-gray-400 py-1 px-2 w-full rounded-sm text-gray-800'
                >
                  <option value="" disabled selected hidden>Select Year...</option>
                    {optionsHTML}
                </select>
                <select
                    name="designation"
                    id="designation"
                    value={selectedYear}
                    onChange={(e) => setSelectedDesignation((e.target.value))}
                    className='border border-gray-400 py-1 px-2 w-full rounded-sm text-gray-800'
                >
                  <option value="" disabled selected hidden>Select Designation... </option>
                    <option value="undergraduate">UG</option>
                    <option value="postgraduate">PG</option>
                </select>

            </div>
          <div className='mt-5'>
          <input type = 'password' className = 'border border-gray-400 py-1 px-2 w-full rounded-sm' placeholder = 'Password'/>
          </div>

          <div className='mt-5 flex'>
            <p>Insert profile picture <span className='text-orange-500'>(optional)</span></p>
            <input type="file"  />
          </div>
          <div className='mt-5'>
            <button className='text-center text-white w-full rounded-lg py-2 font-semibold bg-gradient-to-r from-orange-500 to-orange-400 hover:{bg-gradient-to-r from-orange-400 to-orange-500}' ><Link to="/">Register Now</Link></button>
          </div>
        </form>
      </div>

    </div>
  </div>
  
</div>
  )
}
