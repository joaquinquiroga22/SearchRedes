import React from 'react';
import { useState, useEffect } from 'react';
// import data from '../Busqueda/Busqueda.jsx'
import axios from 'axios';










export default function Prueba() {
    const [data, setData] = useState();

useEffect(() => {
    fetch(`https://serpapi.com/search.json?engine=google&q=fmi&api_key=33b6e2bf2e3247b2d1d6175812307ad982d42e14c0d19a53cbd4323abc182385`, {
        mode: 'no-cors',
        headers:{
           
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        }
    })
    
    // .then(response => response.data)
    .then(datos => {
        // console.log(datos)
        setData(datos);
    }).catch((err) => {
        console.log(err);
    })
}, []);
console.log(data)
    return (
        <div style={{ height: '1200px' }}>
            <h1>hola</h1>

                      {/* {data.listadoTwitter  ? (
                            data.listadoTwitter && data.listadoTwitter.map((item) => (
                               <div>
                                   <h1>{item.cuerpo}</h1>
                                   <h1>{item.name}</h1>

                               </div>
                            ))


                        ) : (
                            <p>no hay nada</p>
                        )}  */}
        </div>


    )
}