import './App.css'

const App = () => {
  return (
    <>
    <div className='w-full h-screen flex justify-center items-center relative'>
      <div className='bg-blue-500 h-20 w-full  top-0 fixed z-999'>

      </div>
        <div className='w-150 h-150 bg-cyan-500 relative'>
            <div className='w-30 h-30 bg-amber-600 flex justify-center items-center absolute top-0 left-0'>Box-1</div>
            <div className='w-30 h-30 bg-amber-600 flex justify-center items-center absolute top-0 right-0'>Box-2</div>
            <div className='w-30 h-30 bg-amber-600 flex justify-center items-center absolute bottom-0 left-0'>Box-3</div>
            <div className='w-30 h-30 bg-amber-600 flex justify-center items-center absolute bottom-0 right-0'>Box-4</div>
            <div className='w-30 h-30 bg-amber-600 flex justify-center items-center absolute inset-50'>Box-5</div>
        </div>

        
    </div>

    <div className='w-full h-screen bg-green-800'>
    
    </div>
    </>
  )
}

export default App