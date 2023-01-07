import { useParams, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "./Vistas.css"
import VistasStyle from '../recursos.module.css'

function App() {
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


  const mostrarReporte = () =>{
    var mes = document.getElementById("mesaux").value;
    localStorage.setItem("mes", mes)
    navigate("/vistareportes")
    
  }

  return (
    <div className="App">
      <header className="App-header">
      <h1></h1>
      <br />
      <br />
      <div className="menu2">
        <div className={VistasStyle.select}>
        <select id="mesaux" onChange={cambiarMes}>
          <option defaultValue="0">Elija el mes que quiere revisar</option>
          <option value="1" >Enero</option>
          <option value="2" >Febrero</option>
          <option value="3" >Marzo</option>
          <option value="4" >Abril</option>
          <option value="5" >Mayo</option>
          <option value="6" >Junio</option>
          <option value="7" >Julio</option>
          <option value="8">Agosto</option>
          <option value="9">Septiembre</option>
          <option value="10" >Octubre</option>
          <option value="11" >Noviembre</option>
          <option value="12" >Diciembre</option>
        </select>
        </div>
        {/* <p>Reportes de:</p>
        <p> {mes} </p> */}
        <button id="mesaux"onClick={mostrarReporte} className={VistasStyle.button1}>Ir</button>
        </div>
        


      {/* <div className="porCobrar">
      <ReporteC props = {mes}/>
       <ReporteCobrar/> 
      <ReportePagar/>
      </div> */}


      <hr/> <hr/> <hr/>
      </header>
    </div>
  );
}

export default App;
