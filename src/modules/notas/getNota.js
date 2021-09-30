const fs = require('fs')
const csvParser = require('csv-parser')

const FILE = 'data/test_notas.csv'
const CSV_SEPARATOR = ','

module.exports = 
    function ( id = undefined, callback) {
        //console.log ( id )
        obtenerNota( id, function( notas ) {
            callback( notas )
        } )
    }


let results = []

function obtenerNota ( id, callback ) {
    
    fs.createReadStream( FILE )
    .on('error', () => {
        console.log('Error al abrir el fichero de notas.')
    })
    .pipe( csvParser({ separator: CSV_SEPARATOR}) )
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