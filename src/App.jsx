import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
      </Routes>
    </div>
  )
}

export default App
