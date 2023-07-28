import { useState, useEffect } from "react"
import Error from "./Error"

const Formulario = ({dataPacientes,setDataPacientes, paciente,setPaciente}) => {


  const [ nombre, setNombre ] = useState('')
  const [ propietario, setPropietario ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ fecha, setFecha ] = useState('')
  const [ sintomas, setSintomas ] = useState('')

  //Manejo de Errores
  const [ error, setError ] = useState(false)

  useEffect(() => {

    if( Object.keys(paciente).length > 0 ){

      const { nombre, propietario, email, fecha, sintomas } = paciente

      setNombre( nombre )
      setPropietario( propietario )
      setEmail( email )
      setFecha( fecha )
      setSintomas( sintomas )
    }

  }, [paciente])




  const generarID = () => {
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36)
    return random + fecha
  }


  const handleSubmit = (e) => {
    e.preventDefault()
    //vALIDACION
    if([ nombre, propietario, email,fecha, sintomas].includes('') ){
      setError(true)
      return;
    }else{
      setError(false)
      //Objeto que contiene todos los valores de los inputs
      const objetoPaciente = {
        nombre,
        propietario,
        email,
        fecha,
        sintomas
      }


      if( paciente.id ){
        //Editando el registro (Al pulsar el Button)
        objetoPaciente.id = paciente.id


        //ACTUALIZAR PACIENTES
        const pacientesActualizados = dataPacientes.map( pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState )

        setDataPacientes( pacientesActualizados )
        setPaciente({})

      }else{
        //Nuevo registro (Al pulsar el Button)
        objetoPaciente.id = generarID()
        setDataPacientes([ ...dataPacientes, objetoPaciente ])
      }

      //Reiniciando el Formulairo una vez que paso la validacion y se asignaron los Datos
      setNombre('')
      setPropietario('')
      setEmail('')
      setFecha('')
      setSintomas('')
    }

  }

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
      <p className="text-lg mt-5 text-center mb-10">
        Añade Pacientes y {' '}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>
      <form
          action="" 
          className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
          onSubmit={ handleSubmit }
          >
          
          { error &&  
          <Error>
            Todos Los Campos Son Obligatorios.
          </Error> }

        <div className="mb-5">
          <label 
            htmlFor="mascota"
            className="block text-gray-700 font-bold uppercase">
            Nombre Mascota
          </label>
          <input
            id="mascota"
            type="text"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Nombre de La Mascota"
            value={nombre}
            onChange={  e => setNombre(e.target.value) }
            />
        </div>
        <div className="mb-5">
          <label 
            htmlFor="propietario"
            className="block text-gray-700 font-bold uppercase">
            Nombre Propietario
          </label>
          <input
            id="propietario"
            type="text"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Nombre del Propietario"
            value={ propietario }
            onChange={ e => setPropietario( e.target.value) }
            />
        </div>
        <div className="mb-5">
          <label 
            htmlFor="email"
            className="block text-gray-700 font-bold uppercase">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Email Conacto Propietario"
            value={ email }
            onChange={ e => setEmail( e.target.value ) }
            />
        </div>
        <div className="mb-5">
          <label 
            htmlFor="alta"
            className="block text-gray-700 font-bold uppercase">
            Fecha de Alta
          </label>
          <input
            id="alta"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={ fecha }
            onChange={ e => setFecha( e.target.value) }
            />
        </div>
        <div className="mb-5">
          <label 
            htmlFor="sintomas"
            className="block text-gray-700 font-bold uppercase">
            Síntomas
          </label>
        <textarea
          id="sintomas"
          className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          placeholder="Describe los Sintomas"
          value={ sintomas }
          onChange={ e => setSintomas( e.target.value )}
        ></textarea>
        </div>

        <input 
          type="submit"
          value={ paciente.id ? 'Editar Paciente' : "Agregar Paciente" }
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors rounded-md"
          />
      </form>
    </div>
  )
}

export default Formulario