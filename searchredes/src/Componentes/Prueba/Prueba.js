import React, { useEffect, useState } from 'react';
import axios from 'axios'



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
    const [data, setData] = useState([]);
    // const data = useGetdata()
    useEffect(() => {


        axios.get(`https://guarded-sierra-66845.herokuapp.com/buscar/tw-test/gioja`, {
            //   method: 'GET',
            //   headers: {
            //       "dataType": "json",
            //      "Accept": "application/json",
            //   }
        })
            .then(response => response.data)
            .then(datos => {
                console.log(datos)
                setData(datos);

                // console.log(datos[0].name)

            }).catch((err) => {
                console.log(err);

            })



    }, []);
    return (
        <div style={{ height: '1200px' }}>

                     {data.palabrasClaves ? (
                            data.palabrasClaves && data.palabrasClaves.map((item) => (
                               <div>
                                   <p>{item.palabra}</p>
                               </div>
                            ))


                        ) : (
                            <p>no hay nada</p>
                        )}
        </div>


    )
}