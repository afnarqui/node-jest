const express = require('express')
const pino = require('pino-http')()
const app = express()

app.use(pino)
app.use(express.json())

const router = express.Router()

const users = []
router.post('/users', (req, res) => {
  const { name , address, age } = req.body
  users.push( { name , address, age })
  return res.status(201).send(users)
})

app.use(router)

module.exports = app

