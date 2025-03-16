import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //  fetch('https://api.github.com/users/hiteshchoudhary')
    //  .then(response => response.json())
    //  .then(data => {
    //     console.log(data);
    //     setData(data)
    //  })
    // }, [])
    
  return (
    <>
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers}
     
    <h1 className='bg-slate-300 font-serif text-neutral-800'> {data.bio}</h1>
    <img className='rounded-full' src={data.avatar_url} alt="Git picture" width={300} />
    <p className='text-red-500'>//Data fetched from GithubAPI </p>
    </div>
    </>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/avinashkr147')
    return response.json()
}

