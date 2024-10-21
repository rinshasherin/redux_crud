import { useState } from 'react'
import './App.css'
import './bootstrap.min.css'
import Home from './Home'
import { Route,Routes } from 'react-router-dom'
import Add from './components/Add'
import Edit from './components/Edit'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/add' element={<Add />}/>
        <Route path='/edit/:id' element={<Edit />}/>
      </Routes>
    </>
  )
}

export default App
