import React from 'react'
import { useState } from 'react'
import './App.css'
import Parent from './components/Parent'

function App() {


  const user = {

    name: "Someone" ,
    email: "some@gamil.com" ,
    role: "Full Stack"
  }
 

  return (
    
    <div className="min-h-screen bg-gray-300 flex items-center justify-center p-6">

      <Parent user_for_parent = {user} />

      
    </div>
    
  )
}

export default App
