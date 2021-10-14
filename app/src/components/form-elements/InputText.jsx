

function InputText ( props ) {
    return (
        <div className={props.customClass} >
            <span className="input-text-label">{props.label}</span>
            <input type="text" name={props.name} />
        </div>
    )
}

export default InputText;