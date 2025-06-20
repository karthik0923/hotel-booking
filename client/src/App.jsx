import React from 'react'
import Navbar from './components/Navbar'
import { Routes, useLocation } from 'react-router-dom'

const App = () => {

  const isOwnerPath = useLocation().pathname.includes("owner");

  return (
    <div>
      {!isOwnerPath && <Navbar/>}
      <div className='min-h-[70vh]'>
        <Routes>
          <Route />
        </Routes>
      </div>
    </div>
  )
}

export default App
