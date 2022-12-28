import React from 'react'
import {Nav,Container,Form,Navbar} from 'react-bootstrap'

const Busqueda = ({lstColaboradores,setLstFiltrada}) => {

    const filtrarElementos = (valorDelaCaja) => {
        const nuevoArreglo = lstColaboradores.filter((e) => e.nombre.toLowerCase().includes(valorDelaCaja)); // Determina si el texto esta dentro del nombre de c/u de los objetos por eso includes
        setLstFiltrada(nuevoArreglo);
    }

    return (
            <Navbar expand="lg" variant="dark" bg="dark">
                <Container fluid>
                    <Navbar.Brand href="#">Buscador de Colaboradores</Navbar.Brand>
                    <Navbar.Toggle aria-controls='navbarScroll'/>
                    <Nav
                    className='me-auto my-2 my-lg-0'
                    style={{maxHeight:'100px'}}
                    navbarScroll
                    ></Nav>
                </Container>
                <Form className="d-flex" style={{width:'250px'}}>
                <Form.Control
                    type="search"
                    placeholder="Busqueda Colaborador"
                    className="me-2"
                    aria-label="Search"
                    onChange={(e) => filtrarElementos(e.target.value)} //Tomar valores
                />
            </Form>
            </Navbar>
    )
}

export default Busqueda