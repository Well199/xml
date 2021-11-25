require('dotenv').config()

const express = require('express')
const cors = require('cors')
const server = express()

const Controller = require('./controller')

server.use(express.json())
server.use(express.urlencoded({ extended: false }));

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', "*")
    server.use(cors())
    next()
})

server.post('/retorno-pfacil', Controller.retornoPfacil)

server.use((req, res) => {
    res.status(404)
    res.json({status: 404, message: 'url não encontrada'})
})

server.listen(process.env.PORT, async () => {
    console.log(`Servidor em http://localhost:${process.env.PORT}`) 
})








        
        


                 
   


        

            


