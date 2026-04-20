import React from 'react'
import Login from './components/Login'

const App = () => {
  return (
    <div className='bg-cyan-950 h-[100vh]'>
    <div className='bg-cyan-950 h-auto'>
      <h1 className='flex flex-row justify-center p-4 font-bold text-2xl bg-amber-800 text-white'>Form Validation</h1>
      <Login />
    </div>
    </div>
  )
}

export default App
