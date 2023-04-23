import "./Campo.css"

const Campo = (props) => {

    //Destructuraion
    const {type= "text"} = props

    const manejarCambio = (event) => {
        props.actualizarValor(event.target.value)
    }

    return(
        <div className={`campo campo-${type}`}>
            <label> {props.titulo} </label>
            <input
                placeholder={props.placeholder}
                required={props.required}
                value={props.valor}
                onChange={manejarCambio}
                type={type}
                
            />
        </div>
    )
}

export { Campo }