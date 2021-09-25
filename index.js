const express = require('express')
const fs = require('fs')
const csvParser = require('csv-parser')
const { response } = require('express')
//const csvWriter = require('csv-writer').createObjectCsvWriter

const FILE = 'data/test_notas.csv'
const CSV_SEPARATOR = ';'

//const header = csvWriter({
//    path: FILE,
//    header: [
//      {id: 'id', title: 'Id'},
//      {id: 'titulo', title: 'Título'},
//      {id: 'descripcion', title: 'Descripción'},
//      {id: 'estado', title: 'Estado'},
//      {id: 'fecha', title: 'Fecha'},
//      {id: 'user', title: 'Usuario'}, 
//    ]
//})

// variable con las notas
let notas = [
    {
        'id': 1,
        'titulo': 'Primera nota',
        'descricion': 'la descripcion',
        'estado': 0
    },
    {
        'id': 2,
        'titulo': 'Segunda nota',
        'descricion': 'la d2222escripcion',
        'estado': 1 
    },
    {
        'id': 3,
        'titulo': 'tercera notita',
        'descricion': 'la descripcion de la 3',
        'estado': 0
    },
    {
        'id': 4,
        'titulo': 'la nota cuatro',
        'descricion': 'la descripcion de la 3',
        'estado': 0
    },
]

const app = express()

app.get('/', function (request, response) {
    //res.send('Hello World')
    response.json( notas )
}) 

app.get('/all-notes', function (request, response) {
  //res.send('Hello World')
  response.json( notas )
}) 


app.get('/nota/:id', function(request, response) {
    
    var id = parseInt(request.params.id)
    obtenerNotaDesdeId(id, function(nota){
        response.json( nota )
    })

})

function obtenerNotaDesdeId (id, callback) {

    let results = []
    fs.createReadStream( FILE )
    .on('error', () => {
        console.log('No existe la nota solicitada.')
    })
    .pipe( csvParser({ separator: CSV_SEPARATOR}) )
    .on('data', (row) => { 
        results.push(row) 
    })
    .on('end', () => {
        console.log( id )
        var nota = results.find( nota => nota.id == id)
        if ( nota == undefined ) {
            console.log('No se ha encontrado la nota solicitada.')
        } else {
            console.log( nota )
            callback( nota )
        }

    })
}


app.listen(3001)