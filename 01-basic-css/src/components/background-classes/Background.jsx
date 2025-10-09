import React from 'react'

const Background = () => {
  return (
    <div>
        <div className='h-screen bg-red-400 bg-[url("https://images.pexels.com/photos/1054655/pexels-photo-1054655.jpeg?cs=srgb&dl=pexels-hsapir-1054655.jpg&fm=jpg")] bg-cover bg-no-repeat ' >

        </div>

        <div className='h-screen gradiant bg-gradient-to-l to-green-500'>

        </div>

        <div className='h-screen gradiant bg-gradient-to-r to-pink-500'>

        </div>

        <div className='h-screen gradiant bg-gradient-to-b to-yellow-500'>

        </div>

        <div className='h-screen gradiant bg-gradient-to-bl to-blue-500'>

        </div>
    </div>
  )
}

export default Background