const getNota = require( './getNota' )
const obtenerNota = require( './obtenerNota' )


module.exports = {
    getNota,
    obtenerNota,
    saveNota: function ( ) {
        console.log('variable save nota')
    }
}