const dotenv = require('dotenv').config().parsed
const fs = require('fs')
const dateTime = require('node-datetime');
const csvParser = require('csv-parser')
const createCsvWriter = require('csv-writer').createObjectCsvWriter
const { v4: uuidv4 } = require('uuid');
const notas = require( './getNota' )

const FILE = 'data/test_notas.csv'

module.exports = 
    function ( data, callback) {
        notas( undefined, function( notas ) {
            let all_notas = notas
            var addNota = {
                'id': uuidv4(),
                'titulo': data.titulo,
                'descripcion': data.descripcion,
                'estado': data.estado,
                'fecha': dateTime.create().format('Y-m-d H:M:S'),
                'user': data.user
            }
            all_notas.push( addNota )
            console.log( addNota )

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