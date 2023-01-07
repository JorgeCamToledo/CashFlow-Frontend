import { useParams, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";

const ReporteFS = () =>{
    const mes = localStorage.getItem("mes")
    const token = localStorage.getItem("token");
    var suma = 0;
    var totalcosto = 0;
    var totalgasto = 0;
    //States para la tabla de cuentas por cobrar
    const [data, setData] = useState([]);
    const [totalCantidad, setTotalCantidad] = useState(0);
    const [costo, setCosto] = useState(0);
    const [gasto, setGasto] = useState(0);

    
  
    const peticionGet = () => {
     
      axios
        .get("http://localhost:8000/api/v1/flujosalida/"+mes, {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Token " + token,
          },
        })
        .then((response) => {
          var size = response.data.length;
          setData(response.data);
          for (var i = 0; i < size; i++) {
            if(response.data[i].categoria === "Costo-Venta"){
             totalcosto = totalcosto + response.data[i].cantidad
            }
            if(response.data[i].categoria === "GAO"){
              totalgasto = totalgasto + response.data[i].cantidad
            }
            suma = suma + response.data[i].cantidad;
          }
          setCosto(totalcosto)
          setGasto(totalgasto)
          setTotalCantidad(suma);
          localStorage.setItem("Salida",suma)
        });
    };
  
    useEffect(() => {
      peticionGet();
    }, []);
  
    return( 
        <div className="App">
        <header className="App-header">
        <h1>Salidas del mes</h1>
        <table className="table">
        <thead>
            <th></th>
            <th>Total del mes</th>
          </thead>
          <tbody>
                <tr>
                  <th>Costos de Venta</th>
                  <td>{costo}</td>
                </tr>
                <tr>
                  <th>Gastos Fijos Operativos</th>
                  <td>{gasto}</td>
                </tr>
            </tbody>
            <tfoot>
              <tr>
                <td> Total Gastos</td>
                <td> ${totalCantidad}</td>
              </tr>
            </tfoot>
          </table>
        </header>
      </div>
    )
}

export default ReporteFS;