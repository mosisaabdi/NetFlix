import React from 'react'
import Home from './Pages/Home/Home'
import { Route, Routes } from 'react-router-dom'
import Player from './Pages/Player/Player'
import Login from './Pages/Login/Login'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/player:id' element={<Player/>}/>
      </Routes>
    
    </div>
  )
}

export default App