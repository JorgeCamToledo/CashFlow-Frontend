import React from 'react';
import Categorias from './componentes/categorias/Categorias'
import FlujosEfectivo from './componentes/flujosEfectivo/FlujoEfectivo'
import Indicadores from './componentes/indicadores/Indicadores'
import MenuDos from './componentes/indicadores/MenuDos'
import Home from './componentes/home/Home'
import SelecMes from './componentes/reporte/SelecMes'
import VistasR from './componentes/reporte/VistasR'
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Routes} from 'react-router-dom'; 
import './App.css';
import reportWebVitals from './reportWebVitals';
import Login from './componentes/Login/Login';
import Register from './componentes/Register/Register';
import AsignarRol from './componentes/Register/AsignarRol';
import ReporteC from './componentes/reporte/ReportesMens/ReporteC';

ReactDOM.render(
  <React.StrictMode>
     <BrowserRouter>
  <Routes>
  <Route path ='/' element={<Login/>} />
    <Route path ='/Home' element={<Home/>} />
     <Route path ='/categoria' element={<Categorias/>} />
     <Route path ='/flujo' element={<FlujosEfectivo/>} />
     <Route path ='/indicadores' element={<MenuDos/>} />
     <Route path ='/registro' element={<Indicadores/>} />
     <Route path ='/reporte' element={<SelecMes/>} />
     <Route path ='/userregister' element={<Register/>} />
     <Route path ='/rol' element={<AsignarRol/>} />
     <Route path ='/vistareportes' element={<VistasR/>} />
     <Route path ='/mes' element={<ReporteC/>} />
  </Routes>

  </BrowserRouter>,
    <br/>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
