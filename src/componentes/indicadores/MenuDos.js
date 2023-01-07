import { useParams, useNavigate } from "react-router-dom";
import './indi.css'
import MenuStyle from '../recursos.module.css'

function App() {
  const navigate = useNavigate();

  const redirectRegistro = () => {
    navigate("/registro");
  };
  const redirectReporte = () => {
    navigate("/reporte");
  };
  return (
    <div className="App">
      <header className="App-header">
        <div className="menu">
        <button onClick={redirectRegistro} className={MenuStyle.button1}>Registro de informacion</button>
        <button onClick={redirectReporte}className={MenuStyle.button1}>Reportes</button>
        </div>
      </header>
    </div>
  );
}

export default App;
