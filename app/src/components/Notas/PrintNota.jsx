
function PrintNota ( {id, titulo, descripcion, user, fecha, estado} ) {

    return (
        <article
            className="nota-item"
            notaid={id}
        >
            <span><b>id:</b> {id}</span>
            <h3 className="titulo">{titulo}</h3>
            <div className="descripcion"><p>{descripcion}</p></div>
            <h4 className="autor">{user}</h4>
            <span className="data">{fecha}</span>
            <span className="estado">{estado}</span>
            <hr />
        </article>
    )

}

export default PrintNota