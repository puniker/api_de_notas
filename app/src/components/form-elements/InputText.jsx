import React, {useState} from 'react'

function InputText ( props ) {
    
    const [field, setField] = useState( props.defaultValue )
    
    const setValue = ( evt ) => {
        //console.log( evt.target.value )
        setField( evt.target.value)

    }
    //const temp = this.state.field;
    console.log( field )  
    return (
        <div className={props.customClass} >
            <span className="input-text-label">{props.label}</span>
            <input type="text" name={props.name} value={field} onChange={setValue}  />
        </div>
    )
}

InputText.defaultProps = {  
    defaultValue: ''
}  

export default InputText;