import { useState, useEffect } from "react"

const Formulario = () => {

  const [ nombre, setNombre ] = useState('')


  console.log(nombre)

  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
      <p className="text-lg mt-5 text-center mb-10">
        Añade Pacientes y {' '}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>
      <form action="" className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
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
        ></textarea>
        </div>

        <input 
          type="submit"
          value="agregar Paciente"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors rounded-md"
          />
      </form>
    </div>
  )
}

export default Formulario