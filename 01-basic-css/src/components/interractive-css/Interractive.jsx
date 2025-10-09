import React from 'react'

const Interractive = () => {
  return (
    <div className='p-10'>
        <button className='border-none bg-blue-600 text-white font-semibold px-8 py-3 rounded-2xl cursor-pointer mr-10'>Login</button>
        <button className='border-none bg-blue-600 text-white font-semibold px-8 py-3 rounded-2xl cursor-pointer mr-10 hover:bg-blue-900'>Login</button>
        <button className='border-none bg-blue-600 text-white font-semibold px-8 py-3 rounded-2xl cursor-pointer mr-10 focus:bg-yellow-900'>Login</button>
        <button className='border-none bg-blue-600 text-white font-semibold px-8 py-3 rounded-2xl cursor-pointer mr-10 active:bg-red-900'>Login</button>
    </div>
  )
}

export default Interractive