import html2canvas from 'html2canvas';
import { React, useState } from "react";
import './App.css'

function App() {

  const [imagen, setImagen] = useState("");
  const [linea1, setLinea1] = useState("");
  const [linea2, setLinea2] = useState("");

  const onChangeLinea1 = function (evento) {
    setLinea1(evento.target.value);
  };

  const onChangeLinea2 = function (evento) {
    setLinea2(evento.target.value);
  };

  const onChangeImagen = function (evento) {
    setImagen(evento.target.value);
  };

  const onClickExportar = function (evento){
    html2canvas(document.querySelector("#meme")).then(canvas => {
      var img = canvas.toDataURL("image/jpg");
      var link = document.createElement('a');
      link.download = 'meme.jpg';
      link.href = img;
      link.click();
    });
  }

  return (
    <div classname="App" align="center">
      <h1>Generador de Imagenes</h1>
      <br></br>
      <select onChange={onChangeImagen} >
        <option >Seleccione una opcion..</option> 
        <option value="fire">Casa en llamas</option>
        <option value="futurama">Futurama - Fry</option>
        <option value="history">History Channel</option>
        <option value="matrix">Matrix</option>
        <option value="philosoraptor">Philosoraptor</option>
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
      <button onClick={onClickExportar}>Exportar</button> 
 
      <div className="meme" id="meme">
        <span>{linea1}</span>
        <br></br>
        <span>{linea2}</span>
        <br></br>
        <img alt=" " src={"/img/"+ imagen +".jpg"} />
        <br></br>
      </div>
      <div>
      <br></br>
      <br></br>
      </div>
    </div>
  );
}

export default App;
