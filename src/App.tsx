import React from 'react';
import logo_atv from './assets/logo_atv.png';
import logo_ocesa from './assets/logo-ocesa.png';
import logo_paramo from './assets/logo-paramo.png';
import logo_turismo from './assets/logo_turismo.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div className="App">
      <nav className="barra-atv navbar">
        <img src={logo_atv} alt="logo" />
        <div className='boton'>Quiero alcancías</div>
      </nav>
      <div className='landingBody'>
        <div className='landing-first-div landing-div container'>
          <div>
            <h1><b>Vende + <br />Llegando a +</b></h1>
            <h3>Flexibiliza tu sistema de pagos utilizando nuestro sistema de <b>Alcancías de Reserva y Compra</b></h3>
            <div className='boton'>Quiero tener alcancías</div>
          </div>
          <div></div>
        </div>
        <div className='landing-last-div landing-div grey-background'>
          <div className='container'>
            <h1>Empresas que utilizan nuestras alcancías</h1>
            <div>
              <img src={logo_ocesa} alt="Logo Ocesa" />
              <img src={logo_paramo} alt="Logo Ocesa" />
              <img src={logo_turismo} alt="Logo Ocesa" />
            </div>
          </div>
        </div>
        <div className='landing-footer'>
          <div></div>
          <div><h6>Desarrollado con <FontAwesomeIcon icon={faHeart} style={{ color: "#7e72fb" }} /> por Evolution
        Ideas SAS ©</h6></div>
        </div>
      </div>
    </div>
  );
}

export default App;
