import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

import { addpNewUser } from '../../services/UserService'

export default function Signup() {
  const navigate = useNavigate()

  const [user, setUser] = useState({
    username: '',
    firstName: '',
    lastName: ''
  })

  const navigateToLogin = (e) => {
    navigate('/')
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setUser((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSignup = (e) => {
    e.preventDefault()
    addpNewUser(user)
    localStorage.setItem('username', user.username)
    navigate('/')
    window.location.reload()
  }

  return (
    <Form>
      <Form.Text>Signup</Form.Text>
      <Form.Group>
        <Form.Label htmlFor="username">Username</Form.Label>
        <Form.Control
          name="username"
          type="text"
          value={user.username}
          onChange={handleChange}
          placeholder="Username"
        />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="firstname">First Name</Form.Label>
        <Form.Control
          name="firstName"
          type="text"
          value={user.firstName}
          onChange={handleChange}
          placeholder="First Name"
        />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="password">Lasr Name</Form.Label>
        <Form.Control
          name="lastName"
          type="text"
          value={user.lastName}
          onChange={handleChange}
          placeholder="Last Name"
        />
      </Form.Group>

      <Form.Group>
        <Form.Text>
          Already a user?
          <Button onClick={navigateToLogin}>Login</Button>
        </Form.Text>
      </Form.Group>

      <Button onClick={handleSignup}>Signup</Button>
    </Form>
  )
}
