const express = require('express')
const router = express.Router()

const {
  getAllChrps,
  getChrpById,
  postNewChrp
} = require('../../express/controllers/chrpController')

router.get('/', getAllChrps)

router.get('/:id', getChrpById)

router.post('/', postNewChrp)

router.get('/user/:username', (req, res) => {
  res.send(`Chrpr server ${req.params.username}`)
})

module.exports = router
