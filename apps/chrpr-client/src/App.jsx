import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.scss'

import { UserContext } from './contexts/UserContext'

import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Signup from './pages/Signup/Signup'

export default function App() {
  const [user, setUser] = useState({
    firstName: 'Allen',
    lastName: 'Shibu',
    username: 'alapanoski',
    password: 'password'
  })

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div className="container">
        <Router>
          <Routes>
            {localStorage.getItem('username') && (
              <Route path="/" element={<Home />} />
            )}
            {!localStorage.getItem('username') && (
              <Route path="/" element={<Login />} />
            )}
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </Router>
      </div>
    </UserContext.Provider>
  )
}
