const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ChrpSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: false
  },
  display_name: {
    type: String
  },
  message: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
})

const Chrp = mongoose.model('chrps', ChrpSchema)
module.exports = Chrp
