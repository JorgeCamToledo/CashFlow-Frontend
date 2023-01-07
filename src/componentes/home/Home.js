import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import HomeStyle from '../recursos.module.css'
import "./Home.css"

function App() {
  var id = localStorage.getItem("user_id");
  var token = localStorage.getItem('token')
  const navigate = useNavigate();

  const redirectCategorias = () => {
    navigate("/categoria")
  }

  const redirectFlujo = () => {
    navigate("/flujo")
  }

  const redirectIndicadores = () => {
    navigate("/indicadores")
  }

  const redirectRegistro = () =>{
    axios.
      get('http://localhost:8000/api/v1/rol/'+id,{
        headers: { 'Content-Type': 'application/json',
        Authorization: "Token "+token,}
     }).then(response =>{
       if(response.data.rol === 'Admin'){
         navigate('/userregister')
       }else{
        alert('No hagas eso.')
       }
     })
    //navigate("/userregister")
  }
  return (
    <div className="App">
      <header className="App-header">
      <div className='form'>
        <h1>CashFlow</h1> <p>¡Bienvenido! Elija una opción:</p>
        <button onClick={redirectCategorias} className={HomeStyle.button1}>Categorias</button>
        <button onClick={redirectFlujo} className={HomeStyle.button1} >Flujo de efectivo</button>
        <button onClick={redirectIndicadores} className={HomeStyle.button1}>Indicadores de dinero</button>
        <button onClick={redirectRegistro} className={HomeStyle.button1}>Registrar nuevo miembro</button>
      </div>
      </header>
      
    </div>
  );
}

export default App;
