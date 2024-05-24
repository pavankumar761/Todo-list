import React from 'react'
import { BrowserRouter , Routes, Route} from "react-router-dom"

import HomePage from "./Pages/HomePage/HomePage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import SignupPage from "./Pages/SignupPage/SignupPage";

import './App.css';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
        <Route exact path='/' element={<HomePage/>} />
        <Route exact path='/login' element= {<LoginPage/>}/>
        <Route exact path='/signup' element={<SignupPage/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
