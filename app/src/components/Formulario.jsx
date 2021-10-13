import { useState } from 'react'

function Formulario (){

    const [count, setCount] = useState(20)

    const actionUrl = 'http://localhost:8080/save-nota'
    return (

        <div>
            {count}
            <form action={actionUrl} method="get">
                Título: <input type="text" name="titulo" />
                <br />
                Descripción: <input type="text" name="descripcion" />
                <br />
                Estado: <input type="number" name="estado" />
                <br />
                Usuario: <input type="text" name="user" />
                <br />
                <input type="submit" value="enviar" />
            </form>

        </div>

    )


}

export default Formulario