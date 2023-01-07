import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import IndiaStyle from '../recursos.module.css'
import { useState } from "react";

function App() {
  const token = localStorage.getItem("token");
  const[data, setData] = useState(0)
  var mes = "";


  const create_Indicador_cobrar = () => {
    var sem1 = 0
    var sem2 = 0
    var sem3 = 0
    var sem4 = 0
    var sem5 = 0
    var semana = document.getElementById("semana_cobra").value
    if(semana === "1"){
      sem1 = document.getElementById("monto_cobra").value
      sem2 = document.getElementById("monto_cobra").value
      sem3 = document.getElementById("monto_cobra").value
      sem4 = document.getElementById("monto_cobra").value
      sem5 = document.getElementById("monto_cobra").value
    }
    if(semana === "2"){
      sem2 = document.getElementById("monto_cobra").value
      sem3 = document.getElementById("monto_cobra").value
      sem4 = document.getElementById("monto_cobra").value
      sem5 = document.getElementById("monto_cobra").value
    }
    if(semana === "3"){
      sem3 = document.getElementById("monto_cobra").value
      sem4 = document.getElementById("monto_cobra").value
      sem5 = document.getElementById("monto_cobra").value
    }
    if(semana === "4"){
      sem4 = document.getElementById("monto_cobra").value
      sem5 = document.getElementById("monto_cobra").value
    }
    if(semana === "5"){
      sem5 = document.getElementById("monto_cobra").value
    }
    var postData = {
      indicador: "Cobrar",
      numSemana: semana,
      Razon: document.getElementById("razon_cobra").value,
      monto: document.getElementById("monto_cobra").value,
      semana1: parseFloat(sem1),
      semana2: parseFloat(sem2),
      semana3: parseFloat(sem3),
      semana4: parseFloat(sem4),
      semana5: parseFloat(sem5),
    };
    if (postData.numSemana === "" || postData.Razon === "" || postData.monto === "") {
      alert("Todos los campos son requeridos");
    } else {
      axios
        .post("http://localhost:8000/api/v1/indicadores/", postData, {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Token "+ token,
          },
        })
        .then((response) => {
          mes = response.data.only_month;
          console.log(mes);
          alert("Se ha agregado exitosamente la cuenta por cobrar");
          // redirectLogin();
        })
        .catch((error) => {
          console.log(error.response.data)
          peticionGet()
        });
    }
    // alert("Hola login");
  };

  const peticionGet =  () =>{
    var razon = document.getElementById("razon_cobra").value
    var razonarr = []
    axios
   .get("http://localhost:8000/api/v1/indicadores/", {
     headers: {
       "Content-Type": "application/json",
       Authorization: "Token "+ token,
     },
   })
   .then((response) => {
    var size = response.data.length;
    for (var i = 0; i < size ; i++) {
       if(razon === response.data[i].Razon){
         razonarr = response.data[i]
        console.log(razonarr)
       }
    }
    setData(razonarr)
     peticionPut()
   });
 } 

 const peticionPut = () => {
  var sem1 = data.semana1
  var sem2 = data.semana2
  var sem3 = data.semana3
  var sem4 = data.semana4
  var sem5 = data.semana5
  var semana = document.getElementById("semana_cobra").value
  if(semana === "1"){
    sem1 = document.getElementById("monto_cobra").value
    sem2 = document.getElementById("monto_cobra").value
    sem3 = document.getElementById("monto_cobra").value
    sem4 = document.getElementById("monto_cobra").value
    sem5 = document.getElementById("monto_cobra").value
  }
  if(semana === "2"){
    sem2 = document.getElementById("monto_cobra").value
    sem3 = document.getElementById("monto_cobra").value
    sem4 = document.getElementById("monto_cobra").value
    sem5 = document.getElementById("monto_cobra").value
  }
  if(semana === "3"){
    sem3 = document.getElementById("monto_cobra").value
    sem4 = document.getElementById("monto_cobra").value
    sem5 = document.getElementById("monto_cobra").value
  }
  if(semana === "4"){
    sem4 = document.getElementById("monto_cobra").value
    sem5 = document.getElementById("monto_cobra").value
  }
  if(semana === "5"){
    sem5 = document.getElementById("monto_cobra").value
  }
  var postData = {
    indicador: "Cobrar",
    numSemana: semana,
    Razon: document.getElementById("razon_cobra").value,
    monto: document.getElementById("monto_cobra").value,
    semana1: parseFloat(sem1),
    semana2: parseFloat(sem2),
    semana3: parseFloat(sem3),
    semana4: parseFloat(sem4),
    semana5: parseFloat(sem5),
  };
    axios
      .put("http://localhost:8000/api/v1/indicadores/"+data.pk, postData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Token "+ token,
        },
      })
      .then((response) => {
        console.log(response.data);
        alert("Se ha agregado el cobro pendiente");
        window.location.reload()
        // redirectLogin();
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  
};
  


  //Cuentas por pagar
  //Aqui empieza
  const create_Indicador_pagar = () => {
    var sem1 = 0
    var sem2 = 0
    var sem3 = 0
    var sem4 = 0
    var sem5 = 0
    var semana = document.getElementById("semana_pagar").value
    if(semana === "1"){
      sem1 = document.getElementById("monto_pagar").value
      sem2 = document.getElementById("monto_pagar").value
      sem3 = document.getElementById("monto_pagar").value
      sem4 = document.getElementById("monto_pagar").value
      sem5 = document.getElementById("monto_pagar").value
    }
    if(semana === "2"){
      sem2 = document.getElementById("monto_pagar").value
      sem3 = document.getElementById("monto_pagar").value
      sem4 = document.getElementById("monto_pagar").value
      sem5 = document.getElementById("monto_pagar").value
    }
    if(semana === "3"){
      sem3 = document.getElementById("monto_pagar").value
      sem4 = document.getElementById("monto_pagar").value
      sem5 = document.getElementById("monto_pagar").value
    }
    if(semana === "4"){
      sem4 = document.getElementById("monto_pagar").value
      sem5 = document.getElementById("monto_pagar").value
    }
    if(semana === "5"){
      sem5 = document.getElementById("monto_pagar").value
    }


    var postData = {
      indicador: "Pagar",
      numSemana: semana,
      Razon: document.getElementById("razon_pagar").value,
      monto: document.getElementById("monto_pagar").value,
      semana1: parseFloat(sem1),
      semana2: parseFloat(sem2),
      semana3: parseFloat(sem3),
      semana4: parseFloat(sem4),
      semana5: parseFloat(sem5),
    };
    if (postData.numSemana === "" || postData.Razon === "" || postData.monto === "") {
      alert("Todos los campos son requeridos");
    } else {
      axios
        .post("http://localhost:8000/api/v1/indicadores/", postData, {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Token "+ token,
          },
        })
        .then((response) => {
          mes = response.data.only_month;
          console.log(response.data);
          console.log(mes);
          alert("Se ha agregado exitosamente la cuenta por pagar");
          // redirectLogin();
        })
        .catch((error) => {
          console.log(error.response.data)
          peticionGetPagar()
        });
    }
    // alert("Hola login");
  };

  const peticionGetPagar =  () =>{
    var razon = document.getElementById("razon_pagar").value
    var razonarr = []
    axios
   .get("http://localhost:8000/api/v1/indicadores/", {
     headers: {
       "Content-Type": "application/json",
       Authorization: "Token "+ token,
     },
   })
   .then((response) => {
    var size = response.data.length;
    for (var i = 0; i < size ; i++) {
       if(razon === response.data[i].Razon){
         razonarr = response.data[i]
        console.log(razonarr)
       }
    }
    setData(razonarr)
    peticionPutPagar()
   });
 } 

 const peticionPutPagar = () => {
  var sem1 = data.semana1
  var sem2 = data.semana2
  var sem3 = data.semana3
  var sem4 = data.semana4
  var sem5 = data.semana5
  var semana = document.getElementById("semana_pagar").value
  if(semana === "1"){
    sem1 = document.getElementById("monto_pagar").value
    sem2 = document.getElementById("monto_pagar").value
    sem3 = document.getElementById("monto_pagar").value
    sem4 = document.getElementById("monto_pagar").value
    sem5 = document.getElementById("monto_pagar").value
  }
  if(semana === "2"){
    sem2 = document.getElementById("monto_pagar").value
    sem3 = document.getElementById("monto_pagar").value
    sem4 = document.getElementById("monto_pagar").value
    sem5 = document.getElementById("monto_pagar").value
  }
  if(semana === "3"){
    sem3 = document.getElementById("monto_pagar").value
    sem4 = document.getElementById("monto_pagar").value
    sem5 = document.getElementById("monto_pagar").value
  }
  if(semana === "4"){
    sem4 = document.getElementById("monto_pagar").value
    sem5 = document.getElementById("monto_pagar").value
  }
  if(semana === "5"){
    sem5 = document.getElementById("monto_pagar").value
  }
  var postData = {
    indicador: "Pagar",
    numSemana: semana,
    Razon: document.getElementById("razon_pagar").value,
    monto: document.getElementById("monto_pagar").value,
    semana1: parseFloat(sem1),
    semana2: parseFloat(sem2),
    semana3: parseFloat(sem3),
    semana4: parseFloat(sem4),
    semana5: parseFloat(sem5),
  };
    axios
      .put("http://localhost:8000/api/v1/indicadores/"+data.pk, postData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Token "+ token,
        },
      })
      .then((response) => {
        console.log(response.data);
        alert("Se ha agregado el pago ");
        window.location.reload()
        // redirectLogin();
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  
};



 

  //Cuentas por  Banco
  //Aqui empieza
  const create_Indicador_Banco = () => {
    var sem1 = 0
    var sem2 = 0
    var sem3 = 0
    var sem4 = 0
    var sem5 = 0
    var semana = document.getElementById("semana_banco").value
    if(semana === "1"){
      sem1 = document.getElementById("monto_banco").value
      sem2 = document.getElementById("monto_banco").value
      sem3 = document.getElementById("monto_banco").value
      sem4 = document.getElementById("monto_banco").value
      sem5 = document.getElementById("monto_banco").value
    }
    if(semana === "2"){
      sem2 = document.getElementById("monto_banco").value
      sem3 = document.getElementById("monto_banco").value
      sem4 = document.getElementById("monto_banco").value
      sem5 = document.getElementById("monto_banco").value
    }
    if(semana === "3"){
      sem3 = document.getElementById("monto_banco").value
      sem4 = document.getElementById("monto_banco").value
      sem5 = document.getElementById("monto_banco").value
    }
    if(semana === "4"){
      sem4 = document.getElementById("monto_banco").value
      sem5 = document.getElementById("monto_banco").value
    }
    if(semana === "5"){
      sem5 = document.getElementById("monto_banco").value
    }
    var postData = {
      indicador: "Banco",
      numSemana: semana,
      Razon: document.getElementById("razon_banco").value,
      monto: document.getElementById("monto_banco").value,
      semana1: parseFloat(sem1),
      semana2: parseFloat(sem2),
      semana3: parseFloat(sem3),
      semana4: parseFloat(sem4),
      semana5: parseFloat(sem5),
    };
    if (postData.numSemana === "" || postData.Razon === "" || postData.monto === "") {
      alert("Todos los campos son requeridos");
    } else {
      axios
        .post("http://localhost:8000/api/v1/indicadores/", postData, {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Token "+ token,
          },
        })
        .then((response) => {
          console.log(response.data);
          mes = response.data.only_month;
          console.log(response.data);
          console.log(mes);
          alert("Se ha agregado exitosamente la cuenta pendiente al banco");
          // redirectLogin();
        })
        .catch((error) => {
          console.log(error.response.data);
          peticionGetBanco()
         
        });
    }
    // alert("Hola login");
  };

  

  const peticionGetBanco =  () =>{
    var razon = document.getElementById("razon_banco").value
    var razonarr = []
    axios
   .get("http://localhost:8000/api/v1/indicadores/", {
     headers: {
       "Content-Type": "application/json",
       Authorization: "Token "+ token,
     },
   })
   .then((response) => {
    var size = response.data.length;
    for (var i = 0; i < size ; i++) {
       if(razon === response.data[i].Razon){
         razonarr = response.data[i]
        console.log(razonarr)
       }
    }
    setData(razonarr)
    peticionPutBanco()
   });
 } 

 const peticionPutBanco= () => {
  var sem1 = data.semana1
  var sem2 = data.semana2
  var sem3 = data.semana3
  var sem4 = data.semana4
  var sem5 = data.semana5
  var semana = document.getElementById("semana_banco").value
  if(semana === "1"){
    sem1 = document.getElementById("monto_banco").value
    sem2 = document.getElementById("monto_banco").value
    sem3 = document.getElementById("monto_banco").value
    sem4 = document.getElementById("monto_banco").value
    sem5 = document.getElementById("monto_banco").value
  }
  if(semana === "2"){
    sem2 = document.getElementById("monto_banco").value
    sem3 = document.getElementById("monto_banco").value
    sem4 = document.getElementById("monto_banco").value
    sem5 = document.getElementById("monto_banco").value
  }
  if(semana === "3"){
    sem3 = document.getElementById("monto_banco").value
    sem4 = document.getElementById("monto_banco").value
    sem5 = document.getElementById("monto_banco").value
  }
  if(semana === "4"){
    sem4 = document.getElementById("monto_banco").value
    sem5 = document.getElementById("monto_banco").value
  }
  var postData = {
    indicador: "Banco",
    numSemana: semana,
    Razon: document.getElementById("razon_banco").value,
    monto: document.getElementById("monto_banco").value,
    semana1: parseFloat(sem1),
    semana2: parseFloat(sem2),
    semana3: parseFloat(sem3),
    semana4: parseFloat(sem4),
    semana5: parseFloat(sem5),
  };
    axios
      .put("http://localhost:8000/api/v1/indicadores/"+data.pk, postData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Token "+ token,
        },
      })
      .then((response) => {
        console.log(response.data);
        alert("Se ha agregado el banco ");
        window.location.reload()
        // redirectLogin();
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  
};


  return (
    <div className="App">
      <div className="containerI">

        <header className="App-header">
          <h1> Cuentas por cobrar</h1>
          <div className={IndiaStyle.inputContainer}>
          <select id="semana_cobra">
              <option defaultValue="0">Seleccione la semana </option>
                <option className='opcion' value = "1" >  1 </option>
                <option className='opcion' value = "2" > 2 </option>
                <option className='opcion' value = "3" > 3 </option>
                <option className='opcion' value = "4" > 4 </option>
                <option className='opcion' value = "5" > 5 </option>
            </select>
          </div>
          <div className={IndiaStyle.inputContainer}>
            <input id="razon_cobra" className={IndiaStyle.input} type="text" placeholder=" " />
            <div className={IndiaStyle.cut}></div>
            <label for="razon_cobra" className={IndiaStyle.placeholder}>Razon social</label>
          </div>
          <div className={IndiaStyle.inputContainer}>
            <input id="monto_cobra" className={IndiaStyle.input} type="text" placeholder=" " />
            <div className={IndiaStyle.cut}></div>
            <label for="monto_cobra" className={IndiaStyle.placeholder}>Monto</label>
          </div>
          <button onClick={create_Indicador_cobrar} className={IndiaStyle.button1}>Guardar </button>
          <br /><br /><br />


          <h1> Cuentas por pagar</h1>
          <div className={IndiaStyle.inputContainer}>
          <select id="semana_pagar">
              <option defaultValue="0">Seleccione la semana </option>
                <option value = "1" >  1 </option>
                <option value = "2" > 2 </option>
                <option value = "3" > 3 </option>
                <option value = "4" > 4 </option>
                <option value = "5" > 5 </option>
            </select>
          </div>
          <div className={IndiaStyle.inputContainer}>
            <input id="razon_pagar" className={IndiaStyle.input} type="text" placeholder=" " />
            <div className={IndiaStyle.cut}></div>
            <label for="razon_pagar" className={IndiaStyle.placeholder}>Razon social</label>
          </div>
          <div className={IndiaStyle.inputContainer}>
            <input id="monto_pagar" className={IndiaStyle.input} type="text" placeholder=" " />
            <div className={IndiaStyle.cut}></div>
            <label for="monto_pagar" className={IndiaStyle.placeholder}>Monto</label>
          </div>
          {/* <label>No. Semana</label>
          <input type="text" id="week_pagar" />
          <label>Razon Social</label>
          <input type="text" id="razon_pagar" />
          <label>Monto</label>
          <input type="text" id="monto_pagar" />*/}
          <button onClick={create_Indicador_pagar}className={IndiaStyle.button1}>Guardar </button> 
          <br /><br /><br />


          <h1> Bancos</h1>
          <div className={IndiaStyle.inputContainer}>
          <select id="semana_banco">
              <option defaultValue="0">Seleccione la semana </option>
                <option value = "1" >  1 </option>
                <option value = "2" > 2 </option>
                <option value = "3" > 3 </option>
                <option value = "4" > 4 </option>
                <option value = "5" > 5 </option>
            </select>
          </div>
          <div className={IndiaStyle.inputContainer}>
            <input id="razon_banco" className={IndiaStyle.input} type="text" placeholder=" " />
            <div className={IndiaStyle.cut}></div>
            <label for="razon_banco" className={IndiaStyle.placeholder}>Descripcion</label>
          </div>
          <div className={IndiaStyle.inputContainer}>
            <input id="monto_banco" className={IndiaStyle.input} type="text" placeholder=" " />
            <div className={IndiaStyle.cut}></div>
            <label for="monto_banco"className={IndiaStyle.placeholder}>Monto</label>
          </div>
          {/* <label>No. Semana</label>
          <input type="text" id="week_banco" />
          <label>Descripcion</label>
          <input type="text" id="razon_banco" />
          <label>Monto</label>
          <input type="text" id="monto_banco" /> */}
          <button onClick={create_Indicador_Banco}className={IndiaStyle.button1}>Guardar </button>

        </header>
      </div>
    </div>
  );
}

export default App;
