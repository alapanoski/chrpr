const Chrp = require('../../mongoose/models/Chrp')

const getAllChrps = async (req, res) => {
  try {
    const chrps = await Chrp.find()

    res.json(chrps)
  } catch (error) {
    console.log(error)
  }
}

const getChrpById = async (req, res) => {
  try {
    const chrp = await Chrp.findOne({
      _id: req.params.id
    })
    res.json(chrp)
  } catch (error) {
    console.log(error)
  }
}

const postNewChrp = async (req, res) => {
  try {
    const { username, message } = req.body
    const chrp = await Chrp.create({
      username,
      message
    })
    console.log(chrp)
  } catch (error) {
    console.log(error)
  }
}

module.exports = { getAllChrps, getChrpById, postNewChrp }
