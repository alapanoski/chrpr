import React, { useState } from 'react'

import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

import './NewChrp.scss'

import { postNewChrp } from '../../services/ChrpService'

export default function NewChrp() {
  const [newChrp, setNewChrp] = useState({
    username: 'default',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setNewChrp((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    newChrp.username = localStorage.getItem('username')
    console.log(newChrp)
    postNewChrp(newChrp)
    window.location.reload()
  }

  return (
    <div id="new-chrp">
      <Form onSubmit={handleSubmit} id="new-chrp-form">
        <Form.Text>Chrp something</Form.Text>
        <Form.Control
          name="message"
          id="new-chrp-message"
          type="textarea"
          style={{ resize: 'none' }}
          placeholder="Chrp something awesome"
          value={newChrp.message}
          onChange={handleChange}
        ></Form.Control>
        <Button type="submit">Chrp</Button>
      </Form>
    </div>
  )
}
