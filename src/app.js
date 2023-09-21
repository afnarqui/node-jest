const express = require('express')
const pino = require('pino-http')()
const app = express()

app.use(pino)
app.use(express.json())

const router = express.Router()

const users = []
router.post('/users', (req, res) => {
  const { name , address, age, uid } = req.body
  users.push( { name , address, age, uid })
  return res.status(201).send(users)
})

router.get('/users', (req, res) => {
  return res.status(200).send(users)
})

router.get('/users/:uid', (req, res) => {
  const { uid } = req.params
  const user = users.find((item) => item.uid === uid )
  return res.status(200).send(user)
})

router.put('/users/:uid', (req, res) => {
  const { uid } = req.params
  const userUpdate = users.map((user) => {
    if(user.uid === uid ) {
      return {
        ...user,
        name: user.name , address:user.address, age:user.age
      }
    }
      return user
  } )
  return res.status(200).send(userUpdate)
})

router.delete('/users/:uid', (req, res) => {
  const { uid } = req.params
  const userUpdate = users.filter((item) => item.uid !== uid )
  return res.status(200).send(userUpdate)
})

app.use(router)

module.exports = app

