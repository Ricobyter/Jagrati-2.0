// import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login(){
    const navigate = useNavigate();
  return (
    <div>
      <button className='text-orange-600' onClick={() => navigate('/register')}>Register</button>
    </div>
  )
}
