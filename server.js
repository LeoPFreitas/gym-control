const express = require('express')
const nunjucks = require('nunjucks')
const routes = require('./routes')

const server = express()

//Faz funcionar o req.body
server.use(express.urlencoded({ extended: true }))

server.use(express.static('public'))
// para o express poder utilizar o routes
server.use(routes) // o use é um middleware

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})

server.listen(5000, function(){
    console.log("Server is running")
})