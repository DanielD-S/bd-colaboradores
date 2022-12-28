import Formulario from "./Components/Formulario";
import Busqueda from "./Components/Busqueda";
import ListaColaboradores from "./Components/ListaColaboradores";
import { useState } from "react";
import { BaseColaboradores } from "./Components/BaseColaboradores";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [lstColaboradores, setLstColaboradores] = useState(BaseColaboradores);
  const [lstFiltrada, setLstFiltrada] = useState(BaseColaboradores);


  return (
    <div>
      <Busqueda lstColaboradores={lstColaboradores} 
      setLstFiltrada={setLstFiltrada}>
      </Busqueda>
      <Formulario 
      lstColaboradores={lstColaboradores} 
      setLstColaboradores={setLstColaboradores} 
      setLstFiltrada={setLstFiltrada}>
      </Formulario> {/* Pasar datos mediante props {} */}
      <ListaColaboradores lstColaboradores={lstFiltrada}>
      </ListaColaboradores>

    </div>
  );
}

export default App;
