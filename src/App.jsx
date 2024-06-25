import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Edit from './Components/Edit'
import Delete from './Components/Delete'

const App = () => {
  return (
    <div>
     <BrowserRouter>
     <center>
      <header>
        <h2>CRUD</h2>
      </header>
     </center>
     <Routes>
      <Route element={<Home/>} path='/'/>
      <Route element={<Edit/>} path='/edit/:id'/>
      <Route element={<Delete/>} path='/delete/:id'/>
     </Routes>
     </BrowserRouter>
    
    </div>
  )
}

export default App