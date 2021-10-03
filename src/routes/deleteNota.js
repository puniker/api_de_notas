const express = require('express')
const notas = require( '../modules/notas' )
const app = express()

app.get('/', function (request, response) {
    notas.deleteNota( request.query.id, function( notas ) {
        return response.json( notas ) 
    } )
}) 

module.exports = app
