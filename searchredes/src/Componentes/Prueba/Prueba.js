import React from 'react';
import { useParams } from 'react-router-dom';
// import data from '../Busqueda/Busqueda.jsx'



// function useGetdata() {
//     const [data, setData] = useState([]);

//     useEffect(() => {
//         fetch("https://jsonplaceholder.typicode.com/users", {
//             //   method: 'GET',
//             //   headers: {
//             //       "dataType": "json",
//             //      "Accept": "application/json",
//             //   }
//         })
//             .then(response => response.json())
//             .then(datos => {
//                 console.log(datos)
//                 setData(datos);
//                 console.log(datos[0].name)

//             })
//     }, []);

//     return data
// }

export default function Prueba() {
    const {data} = useParams();
console.log(data)
    return (
        <div style={{ height: '1200px' }}>

                      {data.listadoTwitter  ? (
                            data.listadoTwitter && data.listadoTwitter.map((item) => (
                               <div>
                                   <h1>{item.cuerpo}</h1>
                                   <h1>{item.name}</h1>

                               </div>
                            ))


                        ) : (
                            <p>no hay nada</p>
                        )} 
        </div>


    )
}