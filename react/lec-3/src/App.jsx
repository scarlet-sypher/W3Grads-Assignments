import React from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
        <div className='min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-blue-200 p-6 '>
              <div className='bg-white shadow-lg rounded-xl p-8 text-center w-82'>
                <h1 className='text-3xl font-bold text-blue-700 mb-4'>Counter APP</h1>
                <p className='text-4xl font-mono mb-6'> {count} </p>
                <div className='flex justify-between'>
                    <button onClick={() => {setCount(count - 1)} } className='bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition'>  
                      Decrease
                    </button>
                     <button onClick={() => {setCount(0)}} className='bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500 transition'>  
                      Reset
                    </button>
                     <button onClick={(() => {setCount(count + 1)})} className='bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition'>  
                      Increase
                    </button>
                </div>

              </div>
        </div>
   </div>
  )
}

export default App
