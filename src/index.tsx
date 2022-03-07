import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

const flechaDerecha = (<FontAwesomeIcon icon={faChevronRight} style={{ color: "#7e72fb" }} />);
const flechaIzquierda = (<FontAwesomeIcon icon={faChevronLeft} style={{ color: "#7e72fb" }} />);

ReactDOM.render(flechaIzquierda, document.getElementsByClassName("alice-carousel__prev-btn-item")[0]);
ReactDOM.render(flechaDerecha, document.getElementsByClassName("alice-carousel__next-btn-item")[0]);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
