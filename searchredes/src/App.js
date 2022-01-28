import React, { useState } from "react";

import logo from './logo.svg';
import './App.css';
import Footer from './Componentes/Footer/Footer.jsx';
import Nav from './Componentes/Nav/Nav.jsx';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Busqueda from '../src/Componentes/Busqueda/Busqueda.jsx'

function App() {
  const [renderAddUser, setRenderAddUser] = useState(false);

  return (
    // <div className="App">

    //   <Nav/>
    // </div>
    <div>
      <Router>

        <Routes>
          <Route exact path="/" exact element={<Nav/>} />
          {/* <Route
            path="/"
            exact element = {<Nav/>}
          /> */}
         <Route exact path="busqueda" exact element={<Busqueda/>}/>
         
          {/* <Route exact path="/busqueda" component={<Busqueda/>} /> */}

        </Routes>
      </Router>
      <Footer />
    </div>

  );
}

export default App;
