import React from 'react'
import { BrowserRouter , Route, Routes } from 'react-router-dom'
import Home from "./components/Home"
import Login from "./components/Login"
import Navbar from "./components/Navbar"
import ImageGenerationForm from "./components/Generator"

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <div className='container mt-5'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/generate' element={<ImageGenerationForm/>}/>
        
      </Routes>
      </div>
      </BrowserRouter>
    </div>
  )
}

export default App

