const express = require('express')
const app = express()

app.get('/', function (request, response) {
    return response.send('a la sesion')
}) 

module.exports = app
