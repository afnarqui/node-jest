/*
npm init -y
npm install express socket.io
*/

const express = require('express')
const http = require('http')
const socketIO = require('socket.io')

const app = express()
const server = http.createServer(app)
const io = socketIO(server)

app.use(express.static('public'))

io.on('connection', (socket) => {
  console.log('Un nuevo usuario se ha conectado')

  socket.on('chat message', (message) => {
    console.log('Mensaje recibido:', message)
    io.emit('chat message', message)
  })

  socket.on('disconnect', () => {
    console.log('Un usuario se ha desconectado')
  })
})

server.listen(3000, () => {
  console.log('La aplicación de chat está corriendo en http://localhost:3000')
})
