import React from 'react' 
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'

function App() {
  

  return (

    <div className="flex justify-center items-center ">

      <h1 className="text-center text-3xl font-bold"> Heading </h1>
      <Home/>
    </div>
    
  )
}

export default App
