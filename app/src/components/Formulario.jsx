import { useState } from 'react'
import InputText from './form-elements/InputText'

function Formulario (){

    const actionUrl = 'http://localhost:3080/save-nota'

    const submitForm = (evt) => {
        evt.preventDefault()
        console.log( evt )
    }

    return (
        <div>
            <form action={actionUrl} method="get" onSubmit={submitForm}>
                <InputText name="titulo" label="Título" customClass="custom-element" />
                <InputText name="descripcion" label="Descripción" customClass="custom-element-desc" />
                <InputText name="estado" label="Estado de la nota" customClass="custom-element" />
                <InputText name="user" label="Usuario" customClass="custom-element" />
                <input type="submit" value="enviar" />
            </form>

        </div>
    )


}

export default Formulario