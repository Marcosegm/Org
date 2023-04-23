import './App.css';
import { v4 as uuid } from "uuid"
import { useState } from 'react';
import { Header } from './Componentes/Header/Header.js';
import { Formulario } from './Componentes/Formulario/Formulario.js';
import { MiOrg } from './Componentes/MiOrg';
import { Equipo } from './Componentes/Equipo';
import { Footer } from './Componentes/Footer';

function App() {

  const [mostrarFormulario, actualizarEstado] = useState(false)
  const [colaboradores, actualizarColaboradores] = useState([{
    equipo: "Front End",
    foto: "https://github.com/harlandlohora.png",
    nombre: "Harland Lohora",
    puesto: "Instructor",
    id: uuid(),
    fav: true
  },
  {
    equipo: "Programación",
    foto: "https://github.com/genesysaluralatam.png",
    nombre: "Genesys Rondón",
    puesto: "Desarrolladora de software e instructora",
    id: uuid(),
    fav: true

  },
  {
    equipo: "UX y Diseño",
    foto: "https://github.com/JeanmarieAluraLatam.png",
    nombre: "Jeanmarie Quijada",
    puesto: "Instructora en Alura Latam",
    id: uuid(),
    fav: true
  },
  {
    equipo: "Programación",
    foto: "https://github.com/christianpva.png",
    nombre: "Christian Velasco",
    puesto: "Head de Alura e Instructor",
    id: uuid(),
    fav: false
  },
  {
    equipo: "Innovación y Gestión",
    foto: "https://github.com/JoseDarioGonzalezCha.png",
    nombre: "Jose Gonzalez",
    puesto: "Dev FullStack",
    id: uuid(),
    fav: false

  }])

  const [equipos, actualizarEquipos] = useState([
    {
      titulo: "Programación",
      id: uuid(),
      colorPrimario:"#57C278" ,
      colorSecundario: "#D9F7E9",
    },
    {
      titulo: "Front End",
      id: uuid(),
      colorPrimario:"#82CFFA" ,
      colorSecundario: "#E8F8FF" ,
    },
    {
      titulo:"Data Science" ,
      id: uuid(),
      colorPrimario: "#A6D157",
      colorSecundario:  "#F0F8E2",
    },
    {
      titulo: "Devops",
      id: uuid(),
      colorPrimario: "#E06B69",
      colorSecundario:  "#FDE7E8",
    },
    {
      titulo: "UX y Diseño",
      id: uuid(),
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5" ,
    },
    {
      titulo: "Móvil",
      id: uuid(),
      colorPrimario: "#FFBA05",
      colorSecundario:  "#FFF5D9",
    },
    {
      titulo: "Innovación y Gestión",
      id: uuid(),
      colorPrimario: "#FF8A29",
      colorSecundario:  "#FFEEDF",
    },  
]) 

  //Componente Ternario --> condicion ? ( si es verdadera) se muestra : caso contrario no se muestra
  // otra alternativa es: condicion && se muestra 

  const cambiarEstado = () => {
    actualizarEstado(!mostrarFormulario)
  }

  //Registrar colaborador
  const registroColaborador = (colaborador) => {
    console.log("nuevo colaborador", colaborador)
    //Spread operator
    actualizarColaboradores([...colaboradores, colaborador ])
  }

  // Eliminar colaborador 
  const eliminarColaborador = (id) => {
    console.log("eliminar", id)
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
    actualizarColaboradores(nuevosColaboradores)

  }

  //Actualizar color de equipo
  const actualizarColor = (color, id) => {
    console.log("actualizar", color, id)
    const equiposActualizados = equipos.map((equipo) => {
      if ( equipo.id === id) {
        equipo.colorPrimario = color
      }
      return equipo
    })

    actualizarEquipos(equiposActualizados)
  }

  //Crear Equipo
  const crearEquipo = (nuevoEquipo) => {
    actualizarEquipos([...equipos, {...nuevoEquipo, id:uuid}])
  }

  // boton like
  const like = (id) => {
    console.log("like", id)
    const colaboradoresActualizados = colaboradores.map((colaborador) => {
      if ( colaborador.id === id ) {
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })
    actualizarColaboradores(colaboradoresActualizados)
  }

  return (
    <div >
      <Header /> 
      { 
        mostrarFormulario && <Formulario 
          equipos={equipos.map((equipo) => equipo.titulo)}
          registroColaborador={registroColaborador}
          crearEquipo={crearEquipo}
          />
      }

      {/* mostrarFormulario ? es lo mismo que mostrarFormulario === true? */}
      {/* {mostrarFormulario && <Formulario/>} */}
      <MiOrg cambiarEstado={cambiarEstado}/>
      {
        equipos.map((equipo, index)=> {
          return (
            <Equipo 
              key={index}
              datos={equipo}
              colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo )}
              eliminarColaborador={eliminarColaborador}
              actualizarColor= {actualizarColor}
              like={like}
              />
          )
        })
      }
      <Footer/>


    </div>
  );
}

export default App;
