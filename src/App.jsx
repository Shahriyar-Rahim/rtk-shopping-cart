import React from 'react'
import { Outlet } from 'react-router'
import NavBar from './components/NavBar'

const App = () => {
  return (
    <div className='bg-white'>
     <NavBar />

     <main className='max-w-6xl mx-auto min-h-screen'>
      <Outlet/>
    </main> 
    </div>
  )
}

export default App