import React, { useContext } from 'react'

import Button from 'react-bootstrap/Button'

import './UserBox.scss'

import { UserContext } from '../../contexts/UserContext'

export default function UserBox() {
  const { user, setUser } = useContext(UserContext)

  const handleLogout = (e) => {
    setUser({})
    localStorage.removeItem('username')
    window.location.reload()
  }

  return (
    <div id="user-box">
      <div>
        <p>
          {user.firstName} {user.lastName}
        </p>
        <p>@{user.username}</p>
      </div>
      <Button onClick={handleLogout}>Log out</Button>
    </div>
  )
}
