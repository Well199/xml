require('dotenv').config()

const express = require('express')
const cors = require('cors')
const server = express()

const Controller = require('./controller')

const bcrypt = require('bcrypt')
const nodemailer = require("nodemailer")

server.use(express.json())
server.use(express.urlencoded({ extended: false }));

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', "*")
    server.use(cors())
    next()
})

server.use(express.static('public'))

server.post('/user/add', Controller.create)

server.get('/', (req, res) => {
    res.json({status: "ok"})
})

server.get('/ping', (req, res) => {
    res.json({pong: "true"})
})

server.get('/nome/:nome', (req, res) => {

    let nome = req.params.nome

    res.json({nome: nome})
})

server.get('/image', (req, res) => {

    let image = `${process.env.BASE}/images/5a34e374-1a37-47ac-bfd2-77bfed80cb88.jpg`

    res.json({image: image})
})

server.post('/nome', (req, res) => {

    let nome = req.body.nome

    res.json({nome: nome})
})

server.use((req, res) => {
    res.status(404)
    res.json({status: 404, message: 'url não encontrada'})
})

server.listen(process.env.PORT, async () => {
    console.log(`Servidor em http://localhost:${process.env.PORT}`) 
})








        
        


                 
   


        

            


