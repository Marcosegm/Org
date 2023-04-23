import "./Boton.css"

const Boton = (props) => {
    return (
        <button className="boton">{props.children}</button>
    )
}

export { Boton }