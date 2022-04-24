import React, { useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, RootState } from "./state";
import { Link } from "react-router-dom";

function App() {
  
  const dispatch = useDispatch();

  const { changeView } = bindActionCreators(actionCreators, dispatch);
  const viewName = useSelector((state: RootState) => state.view);
  
  const [headerTitle, setHeaderTitle] = useState("Header");

  return (
    <div className="App">
      <div className="bg-gradient-to-r from-cyan-300 to-blue-500 h-16 flex items-center shadow-md">
        <p className="text-2xl mx-8 font-semibold">{ headerTitle }</p>
      </div>

      <p className="text-3xl text-center my-4 text font-bold">Select View:</p>

      <div className="grid grid-cols-3 text-center w-80 h-8 mx-auto">
        <Link to="/"
          className="bg-cyan-300 flex justify-center items-center"
          onClick={() => changeView("Home")}
        >
          Home
        </Link>
        <Link to="/login"
          className="bg-cyan-400 flex justify-center items-center"
          onClick={() => changeView("Login")}
        >
          Login
        </Link>
        <Link to="/about-us"
          className="bg-cyan-500 flex justify-center items-center"
          onClick={() => changeView("About us")}
        >
          About Us
        </Link>
      </div>

      <p className="text-3xl text-center my-6 mt-16 font-bold">View:</p>

      <div className="text-center">
        <p className="text-xl">{viewName}</p>
        <div>
          <p className="text-xs mt-7">Click Me!</p>
          <button
            className="h-12 px-9  bg-sky-300 rounded-md active:shadow-inner shadow-lg"
            onClick={() => setHeaderTitle(viewName)}
          >
            Change Header Title To {viewName}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
