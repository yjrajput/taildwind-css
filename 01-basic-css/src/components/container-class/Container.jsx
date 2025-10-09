import React from 'react'

const Container = () => {
  return (
    <>
    <ul className='bg-amber-950 text-2xl flex justify-end [&>*]:p-4 mb-20'>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Services</li>
    </ul>
    <div className='bg-amber-700 text-2xl text-white container mx-auto'>
        i'm batman
    </div>
    <div className='bg-amber-700 text-2xl text-white container mx-auto'>
        i'm batman
    </div>
    </>
  )
}

export default Container