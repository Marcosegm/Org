import "./ListaOpciones.css"

const ListaOpciones = (props) => {

    // Metodo map -> arreglo.map( (equipos, index)=> {
    //     return <option></option>
    // })
    

    const manejarCambio = (event) => {
        props.actualizarValor(event.target.value)
    }

    return (
        <div className="lista-opciones">
            <label>Equipos</label>
            <select value={props.valor} onChange={manejarCambio}>
                <option value="" defaultValue="" disabled  hidden>Seleccionar equipo</option>
                {props.equipos.map((equipo, index) => {
                    return (
                        <option key={index} value={equipo}>{equipo}</option>
                    )
                })}

            </select>
        </div>
    )
}
export { ListaOpciones }