import axios from 'axios';
import React, { Component } from "react";
import "./Register.css"
import RegisterStyle from "../recursos.module.css";
import {
  BrowserRouter as Router,
  NavLink,
  useNavigate
} from "react-router-dom";
import LRegister from './1register.png'
var token = localStorage.getItem("token");

const Register = () => {
  var auxuser = '';
  var auxpass = '';
  var id = 0;
  var auxtoken = ''
  const navigate = useNavigate()

  const createUser = () => {
    auxpass = document.getElementById('pass').value
    auxuser = document.getElementById('user').value
    var postData = {
      username: auxuser,
      password: auxpass,
      password2: document.getElementById('pass2').value,
      email: document.getElementById('correo').value,
      first_name: document.getElementById('nombre').value,
      last_name: document.getElementById('apellido').value
    }
    axios
      .post("http://localhost:8000/api/v1/register/", postData, {
        Headers: { 'Content-Type': 'application/json', },
      })
      .then(response => {
        console.log(response.data);
        
        obtenerID()
      }).catch(
        (error) => {
          console.log(error.response.data);
          alert('Error' + error.response.data)
        }
      )
  }

  const obtenerID = () => {
    var postData = {
      username: auxuser,
      password: auxpass,
    }

    axios
      .post("http://localhost:8000/api/v1/login/", postData, {
        Headers: { 'Content-Type': 'application/json', },
      })
      .then(response => {
        // localStorage.setItem('id', response.data.user_id)
        // localStorage.setItem('auxtoken', response.data.token)
        id = response.data.user_id
        auxtoken = response.data.token
        //navigate("/rol")
        rol()

      }).catch(
        (error) => {
          console.log(error.response.data);
        }

      )
  }
  const rol = () => {
    var postData = {
      id_user: id,
      rol: document.getElementById('puesto').value,
    }
    console.log(auxtoken)
    axios
      .post("http://localhost:8000/api/v1/rol/", postData, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: "Token " + auxtoken,
        },
      })
      .then(response => {
        alert('Usuario creado.')
        navigate('/Home')
      }).catch(
        (error) => {
          console.log(error.response.data);
        }

      )
  }



  return (
    <div className="App">

      <header className="App-header">
        <div className='form2'>
          <img src={LRegister} className="logoRegister" />
          <div className={RegisterStyle.inputContainer}>
            <input id='user' className={RegisterStyle.input} placeholder=" " autocomplete="off" type="text" />
            <div className={RegisterStyle.cut2}></div>
            <label for='user' className={RegisterStyle.placeholder}>
              Usuario
            </label>
          </div>

          <div className={RegisterStyle.inputContainer}>
            <input id='pass' className={RegisterStyle.input} placeholder=" " autocomplete="off" type="password" />
            <div className={RegisterStyle.cut2}></div>
            <label for='pass' className={RegisterStyle.placeholder}>
              Contraseña
            </label>
          </div>

          <div className={RegisterStyle.inputContainer}>
            <input id='pass2' className={RegisterStyle.input} placeholder=" " autocomplete="off" type="password" />
            <div className={RegisterStyle.cut2}></div>
            <label for='pass2' className={RegisterStyle.placeholder}>
              Confirmar contraseña
            </label>
          </div>

          <div className={RegisterStyle.inputContainer}>
            <input id='correo' className={RegisterStyle.input} placeholder=" " autocomplete="off" type="text" />
            <div className={RegisterStyle.cut2}></div>
            <label for='correo' className={RegisterStyle.placeholder}>
              Correo
            </label>
          </div>

          <div className={RegisterStyle.inputContainer}>
            <input id='nombre' className={RegisterStyle.input} placeholder=" " autocomplete="off" type="text" />
            <div className={RegisterStyle.cut2}></div>
            <label for='nombre' className={RegisterStyle.placeholder}>
              Nombre
            </label>
          </div>

          <div className={RegisterStyle.inputContainer}>
            <input id='apellido' className={RegisterStyle.input} placeholder=" " autocomplete="off" type="text" />
            <div className={RegisterStyle.cut2}></div>
            <label for='apellido' className={RegisterStyle.placeholder}>
              Apellidos
            </label>
          </div>
          <br />
          <div className={RegisterStyle.select}> 
            <select id="puesto">
              <option defaultValue="0">Seleccione puesto </option>
              <option className='opcion' value="Admin">Puesto de Admin</option>
              <option className='opcion' value="Trabajador">Trabajador</option>
            </select>
          </div>
          <br/>


          <button onClick={createUser} className={RegisterStyle.button1}>Registrar</button>

        </div>
      </header>

    </div>
    /*<div>Register
        <form>
      <div > 

        
        <input class="input is-info" type="text" autocomplete="off" id = 'user' required />
        <label>Usuario</label> 
      </div>
        <br/>
      <div >
        <input class="input is-info" type="text" autocomplete="off" id = 'pass' required />
        <label>Contrasenia</label>
      </div>
        <br/>
      <div >   
        <input class="input is-info" type="text" autocomplete="off" id = 'pass2' required />
        <label>Contrasenia (de nuevo)</label>
      </div> 
        <br/>
      <div >   
        <input class="input is-info" type="text" autocomplete="off" id = 'correo' required />
        <label>Correo</label>
      </div> 
        <br/>  
      <div >    
        <input class="input is-info" type="text" autocomplete="off" id = 'nombre' required />
        <label>Nombre</label>
      </div>
        <br/>
      <div >   
        <input class="input is-info" type="text" autocomplete="off" id = 'apellido' required />
        <label>Apellido</label>
      </div>
      <select id="puesto">
              <option defaultValue="0">Seleccione una categoria </option>
                <option value="Admin">Admin</option>
                <option value="Trabajador">Trabajador</option>
        </select>
      
      </form>
      <button onClick={createUser} role="button">Registrarse</button>
</div>*/
  )
}

export default Register