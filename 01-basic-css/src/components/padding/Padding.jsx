import React from 'react'

const Padding = () => {
  return (
    <div>
        <h1 className='font-semibold text-2xl'>Padding in Taildwind</h1>
        <p className='text-white bg-red-900 p-10 mb-5'>Padding in all directions</p>
        <p className='text-white bg-red-900 pt-4 mb-5'>Padding in all directions</p>
        <p className='text-white bg-red-900 px-30 mb-5'>Padding in all directions</p>
        <p className='text-white bg-red-900 py-30 mb-5'>Padding in all directions</p>
        <p className='text-white bg-red-900 pb-[100px]'>Padding in all directions</p>
    </div>
  )
}

export default Padding