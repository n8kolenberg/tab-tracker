console.log('hello world')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json()) // Allow our app to easily parse any JSON that's sent in
app.use(cors()) // You need this if you want any client to hit your server

app.get('/status', (req, res) => {
  res.send({
    message: 'hello world'
  })
})

app.listen(process.env.PORT || 8081)
