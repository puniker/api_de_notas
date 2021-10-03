const fs = require('fs')
const csvParser = require('csv-parser')

const FILE = 'data/test_notas.csv'
const CSV_SEPARATOR = ','

var id = undefined

module.exports = {
    result: function ( id = undefined) {
        //console.log( 'file get Nota ' + id )
        obtenerNota( id )
    },
}

let results = []

function obtenerNota ( id ) {
    
    fs.createReadStream( FILE )
    .on('error', () => {
        console.log('Error al abrir el fichero de notas.')
    })
    .pipe( csvParser({ separator: CSV_SEPARATOR}) )
    .on('data', (row) => { 
        //console.log( 'linea')
        //console.log( row )
        results.push( row )
         
    })
    .on('end', () => {
        
        //console.log( id )
        if ( id == undefined ) {
            //callback( results ) 
            //console.log(results)
            module.exports = { results }
        } else {
            var nota = results.find( nota => nota.id == id)
            if ( nota == undefined ) {
                //console.log('No se ha encontrado la nota solicitada.')
                //callback( API_ERROR_NOTA_UNDEFINED )
            } else {
                //console.log( nota )
                module.exports = { nota }
                //callback( nota )
            }
        }
    
    })

}