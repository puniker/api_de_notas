const express = require('express')
const fs = require('fs')
const csvParser = require('csv-parser')
//const csvWriter = require('csv-writer').createObjectCsvWriter

const FILE = 'data/notas_pruebas.csv'
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

app.get('/all-notes', function (request, response) {
  //res.send('Hello World')
  response.json( notas )
}) 

app.get('/note/:id', function (request, response) {

    var id = parseInt( request.params.id )
    //var note = notas.find( note => note.id == id )
    //response.json( note ) 
    var nota = getNotaById( id )
    console.log( nota )
    
})


function getNotaById ( nId ) {
    
    let results = []
    
    fs.createReadStream( FILE )
    .on('error', () => {
        // code...
    })
    .pipe( csvParser({ separator: CSV_SEPARATOR}) )
    .on('data', (row) => { results.push(row) })
    .on('end', () => {
        
        var n = results.find( n => n.id == 1)
        //console.log( n )
        return n

    })

}

//header
//    .writeRecords(notas)
//    .then(()=> console.log('The CSV file was written successfully'))

app.listen(3001)