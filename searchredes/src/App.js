import React from "react";

// import logo from './logo.svg';
import './App.css';
import Footer from './Componentes/Footer/Footer.jsx';
import Nav from './Componentes/Nav/Nav.jsx';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Busqueda from '../src/Componentes/Busqueda/Busqueda.jsx'
import Prueba from '../src/Componentes/Prueba/Prueba.js'
import Medios from '../src/Componentes/Medios/Medios.jsx'
// import Prueba from '../src/Componentes/Prueba/Prueba.js'
function App() {
  

  return (
    // <div className="App">

    //   <Nav/>
    // </div>
    <div>
      <Router>

        <Routes>
          <Route  path="/" exact element={<Nav/>} />
           <Route  path="busqueda-medios" exact element={<Medios/>}/> 

          {/* <Route
            path="/"
            exact element = {<Nav/>}
          /> */}

         <Route  path="busqueda" exact element={<Busqueda/>}/>

          {/* <Route path="/Prueba"  element={<Prueba/>} />   */}

        </Routes>
      </Router>
      <Footer />
    </div>

  );
}

export default App;
