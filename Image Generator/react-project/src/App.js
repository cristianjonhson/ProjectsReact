import { React, useState } from "react";

function App() {


  const [linea1, setLinea1] = useState("");
  const [linea2, setLinea2] = useState("");

  const onChangeLinea1 = function (evento) {
    setLinea1(evento.target.value);
  };

  const onChangeLinea2 = function (evento) {
    setLinea2(evento.target.value);
  };

  return (
    <div classname="App" align="center">
      <h1>Generador de Imagenes</h1>

      <select>
        <option value="fire">Casa en llamas</option>
        <option value="futurama">Futurama</option>
        <option value="history">History Channel</option>
        <option value="matrix">Matrix</option>
        <option value="raptor">Philosoraptor</option>
        <option value="smart">Smart guy</option>
      </select>

      <br></br>
      <br></br>
      <input onChange={onChangeLinea1} type="text" placeholder="linea1"></input>
      <br></br>
      <br></br>
      <input onChange={onChangeLinea2} type="text" placeholder="linea2"></input>
      <br></br>
      <br></br>
      <button>Exportar</button>
      <br></br>
      <br></br>
      <div>
        <span>{linea1}</span>
        <br></br>
        <br></br>
        <span>{linea2}</span>
        <br></br>
        <img src="" />
        <br></br>
      </div>
    </div>
  );
}

export default App;
