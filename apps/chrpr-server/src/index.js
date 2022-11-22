const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
require('dotenv').config()
const mongoose = require('mongoose')

const port = process.env.PORT || 3000

app.use(bodyParser.json())
app.use(cors())

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true }, () => {
  console.log('Db connected')
})

app.get('/', (req, res) => {
  res.send('Chrpr server')
})

app.use('/chrp', require('./express/routes/chrpRoutes'))
app.use('/feed', require('./express/routes/feedRoutes'))
app.use('/user', require('./express/routes/userRoutes'))

app.listen(port, () => {
  console.log(`Server started on ${port}`)
})
