const fs = require('fs')
const createCsvWriter = require('csv-writer').createObjectCsvWriter
const notas = require( '../notas/getNota' )
const dotenv = require('dotenv').config().parsed


module.exports = 
    function ( id, callback) {

        notas( undefined, function( notas ) {
            let all_notas = notas

            var nota = all_notas.find( nota => nota.id == id)
            //console.log( all_notas.indexOf( nota ) )
            all_notas.splice( nota, 1)
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
        } )

    }