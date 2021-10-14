import { useState } from 'react' 

function Persona ( props ) {

    const [persona, setPersona] = useState('enabled')

    const titleColor = 'green'
    const titleStyles = {
        'color': titleColor
    }

    return (
        <div className={persona}>
            <h1 style={titleStyles}>{props.name}</h1>
            <h2>{props.apellido}</h2>
            <h3>{props.edad}</h3>
            <button onClick={ () => ( persona=='enabled' ) ? setPersona('disabled') : setPersona('enabled') }>
                { (persona == 'enabled') ? 'Deshabilitar' : 'Habilitar' }
            </button>
            <br />
            <span>-----------</span>
        </div>
    )

}
Persona.defaultProps = {
    name: "Iker",
    apellido: "Sastre",
    edad: "24"
}

export default Persona