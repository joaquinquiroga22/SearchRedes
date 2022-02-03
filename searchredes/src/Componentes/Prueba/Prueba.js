// import React, { useEffect, useState } from 'react';



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
    // const data = useGetdata()
    return (
        <div style={{ height: '1200px' }}>
       

                {/* {data && data.map((item) => {
                  <div key={item.id[0]} >
                      
                   <ul >
                       <li>{item.address.city}</li>
                   </ul>
                  </div>
                    
                })} */}
            </div>

       
    )
}