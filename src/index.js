const dotenv = require('dotenv').config().parsed
const express = require('express')
const cors = require('cors')
// modulos propios
const routes = require('@routes')

const app = express()

app.get('/', function (request, response) {
    response.send('Bienvenido a la API de Notas. Vas a necesitar una api_key para acceder <a href="">aquí</a>.')
}) 

app.use(cors())

app.use('/get-notas', routes.getNotas )
app.use('/save-nota', routes.saveNota )
app.use('/delete-nota', routes.deleteNota )


app.listen( dotenv.PORT )