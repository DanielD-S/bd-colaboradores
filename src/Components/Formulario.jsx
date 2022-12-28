import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap';

const Formulario = ({ lstColaboradores, setLstColaboradores,setLstFiltrada }) => {

    const [nombre, setNombre] = useState(''); //Valor Estado
    const [email, setEmail] = useState(''); //Valor Estado

    const agregarColaborador = (e) => { // e captura evento que navegador envia
        e.preventDefault(); // Evitar recarga de pagina , detener ejecucion submit
        setLstColaboradores([...lstColaboradores, { nombre: nombre, correo: email }]);// ... actualizar lista, agrega nuevos datos
        setLstFiltrada([...lstColaboradores, { nombre: nombre, correo: email }]);
        alert('Colaborador Agregado');
     

    }
    return (
        <div className='p-2' style={{background:'black',color:'white'}}>
            <h5>Nombre</h5>
            <Form  onSubmit={agregarColaborador}>
            <><Form.Control  size="sm" id='nombre' name='nombreColaborador' type="text" placeholder="Nombre Colaborador" 
            onChange={(e) => setNombre(e.target.value)}/>
            </>
            <br/>
            <h5>Email</h5>
            <><Form.Control size="sm" type="email" id='email' name='email' placeholder="Email Colaborador" 
             onChange={(e) => setEmail(e.target.value)}/>
            </>
            <br/>
            <Button type='submit' className='btn btn-primary'>Agregar Colaborador</Button>
            </Form>
        </div>
    )
}

export default Formulario