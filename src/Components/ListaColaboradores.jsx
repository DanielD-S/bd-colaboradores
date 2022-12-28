import React from 'react'
const ListaColaboradores = ({lstColaboradores,setLstColaboradores}) => {
 return (
    <div style={{background:'black',color:'white',height:'100vh'}}>

        <h2>Lista de Colaboradores</h2>
        <ul >
            {lstColaboradores.map(c => <li key={c.id}>Nombre: {c.nombre}, Email: {c.correo}</li>)}
        </ul>
    </div>
  )
}

export default ListaColaboradores