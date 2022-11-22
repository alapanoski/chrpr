const express = require('express')
const router = express.Router()
const Chrp = require('../../mongoose/models/Chrp')
const User = require('../../mongoose/models/User')

const logger = require('./../../winston/winston')

router.get('/', async (req, res) => {
  logger.info('New feed request')
  try {
    const chrps = await Chrp.find().sort({ date: -1 })

    for (const chrp of chrps) {
      await User.findOne({ username: chrp.username }).then((user) => {
        chrp.display_name = user.firstName + ' ' + user.lastName
      })
    }
    res.send(chrps)
  } catch (error) {
    console.log(error)
  }
})

module.exports = router
