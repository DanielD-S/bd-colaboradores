import React from 'react'
const ListaColaboradores = ({lstColaboradores,setLstColaboradores}) => {
 return (
    <div>
      <hr />
        <h2>Lista de Colaboradores</h2>
        <ul>
            {lstColaboradores.map(c => <li key={c.id}>{c.nombre} {c.correo}</li>)}
        </ul>
    </div>
  )
}

export default ListaColaboradores