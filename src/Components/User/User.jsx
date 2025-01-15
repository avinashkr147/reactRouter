import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()
  return (
    <div className='bg-gray-600 flex justify-center text-white text-3xl p-4'>
        User: <span className=' text-red-500'>{userid}</span></div>
  )
}

export default User