const fs = require('fs')
const csvParser = require('csv-parser')
const dotenv = require('dotenv').config().parsed

const API_ERROR_NOTA_UNDEFINED = 'No existe la nota solicitada'
module.exports = 
    function ( id = undefined, callback) {
        results = []
        fs.createReadStream( dotenv.DATA_FILE )
        .on('error', () => {
            console.log('Error al abrir el fichero de notas.')
        })
        .pipe( csvParser({ separator: dotenv.CSV_SEPARATOR}) )
        .on('data', (row) => { 
            results.push( row )
            
        }) 
        .on('end', () => {
            if ( id == undefined ) {
                callback( results ) 
            } else {
                var nota = results.find( nota => nota.id == id)
                if ( nota == undefined ) {
                    callback( API_ERROR_NOTA_UNDEFINED )
                } else {
                    callback( nota )
                }
            }
        
        })

    }