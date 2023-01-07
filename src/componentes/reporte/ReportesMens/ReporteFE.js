import { useParams, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";

const ReporteFE = () =>{
  const token = localStorage.getItem("token");
    const mes = localStorage.getItem("mes")
    var sumaFE = 0;
    var totalEfectivos = 0;
    var totalDepositos = 0;
    //States para la tabla de cuentas por cobrar
    const [data, setData] = useState([]);
    const [totalCantidad, setTotalCantidad] = useState(0);
    const [efectivos, setEfectivos] = useState(0);
    const [depositos, setDepositos] = useState(0);

    
  
    const peticionGet = () => {
     
      axios
        .get("http://localhost:8000/api/v1/flujoentrada/"+mes, {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Token " + token,
          },
        })
        .then((response) => {
          var size = response.data.length;
          setData(response.data);
          for (var i = 0; i < size; i++) {
            if(response.data[i].subCategoria === "Efectivo"){
              totalEfectivos = totalEfectivos + response.data[i].cantidad
            }
            if(response.data[i].subCategoria === "Deposito"){
              totalDepositos = totalDepositos + response.data[i].cantidad
            }
            sumaFE = sumaFE + response.data[i].cantidad;
          }
          setEfectivos(totalEfectivos)
          setDepositos(totalDepositos)
          setTotalCantidad(sumaFE);
          localStorage.setItem("Entrada",sumaFE)
        });
    };
  
    useEffect(() => {
      peticionGet();
    }, []);
  
    return( 
        <div className="App">
        <header className="App-header">
          <h1>Ingresos del mes</h1>
        <table className="table">
          <thead>
            <th></th>
            <th>Total del mes</th>
          </thead>
            <tbody>
                <tr>
                  <th>Efectivo</th>
                  <td>{efectivos}</td>
                </tr>
                <tr>
                  <th>Deposito</th>
                  <td>{depositos}</td>
                </tr>
            </tbody>
            <tfoot>
              <tr>
                <td> Total Ingresos</td>
                <td> ${totalCantidad}</td>
              </tr>
            </tfoot>
          </table>
        </header>
      </div>
    )
}

export default ReporteFE;