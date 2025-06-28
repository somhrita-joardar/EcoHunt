import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Mission from './pages/Mission'
import SubmitFlag from './pages/SubmitFlag'   

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} /> 
        <Route path="/dashboard" element={<Dashboard />} /> 
        <Route path="/mission" element={<Mission />} />
        <Route path="/submitflag" element={<SubmitFlag />} />
      </Routes>
    </Router>
  )
}


export default App