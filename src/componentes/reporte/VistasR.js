import { useParams, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import ReporteC from "./ReportesMens/ReporteC";
import ReporteP from "./ReportesMens/ReporteP";
import ReporteB from "./ReportesMens/ReporteB";
import ReporteFE from "./ReportesMens/ReporteFE";
import ReporteFS from "./ReportesMens/ReporteFS";



function App() {
  var entrada =localStorage.getItem("Entrada")
  var salida = localStorage.getItem("Salida")
  var rentabilidad = parseInt(((entrada-salida)/salida)*100)
  const navigate = useNavigate();
  var suma = 0;
  var totalCobrar = 0;
  const token = localStorage.getItem("token");
  //States para la tabla de cuentas por cobrar
  const [data, setData] = useState([]);
  const [totalCobSem1, setTotalCobSem1] = useState(0);
  const [totalCobSem2, setTotalCobSem2] = useState(0);
  const [totalCobSem3, setTotalCobSem3] = useState(0);
  const [totalCobSem4, setTotalCobSem4] = useState(0);

  const [mes, setMes] = useState("0")
  const cambiarMes = (e) => {
    setMes(e.target.value);
    localStorage.removeItem("mesSelecc")
    localStorage.setItem("mesSelecc", mes)
  };


  const mostrarReporte = () => {
    var mes = document.getElementById("mesaux").value;
    localStorage.setItem("mes", mes)
    navigate("/mes")

  }

  return (
    <div className="App">
      <header className="App-header">
            <ReporteC />
            <ReporteP />
            <ReporteFE />
            <ReporteFS />
            <h1> Diferencia</h1>
            <table>
              <thead>
                <th colSpan="2"> Diferencia</th>
              </thead>
              <tbody>
                <tr>
                  <th>Total Utilidad</th>
                  <td>{entrada-salida}</td>
                </tr>
                <tr>
                  <th>Margen de Rentabilidad</th>
                  <td>{rentabilidad}%</td>
                </tr>
              </tbody>
            </table>
            <ReporteB />
        <hr /> <hr /> <hr />
      </header>
    </div>
  );
}

export default App;
