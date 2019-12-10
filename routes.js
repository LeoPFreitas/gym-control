const express = require('express')
const routes = express.Router() // variavel fica responsável pelas rotas

routes.get('/', function(req, res){
    return res.send("OK")
})

// Exporta a variável com as rotas
module.exports = routes

