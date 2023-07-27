import { useState } from "react"
import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListadoPacientes from "./components/ListadoPacientes"

const App = () => {

  const [ dataPacientes, setDataPacientes ] = useState([])
  const [ paciente, setPaciente ] = useState({})

  console.log(paciente)

  return (
    <div className="container mx-auto mt-20">
      <Header/>
      <div className="mt-12 md:flex ">
        <Formulario
          dataPacientes={dataPacientes}
          setDataPacientes={setDataPacientes}
        />
        <ListadoPacientes
          dataPacientes={dataPacientes}
          setPaciente={ setPaciente }
        />
      </div>
    </div>
  )
}

export default App