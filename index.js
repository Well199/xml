require('dotenv').config()

const express = require('express')
const cors = require('cors')
const server = express()

const bcrypt = require('bcrypt')
const nodemailer = require("nodemailer")

server.use(express.json())
server.use(express.urlencoded({ extended: false }));

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', "*")
    server.use(cors())
    next()
})

// server.use(express.static('public'))

server.get('/', (req, res) => {
    res.json({status: "ok"})
})

server.listen(process.env.PORT, async () => {
    console.log(`Servidor em http://localhost:${process.env.PORT}`) 
})








        
        


                 
   


        

            


