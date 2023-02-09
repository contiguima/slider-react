import React from "react";
import "../stylesheets/proyecto.css";

function Proyecto(props) {
  return (
    <div className="card">
      <div
        className="card-image"
        style={{ backgroundImage: `url(${props.imagen})` }}
      />
      <div className="card-text">
        <h3>{props.nombre}</h3>
        <p>Stack: {props.stack}</p>
        <p>{props.texto}</p>
        <a href={props.repo}>Ver Repositorio</a> <br />
        <a href={props.deploy}>Ver Deploy</a>
      </div>
    </div>
  );
}

export default Proyecto;
