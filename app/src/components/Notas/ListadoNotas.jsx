import React, { useEffect, useState } from "react"
import PrintNota from './PrintNota'

const apiUrl = 'http://localhost:3080/get-notas'

function ListadoNotas () {

    const [notas, setNotas] = useState( [] ) 

    useEffect(function(){

        fetch( apiUrl )
            .then( res => res.json() )
            .then( response => {
                const n = response.map(nota => nota) 
                setNotas( n ) 
            })
            .catch( error => console.log( 'API Connect ERROR: ', error ) )

    }, [])


    return (
        <div className="notas">
            <h1>Listado de todas las notas</h1>
            <div>
                {
                    notas.map( nota => 
                    <PrintNota 
                        id={nota.id}
                        titulo={nota.titulo}
                        descripcion={nota.descripcion}
                        user={nota.user}
                        fecha={nota.fecha}
                        estado={nota.estado}
                    /> )
                }
                
            </div> 

        </div> 

    )

}

export default ListadoNotas