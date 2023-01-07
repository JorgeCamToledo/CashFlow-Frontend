// import React from 'react'
// import axios from 'axios';

// const AsignarRol = () => {
//     var id = localStorage.getItem("id");
//     var auxtoken = localStorage.getItem("auxtoken");
//     const rol = () => {
//         var postData = {
//             id_user: id,
//             rol: document.getElementById('puesto').value,
//         }
//         console.log(auxtoken)
//         axios
//             .post("http://localhost:8000/api/v1/rol/", postData, {
//                 headers: { 'Content-Type': 'application/json',
//                 Authorization: "Token "+auxtoken,
//              },
//             })
//             .then(response => {
//                 alert('AAAAAAAAAA')
//             }).catch(
//                 (error) => {
//                     console.log(error.response.data);
//                 }

//             )
//     }
//   return (
//     <div>AsignarRol\
//         <select id="puesto">
//                   <option defaultValue="0">Seleccione una categoria </option>
//                     <option value="Admin">Admin</option>
//                     <option value="Trabajador">Trabajador</option>
//             </select>
//             <button onClick={rol} role="button">Registrarse</button>
//     </div>
//   )
// }

// export default AsignarRol