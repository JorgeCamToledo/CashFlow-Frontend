import React from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import "./Login.css"
import LoginStyle from "../recursos.module.css";
import Llogin from "./1LOGIN.png"

const Login = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user_id')
    const navigate = useNavigate();
    const loginUser = () => {
        var postData = {
            username: document.getElementById('userL').value,
            password: document.getElementById('passL').value,
        }

        axios
            .post("http://localhost:8000/api/v1/login/", postData, {
                Headers: { 'Content-Type': 'application/json', },
            })
            .then(response => {
                localStorage.setItem('token', response.data.token)
                localStorage.setItem('user_id', response.data.user_id)
                //Redireccionamiento a el profile, con el id en la url
                navigate("/Home")
            }).catch(
                (error) => {
                    console.log(error.response.data);
                    alert('Hacen falta datos');
                }

            )
    }
    return (
        <div className="App">

            <header className="App-header">
                <div className='form'>

                    <div className='centrar'>
                        <img src={Llogin} className="logoLogin" alt='login'/>
                        <div className={LoginStyle.inputContainer}>
                            <input id='userL' className={LoginStyle.input} placeholder=" " autocomplete="off" type="text" />
                            <div className={LoginStyle.cut2}></div>
                            <label for='userL' className={LoginStyle.placeholder}>
                                Usuario
                            </label>
                        </div>

                        <div className={LoginStyle.inputContainer}>
                            <input id='passL' className={LoginStyle.input} placeholder=" " autocomplete="off" type="password" />
                            <div className={LoginStyle.cut2}></div>
                            <label for='passL' className={LoginStyle.placeholder}>
                                Contraseña
                            </label>
                        </div>
                        <br />
                        <button onClick={loginUser} className={LoginStyle.button1}>Login</button>
                    </div>
                </div>
            </header>

        </div>
    )
}

export default Login