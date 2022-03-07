import React from 'react';
import logo_atv from './assets/logo_atv.png';
import logo_ocesa from './assets/logo-ocesa.png';
import logo_paramo from './assets/logo-paramo.png';
import logo_turismo from './assets/logo_turismo.png';
// import step1_number from './assets/1.png'
// import step2_number from './assets/2.png'
// import step3_number from './assets/3.png'
// import step4_number from './assets/4.png'
import step1 from './assets/step_1.png';
import step2 from './assets/step_2.png';
import step3 from './assets/step_3.png';
import step4 from './assets/step_4.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faCheck, faMoneyCheckDollar, faHandshake, faUserGroup } from '@fortawesome/free-solid-svg-icons';

const handleDragStart = function (e : any) {e.preventDefault()};

const items = [
  <div onDragStart={handleDragStart} role="presentation" className='hiw_step_container'>
      {/* <div>
        <img src={step1_number} alt="1" />
        <h1>Tus clientes abren su alcancía</h1>
      </div> */}
      <div><img src={step1} alt="" className='phone_step_img' /></div>
  </div>,
  <div onDragStart={handleDragStart} role="presentation" className='hiw_step_container'>
  <div><img src={step2} alt="" className='phone_step_img' /></div>
</div>,
<div onDragStart={handleDragStart} role="presentation" className='hiw_step_container'>
<div><img src={step3} alt="" className='phone_step_img' /></div>
</div>,
<div onDragStart={handleDragStart} role="presentation" className='hiw_step_container'>
<div><img src={step4} alt="" className='phone_step_img' /></div>
</div>,
];

function App() {
  return (
    <div className="App">
      <nav className="barra-atv navbar">
        <img src={logo_atv} alt="logo" />
        <div className='boton'>Quiero Alcancías</div>
      </nav>
      <div className='landingBody'>
        <div className='landing-div landing-first-container'>
          <div className='landing-first-div container'>
            <div className='landing-first-div-title-sec'>
              <h1 className='tituloLanding'><b>Vende + <br /><span>Llegando a +</span></b></h1>
              <h3>Flexibiliza tu sistema de pagos utilizando nuestro sistema de <b>Alcancías de Reserva y Compra</b></h3>
              <div className='boton mb-4' style={{fontSize: "24px", padding: "30px 25px"}}>Quiero tener Alcancías</div>
              <h5>Permite que tus Clientes <b>Ahorren contigo y Compren después</b></h5>
            </div>
            <div className='first-div-img-container'>
              <div className='first-div-img'>

              </div>
            </div>
          </div>
        </div>

        <div className='landing-div'>
          <div className='container'>
            <h1 className='mb-5' style={{color: "#7e72fb"}}>¿Cómo funciona?</h1>
            <h4 className='mb-5'>ArmaTuVaca pone a tu disposición una <b>Plataforma de Reserva y Ahorro</b> para que Compradores interesados en adquirir tu Servicio puedan <b>aportar a su ritmo hasta llegar al total</b>, así:</h4>
            <div>
              <AliceCarousel mouseTracking items={items} autoPlay={true} infinite={true} autoPlayInterval={3000} responsive={
                {
                  0: {
                      items: 1,
                  },
                  991: {
                      items: 2
                  }
                }
              } />
            </div>
          </div>
        </div>

        <div className='landing-div landing-third-container'>
          <div className='container'>
              <h1 className='mb-5'>¿Qué debo hacer para obtenerlo?</h1>
              <div className='what_to_do_div'>
                <div>
                  <h4 className='mb-3'><FontAwesomeIcon icon={faCheck} style={{ color: "#7e72fb" }} />  Delimita el <b>precio</b> de tu producto</h4>
                  <h4 className='mb-3'><FontAwesomeIcon icon={faCheck} style={{ color: "#7e72fb" }} />  Establece cual será el porcentaje mínimo para <b>reservar</b></h4>
                  <h4 className='mb-3'><FontAwesomeIcon icon={faCheck} style={{ color: "#7e72fb" }} />  Planea el <b>tiempo</b> máximo que tendrán tus clientes para aportar</h4>
                  <h4 className='mb-3'><FontAwesomeIcon icon={faCheck} style={{ color: "#7e72fb" }} />  Determina una <b>tarifa por cancelación</b></h4>
                </div>
                <div>
                <div className='boton' style={{fontSize: "24px", padding: "30px 25px"}}>Quiero tener Alcancías</div>
                </div>
              </div>
          </div>
        </div>

        <div className='landing-div'>
          <div className='container'>
            <h2 style={{fontSize: "36px"}} className='mb-5'>Animate a usar <span style={{color: "#7E72FB", fontWeight: "bold"}}>Alcancías,<br />no pierdas clientes</span> que no tienen todo el dinero</h2>
            <div className='advantages-container'>
              <div>
                <h1><FontAwesomeIcon icon={faMoneyCheckDollar} style={{ color: "#03e09d" }} /></h1>
                <h3>Aumenta tu target</h3>
                <p>Vende a quienes tienen tarjetas de crédito o recursos disponibles, pero -especialmente- a quienes no. <b>Facilita y flexibiliza tu forma de pago.</b></p>
              </div>
              <div>
                <h1><FontAwesomeIcon icon={faHandshake} style={{ color: "#003644" }} /></h1>
                <h3>Fideliza a tus clientes</h3>
                <p><b>Para que nunca se pierdan</b> tus eventos, inviten a otras personas y, reciban cashback redimibles en consumo o en futuras experiencias.</p>
              </div>
              <div>
                <h1><FontAwesomeIcon icon={faUserGroup} style={{ color: "#7e72fb" }} /></h1>
                <h3>Capta 1, Recibe 2</h3>
                <p>Acepta <b>reservas y compras grupales</b>. Con una persona interesada pueden llegar 2.<br /><br />La vida se comparte, las cuentas también.</p>
              </div>
            </div>
          </div>
        </div>

        <div className='landing-last-div landing-div grey-background'>
          <div className='container'>
            <h1>Empresas que utilizan nuestras Alcancías</h1>
            <div className='alies_images_container'>
              <img src={logo_ocesa} alt="Logo Ocesa" style={{marginBottom: "0"}} />
              <img src={logo_paramo} alt="Logo Ocesa" />
              <img src={logo_turismo} alt="Logo Ocesa" />
            </div>
          </div>
        </div>
        <div className='landing-footer grey-background'>
          <div className='mb-3'><h6>Desarrollado con <FontAwesomeIcon icon={faHeart} style={{ color: "#7e72fb" }} /> por Evolution
        Ideas SAS ©</h6></div>
        <div className='container mb-3' style={{fontWeight: "bold", cursor: "pointer"}}>Sobre Nosotros &nbsp; &nbsp; &nbsp; &nbsp; Terminos y Condiciones  &nbsp; &nbsp; &nbsp; &nbsp; Seguridad</div>
        </div>
      </div>
    </div>
  );
}

export default App;
