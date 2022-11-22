const express = require('express')
const router = express.Router()
require('dotenv').config()
const User = require('../../mongoose/models/User')

router.get('/', (req, res) => {
  res.send('Get all users')
})

router.get('/:username', async (req, res) => {
  const username = req.params.username
  try {
    const user = await User.findOne({ username })
    res.send(user)
  } catch (error) {
    console.log(error)
  }
})

router.get('/:username/displayname', async (req, res) => {
  const username = req.params.username
  try {
    const user = await User.findOne({ username })
    res.send(user.username)
  } catch (error) {
    console.log(error)
  }
})

router.get('/:username/chrp', (req, res) => {
  res.send(`chrps of ${req.params.username}`)
})

router.post('/', async (req, res) => {
  try {
    console.log(req.body)
    const { username, firstName, lastName } = req.body
    console.log({ username, firstName, lastName })
    const user = await User.create({
      username,
      firstName,
      lastName
    })
    console.log(user)
  } catch (error) {
    console.log(error)
  }
})

router.post('/login', async (req, res) => {
  try {
    console.log(req.body)
    const { username } = req.body
    const user = await User.findOne({
      username
    })
    if (!user) {
      res.status(401).json({
        error: 'Unauthorized access',
        messege: `User ${user.username} not found`
      })
    }
    console.log(user)
  } catch (error) {
    console.log(error)

    res.status(401).json({
      error: 'Unauthorized access',
      messege: error
    })
  }
})

module.exports = router
