import logo from './logo.svg';
import './App.css';
import Footer from './Componentes/Footer/Footer.js';
import Nav from './Componentes/Nav/Nav';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    // <div className="App">
   
    //   <Nav/>
    // </div>
   <Router>
     <Nav/>
     
       <Routes>
           
          


       </Routes>
       <Footer/>
   </Router>
    
  );
}

export default App;
