import { useState, useEffect } from "react"
import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListadoPacientes from "./components/ListadoPacientes"

const App = () => {

  const [ dataPacientes, setDataPacientes ] = useState([])
  const [ paciente, setPaciente ] = useState({})


  //Setteando la data del LocalStorage a nuestro State
  useEffect(() => {

    const obtenerLocalStorage = () => {
      const pacientesLS = JSON.parse( localStorage.getItem('pacientes') ) ?? []
      setDataPacientes(pacientesLS)
    }

    obtenerLocalStorage()
  }, [])

  //Guardando la Data en LocalStorage
  useEffect(() => {
    localStorage.setItem( 'pacientes', JSON.stringify( dataPacientes ) )
  }, [dataPacientes])


  const eliminarPaciente = id => {
    const pacientesActualizados = dataPacientes.filter( paciente => paciente.id !== id )
    setDataPacientes(pacientesActualizados)
  }


  return (
    <div className="container mx-auto mt-20">
      <Header/>
      <div className="mt-12 md:flex ">
        <Formulario
          dataPacientes={dataPacientes}
          setDataPacientes={setDataPacientes}
          paciente={ paciente }
          setPaciente={setPaciente}
        />
        <ListadoPacientes
          dataPacientes={dataPacientes}
          setPaciente={ setPaciente }
          eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  )
}

export default App