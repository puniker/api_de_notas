const express = require('express')
const app = express()
const notas = require( '../modules/notas' )

app.get('/', function (request, response) {
    console.log( request.query.id )
    notas.getNota( request.query.id, function( notas ) {
        return response.json( notas ) 
    } )
    //console.log(' fue ok ') 
    //return response.send('a la sesion')
}) 

module.exports = app
