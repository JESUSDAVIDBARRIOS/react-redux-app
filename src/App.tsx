import React from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators, State } from './state';

function App() {

  const state = useSelector((state: State) => state.view);
  const dispatch = useDispatch();

  const { changeView } = bindActionCreators(actionCreators, dispatch);

  let headerTitle = 'Header';
  

  return (
    <div className="App">

      <div ng-class="bg-gradient-to-r from-cyan-300 to-blue-500 h-16 flex items-center shadow-md">
        <p ng-class="text-2xl mx-8 font-semibold">{headerTitle}</p>
      </div>

      <p ng-class="text-3xl text-center my-4 text font-bold">Select View:</p>

      <div ng-class="grid grid-cols-3 text-center w-80 h-8 mx-auto">
        <a ng-class="bg-cyan-300 flex justify-center items-center" href="/" onClick={() => changeView('Home') }>Home</a>
        <a ng-class="bg-cyan-400 flex justify-center items-center" href="/login" onClick={() => changeView('Login') }>Login</a>
        <a ng-class="bg-cyan-500 flex justify-center items-center" href="/about-us" onClick={() => changeView('About us') }>About Us</a>
      </div>

      <p ng-class="text-3xl text-center my-6 mt-16 font-bold">View:</p>

      <div ng-class="text-center">
        <p ng-class="text-xl">hola</p>
        <div>
          <p ng-class="text-xs mt-7">Click Me!</p>
          <button ng-class="h-12 px-9  bg-sky-300 rounded-md active:shadow-inner shadow-lg" onClick={() => {headerTitle = 'hola'} }>Change Header Title To hola</button>
        </div>
      </div>

    </div>
  );
}

export default App;