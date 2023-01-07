import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { Modal, ModalBody, ModalFooter, ModelHeader } from "reactstrap";
import SelectInput from "./SelectInput";
import SelectInput2 from "./SelectInput2";
import FlujoStyle from "../recursos.module.css";
import "./Flujo.css";

function App() {
  const token = localStorage.getItem("token");
  const [data, setData] = useState([]);
  const [tipo, setTipo] = useState("Entrada");
  const [cat, setCat] = useState()
  const [categoria, setCategoria] = useState("");
  const cambioRadio = (e) => {
    setTipo(e.target.value);
  };
  const peticionGet_flujo = () => {
    axios
      .get("http://localhost:8000/api/v1/flujo/", {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Token " + token,
        },
      })
      .then((response) => {
        setData(response.data);
      });
  };

  useEffect(() => {
    peticionGet_flujo();
  }, []);

  const consume_create_flujo = () => {
    let entrada = document.getElementById("entrada").checked;
    let salida = document.getElementById("salida").checked;
    let flujo = "";
    if ((entrada === false) & (salida === false)) {
      alert("Elija una opcion");
    } else {
      if (entrada === true) {
        flujo = "Entrada";
      } else {
        flujo = "Salida";
      }
    }

    var postData = {
      descripcion: document.getElementById("descripcion").value,
      tipo_flujo: flujo,
      id_categoria: document.getElementById("categoria").value,
      cantidad: document.getElementById("cantidad").value,
    };
    if (postData.nombre_categoria === "" || postData.clasificacion === "") {
      alert("Todos los campos son requeridos");
    } else {
      axios
        .post("http://localhost:8000/api/v1/flujo/", postData, {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Token " + token,
          },
        })
        .then((response) => {
          console.log(response.data);
          alert("Se ha agregado exitosamente el nuevo flujo");
          window.location.reload();
          // redirectLogin();
        })
        .catch((error) => {
          console.log(error.response.data);
        });
    }
    // alert("Hola login");
  };
  return (
    <div className="App">
      <header className="App-header">
        <div className="containerF">
          <div className="inputS">
            <form>
              <h1>Seleccione el tipo de flujo a ingresar</h1>
              <input
                type="radio"
                name="tipo"
                id="entrada"
                value="Entrada"
                checked={tipo === "Entrada" ? true : false}
                onChange={cambioRadio}
              />
              <label htmlFor="entrada">Entrada</label>
              <br />
              <input
                type="radio"
                name="tipo"
                id="salida"
                value="Salida"
                checked={tipo === "Salida" ? true : false}
                onChange={cambioRadio}
              />
              <label htmlFor="salida">Salida</label>
            </form>
          </div>
          {/* <input id="descripcion" placeholder="Descripcion" /> */}
          <div className={FlujoStyle.inputContainer}>
            <input
              id="descripcion"
              className={FlujoStyle.input}
              type="text"
              placeholder=" "
              autocomplete="off"
            />
            <div className={FlujoStyle.cut}></div>
            <label for="descripcion" className={FlujoStyle.placeholder}>
              Descripcion
            </label>
          </div>
          <br />
          <div className={FlujoStyle.inputContainer}>
            <input
              id="cantidad"
              className={FlujoStyle.input}
              type="text"
              placeholder=" "
              autocomplete="off"
            />
            <div className={FlujoStyle.cut}></div>
            <label for="cantidad" className={FlujoStyle.placeholder}>
              Cantidad
            </label>
          </div>
          <br />
          {tipo === "Entrada" && (
            <SelectInput
              handleChange={(e) => {
                setCategoria(e.target.value);
              }}
            />
          )}
          {tipo === "Salida" && (
            <SelectInput2
              handleChange={(e) => {
                setCategoria(e.target.value);
              }}
            />
          )}
          <button onClick={consume_create_flujo} className={FlujoStyle.button1}>
            Guardar/Editar
          </button>
          <br />
          <br />
          <br />
          </div>
          <div>
          <table className="table" id="TFlujo">
            <thead>
              <tr>
                <th> PK </th>
                <th> Fecha </th>
                <th> Monto </th>
                <th> Descripcion </th>
                <th> Categoria </th>
                <th> SubCategoria </th>
              </tr>
            </thead>
            <tbody>
              {data.map((flujo) => (
                <tr key={flujo.pk}>
                  <td> {flujo.pk}</td>
                  <td> {flujo.fecha}</td>
                  <td> ${flujo.cantidad}</td>
                  <td> {flujo.descripcion}</td>
                  <td> {flujo.categoria}</td>
                  <td> {flujo.subCategoria}</td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
        
      </header>
    </div>
  );
}

export default App;
