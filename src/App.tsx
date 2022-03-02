import React from 'react';
import logo_atv from './assets/logo_atv.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <nav className="navbar barra-atv">
        <img src={logo_atv} alt="logo" />
        <div className='boton'>Quiero alcancías</div>
      </nav>
      <div>
        <div>
          <h1><b>Vende + <br />Llegando a +</b></h1>
          <h3>Flexibiliza tu sistema de pagos utilizando nuestro sistema de <b>Alcancías de Reserva y Compra</b></h3>
          <div className='boton'>Quiero tener alcancías</div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default App;
