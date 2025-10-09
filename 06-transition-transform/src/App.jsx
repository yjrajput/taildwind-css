import React from 'react'
import './App.css'
const App = () => {
  return (
    <div>
      <button className='border-none bg-blue-500 text-white px-4 py-2 m-10 rounded-lg hover:bg-blue-950'>Login</button>

      <button className='border-none bg-blue-500 text-white px-4 py-2 m-10 rounded-lg hover:bg-blue-950 transition duration-1000'>Login</button>

      <button className='border-none bg-blue-500 text-white px-4 py-2 m-10 rounded-lg hover:bg-blue-950  transition-all duration-1000 hover:rotate-180 hover:scale-50'>Login</button>

      <div>
        <img className='m-10 transition duration-1000 hover:scale-50 hover:rotate-360' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfUvEV4qKn_lxckDDd01lspzo2a9djhy4ZqQ&s" alt="" />
      </div>
    </div>
  )
}

export default App