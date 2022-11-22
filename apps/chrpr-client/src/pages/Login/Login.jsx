import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

import { UserContext } from '../../contexts/UserContext'

import { loginUser } from '../../services/UserService'

export default function Login() {
  const navigate = useNavigate()

  const { user, setUser } = useContext(UserContext)

  const navigateToSignup = (e) => {
    navigate('/signup')
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setUser((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleLogin = (e) => {
    e.preventDefault()
    loginUser(user)
    setUser({ firstName: 'Mate' })
    localStorage.setItem('username', user.username)
    window.location.reload()
  }

  return (
    <Form controlId="login">
      <Form.Text>Welcome back</Form.Text>
      <Form.Text>Welcome back! Please enter your details.</Form.Text>
      <Form.Group>
        <Form.Label htmlFor="username">Username</Form.Label>
        <Form.Control
          name="username"
          type="text"
          value={user.username}
          onChange={handleChange}
          placeholder="Username"
          id="login-username"
        />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="password">Password</Form.Label>
        <Form.Control
          name="password"
          type="password"
          value={user.password}
          onChange={handleChange}
          placeholder="Password"
          id="login-password"
        />
      </Form.Group>

      <Form.Group>
        <Form.Text>
          Do not have an account?
          <Button onClick={navigateToSignup}>Sign up</Button>
        </Form.Text>
      </Form.Group>

      <Button onClick={handleLogin}>Login</Button>
    </Form>
  )
}
