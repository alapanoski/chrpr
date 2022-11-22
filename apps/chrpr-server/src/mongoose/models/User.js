const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  dateOfRegistration: {
    type: Date,
    default: Date.now
  }
})

const User = mongoose.model('users', UserSchema)
module.exports = User
