import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './component/Home'
import About from './component/About'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
      </Routes>
    </div>
  )
}

export default App