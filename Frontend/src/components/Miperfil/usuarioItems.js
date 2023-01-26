import React from "react";

function UsuarioItem(props) {

  return (
    <div>
      <div>
        <span>{props.nombre}</span>
      </div>
      <div>
        <span>{props.apellido}</span>
      </div>
      <div>
        <span>{props.direccion}</span>
      </div>
      <div>
        <span>{props.telefono}</span>
      </div>
      <div>
        <span>{props.email}</span>
      </div>
    </div>
  );
}

export { UsuarioItem };