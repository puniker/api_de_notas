const dotenv = require('dotenv').config().parsed
const express = require('express')
const dateTime = require('node-datetime');
const { v4: uuidv4 } = require('uuid');
const fs = require('fs')
const csvParser = require('csv-parser')
//const { response } = require('express')
const createCsvWriter = require('csv-writer').createObjectCsvWriter

// modulos propios
//const notas = require( './modules/notas' )
const routes = require('./routes')

const API_ERROR_ACCESO_DENEGADO = {
    error: 403,
    msg: 'Acceso denegado'
}
const API_ERROR_NOTA_UNDEFINED = {
    error: 400,
    msg: 'Nota no encontrada'
}


const app = express()
//console.log(routes.session)
//app.get('/session', routes.session) 
//notas.getNota( '4e9eb64e-a185-4076-862a-15786b1eecdf', function( notas ) {
//    console.log( notas )
//} )

app.use('/session', routes.session )
app.use('/post-nota', routes.postNota )

app.get('/', function (request, response) {
    response.send('Bienvenido a la API de Notas. Vas a necesitar una api_key para acceder aquí.')
}) 

/*
app.get('/api/notes', function (request, response) {

    user_key = request.query.key
    user_notaId = request.query.id
    apiKeyValidator(user_key, function(api_access){
        if ( api_access == true ) {
            obtenerNotaDesdeId( user_notaId, function(nota) {
                response.json( nota )
            })
        } else {
            response.json( API_ERROR_ACCESO_DENEGADO )
        }

    })

})
*/
app.get('/api/notes/write', function( request, response) {
    
    user_key = request.query.key
    var ndata = []
    ndata['titulo'] = request.query.titulo
    ndata['descripcion'] = request.query.descripcion
    ndata['estado'] = request.query.estado
    ndata['user'] = request.query.user

    apiKeyValidator(user_key, function(api_access){
        if ( api_access == true ) {
            registrarNota(ndata, function( r ){
                //console.log('registrada')
                response.json(r)
            })
        } else {
            response.json( API_ERROR_ACCESO_DENEGADO )
        }

    })
    
})

function registrarNota ( data, callback ) {
    
    //var user_notaId = request.query.id
    obtenerNotaDesdeId( undefined, function(notas) {
        let all_notas = notas
        console.log( all_notas )

        var addNota = {
            'id': uuidv4(),
            'titulo': data.titulo,
            'descripcion': data.descripcion,
            'estado': data.estado,
            'fecha': dateTime.create().format('Y-m-d H:M:S'),
            'user': data.user
        }
        all_notas.push( addNota )
        console.log( all_notas )

        var csvWriter = createCsvWriter({
            path: dotenv.DATA_FILE,
            header: [
                {id: 'id', title: 'id'},
                {id: 'titulo', title: 'titulo'},
                {id: 'descripcion', title: 'descripcion'},
                {id: 'estado', title: 'estado'},
                {id: 'fecha', title: 'fecha'},
                {id: 'user', title: 'user'},
            ]
        })
        csvWriter
        .writeRecords(all_notas)
        .then(()=> console.log('The CSV file was written successfully'));
        callback(all_notas)
    })

}

function obtenerNotaDesdeId (id, callback) {

    let results = []
    fs.createReadStream( dotenv.DATA_FILE )
    .on('error', () => {
        console.log('No existe la nota solicitada.')
    })
    .pipe( csvParser({ separator: dotenv.CSV_SEPARATOR}) )
    .on('data', (row) => { 
        results.push(row) 
    })
    .on('end', () => {
        
        console.log( id )
        if ( id == undefined ) {
            callback( results ) 
        } else {
            var nota = results.find( nota => nota.id == id)
            if ( nota == undefined ) {
                console.log('No se ha encontrado la nota solicitada.')
                callback( API_ERROR_NOTA_UNDEFINED )
            } else {
                console.log( nota )
                callback( nota )
            }
        }

    })
}

function apiKeyValidator(userKey, callback){

    let results = []
    fs.createReadStream( dotenv.KEY_FILE )
    .on('error', () => {
        console.log('No se ha podido leer el fichero de keys.')
    })
    .pipe( csvParser({ separator: dotenv.CSV_SEPARATOR }) )
    .on('data', (row) => {
        if ( row.api_key == userKey ) {
            results.push(row) 
        }
    })
    .on('end', () => {
        var key = results.find( key => key.api_key == userKey)
        //console.log( key )
        if ( key == undefined ) {
            //console.log( 'Usuario NO validado' )
            var logged_in = false
        } else {
            //console.log( 'Usuario validado' )
            var logged_in = true
        }
        callback(logged_in)
    })
}

app.listen( dotenv.PORT )