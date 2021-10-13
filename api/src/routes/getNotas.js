const express = require('express')
const app = express()
const notas = require( '@notas' )

app.get('/', function (request, response) {
    notas.getNota( request.query.id, function( notas ) {
        return response.json( notas ) 
    } )
}) 

module.exports = app
