import { useState } from "react"

const apiUrl = 'http://localhost:3080/get-notas'

function Notas () {

    const [notas, setNotas] = useState()

    fetch(apiUrl)
        .then( res=> res.json() )
        .then( response => {
            //console.log( response )
            //setNotas( response )
            response.forEach( nota => {
                console.log( nota.titulo )
            });
        })

    return (
        <div className="notas">
            <h1>Listado de todas las notas</h1>
            <p>Numero de notas: {notas}</p>

        </div>

    )

}

export default Notas