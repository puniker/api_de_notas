import React, { useState } from 'react'
import InputText from '../form-elements/InputText'

const actionUrl = 'http://localhost:3080/save-nota'

function GuardarNota (){

    const submitForm = (evt) => {
        evt.preventDefault()
        console.log( evt )
    }

    return (
        <div>
            <h1>Añade una nota nueva</h1>
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

export default GuardarNota