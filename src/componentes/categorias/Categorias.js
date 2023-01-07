import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { makeStyles } from '@material-ui/core/styles';
import { Modal, Button, TextField } from '@material-ui/core';
import CatStyle from "../recursos.module.css";
import SStyle from '../recursos.module.css';
import "./Categorias.css";
const useStyles = makeStyles((theme) => ({
  modal: {
    position: 'absolute',
    width: 400,
    backgroundColor: '#15172b',
    borderRadius: '20px',
    padding: theme.spacing(2, 4, 3),
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color:'white'
  },
  iconos: {
    cursor: 'pointer'
  },
  inputMaterial: {
    width: '100%'
  }
}));
function App() {
  const token = localStorage.getItem("token");
  const styles = useStyles();
  const [modalEditar, setModalEditar] = useState(false);
  const [data, setData] = useState([]);

  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState({
    categoria: '',
    subCategoria: ''
  })

  const abrirCerrarModalEditar = () => {
    setModalEditar(!modalEditar);
  }

  const seleccionarCategoria = (categoria, caso) => {
    localStorage.setItem("categoriaId", categoria.pk);
    localStorage.setItem("categoria", categoria.categoria);
    localStorage.setItem("subCategoria", categoria.subCategoria);
    setCategoriaSeleccionada(categoria);
    abrirCerrarModalEditar()
  }


  const peticionGet = () => {
    axios
      .get("http://localhost:8000/api/v1/categoria/", {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Token " + token,
        },
      })
      .then((response) => {
        setData(response.data)
      });
  }

  useEffect(() => {
    peticionGet();
  }, [])

  const peticionPost = () => {
    var tipoflu = ""
    var cat = document.getElementById("categoria").value
    if (cat === "Ingreso") {
      tipoflu = "Entrada"
    }
    else {
      tipoflu = "Salida"
    }
    var postData = {
      categoria: cat,
      tipo: tipoflu,
      subCategoria: document.getElementById("subCategoria").value
    };

    if (postData.categoria === "" || postData.subCategoria === "") {
      alert("Todos los campos son requeridos");
    } else {
      axios
        .post("http://localhost:8000/api/v1/categoria/", postData, {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Token " + token,
          },
        })
        .then((response) => {
          console.log(response.data);
          alert("Se ha agregado exitosamente la categoria");
          window.location.reload()
          // redirectLogin();
        })
        .catch((error) => {
          console.log(error.response.data);
        });
    }
    // alert("Hola login");
  };

  const peticionPut = () => {
    var tipoflu = ""
    var cat = document.getElementById("categoriaEdit").value
    if (cat === "Ingreso") {
      tipoflu = "Entrada"
    }
    else {
      tipoflu = "Salida"
    }
    var postData = {
      categoria: cat,
      tipo: tipoflu,
      subCategoria: document.getElementById("subCategoriaEdit").value
    };

    if (postData.categoria === "" || postData.subCategoria === "") {
      alert("Todos los campos son requeridos");
    } else {
      axios
        .put("http://localhost:8000/api/v1/categoria/" + localStorage.getItem("categoriaId"), postData, {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Token " + token,
          },
        })
        .then((response) => {
          console.log(response.data);
          alert("Se ha agregado exitosamente la categoria");
          window.location.reload()
          // redirectLogin();
        })
        .catch((error) => {
          console.log(error.response.data);
        });
    }
  };

  const bodyEditar = (
    <div className={styles.modal}>
      <h3>Editar categoría</h3>
      <div className="cDer">
        <div className={CatStyle.inputContainer}>
          <div className={SStyle.select}>
            <select id="categoriaEdit">
              <option defaultValue="0">Seleccione una categoria </option>
              <option value="GAO">GAO</option>
              <option value="Costo-Venta">Costo-Venta</option>
              <option value="Ingreso">Ingreso</option>
            </select>
          </div>
        </div>
        <br />

        <div className={CatStyle.inputContainer}>
          <input
            id="subCategoriaEdit"
            className={CatStyle.input}
            type="text"
            placeholder=" "
            autocomplete="off"
          />
          <div className={CatStyle.cut2}></div>
          <label for="nombre" className={CatStyle.placeholder}>
            Nombre
          </label>
        </div>
        <br />
        <button
          className={CatStyle.button1}
          onClick={peticionPut}
        >
          Guardar
        </button>
      </div>
    </div>

  )

  return (
    <div className="App">
      <header className="App-header">
        <div className="container2">
          <div className="cDer">
            <div className={CatStyle.inputContainer}>
              <div className={SStyle.select}>
                <select id="categoria">
                  <option defaultValue="0">Categoria </option>
                  <option className='opcion' value="GAO">GAO</option>
                  <option className='opcion' value="Costo-Venta">Costo-Venta</option>
                  <option className='opcion' value="Ingreso">Ingreso</option>
                </select>
              </div>
            </div>
            <br />

            <div className={CatStyle.inputContainer}>
              <input
                id="subCategoria"
                className={CatStyle.input}
                type="text"
                placeholder=" " autocomplete="off"
              />
              <div className={CatStyle.cut}></div>
              <label for="nombre" className={CatStyle.placeholder}>
                Nombre
              </label>
            </div>
            <br />
            <button
              className={CatStyle.button1}
              onClick={peticionPost}
            >
              Guardar
            </button>
          </div>

          <div className="cIzq">
            <table className="table" id="TCat">
              <thead>
                <tr id="bar">
                  <th> PK </th>
                  <th> Categoria</th>
                  <th> SubCategoria </th>
                  <th> Acciones </th>
                </tr>
              </thead>
              <tbody>
                {data.map(categoria => (
                  <tr key={categoria.pk}>
                    <td>{categoria.pk}</td>
                    <td>{categoria.categoria}</td>
                    <td>{categoria.subCategoria}</td>
                    <td>
                      <button className=" btn btn-primary" onClick={() => seleccionarCategoria(categoria)}>
                        <FontAwesomeIcon icon={faEdit} />
                      </button>
                    </td>
                  </tr>
                ))}

              </tbody>
            </table>
          </div>
        </div>
      </header>
      <Modal
        open={modalEditar}
        onClose={abrirCerrarModalEditar}>
        {bodyEditar}
      </Modal>
    </div>
  );
}

export default App;
