import React from 'react'

const Width = () => {
  return (
    <div>
        <div className='bg-pink-400'>With in Tailwind</div>
        <div className='bg-pink-600 w-1/2'>With in Tailwind</div>
        <div className='bg-pink-800 w-1/3'>With in Tailwind</div>
        <div className='bg-pink-900 w-1/4'>With in Tailwind</div>
        <div className='bg-pink-950 w-1/5 text-white'>With in Tailwind</div>

        <div className='bg-amber-700 text-amber-100 max-w-1/2'>Max-width in Tailwind</div>
        <div className='bg-amber-700 text-amber-100 max-w-xl'>Max-width in Tailwind</div>
        <div className='bg-amber-700 text-amber-100 max-w-xs'>Max-width in Tailwind</div>

        <div className='bg-amber-300 text-amber-100 '>Max-width in Tailwind</div>
        <hr />
         
         <div className='max-w-[600px]'>
        <input type="text" className=' border-2 w-full' placeholder='Enter text-here' />
        </div>
    </div>
  )
}

export default Width