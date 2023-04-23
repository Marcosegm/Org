import "./Formulario.css"
import { Campo } from "../Campo/index.js"
import { ListaOpciones } from "../ListaOpciones"
import { Boton } from "../Boton"
import { useState } from "react"

const Formulario = (props) => {

    const [nombre, actualizarNombre] = useState("") 
    const [puesto, actualizarPuesto] = useState("") 
    const [foto, actualizarFoto] = useState("") 
    const [equipo, actualizarEquipo] = useState("")

    const [titulo, actualizarTitulo] = useState("")
    const [color, actualizarColor] = useState("")

    const {registroColaborador, crearEquipo} = props

    const manejarEnvio = (event) => {
        event.preventDefault()
        let datosInput = {
            nombre,
            puesto,
            foto,
            equipo,
        }
        registroColaborador(datosInput)
    }

    const manejarNuevoEquipo = (e) => {
        e.preventDefault()
        crearEquipo({
            titulo, 
            colorPrimario: color})
    }

    return(
        <section className="formulario"> 
            <form onSubmit={manejarEnvio}>
                <h2>Rellena el formulario para crear el colaborador. </h2>
                <Campo
                    titulo="Nombre" 
                    placeholder="Ingresar Nombre" 
                    required
                    valor={nombre} 
                    actualizarValor={actualizarNombre}/>

                <Campo
                    titulo="Puesto" 
                    placeholder="Ingresar Puesto" 
                    valor={puesto} 
                    actualizarValor={actualizarPuesto}
                    required/>
                <Campo 
                    titulo="Foto" 
                    placeholder="Ingresar enlace de Foto"
                    valor={foto} 
                    actualizarValor={actualizarFoto}
                    required/>
                <ListaOpciones 
                    valor={equipo}
                    actualizarValor={actualizarEquipo}
                    equipos={props.equipos}
                    />
                <Boton>Crear</Boton>
            </form>
            <form onSubmit={manejarNuevoEquipo}>
                <h2>Rellena el formulario para crear el colaborador. </h2>
                <Campo 
                    titulo="Titulo" 
                    placeholder="Ingresar Titulo" 
                    required
                    valor={titulo} 
                    actualizarValor={actualizarTitulo}/>

                <Campo 
                    titulo="Color" 
                    placeholder="Ingresar el color en Hex" 
                    valor={color} 
                    actualizarValor={actualizarColor}
                    required
                    type="color"/>
                <Boton>Registrar equipo</Boton>
            </form>
        </section>
    )
}

export { Formulario }
