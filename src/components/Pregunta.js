import React, { Fragment, useState } from "react";
import Error from './Error';

const Pregunta = ({setPresupuesto, setRestante}) => {
  // Definir el state
  const [cantidad, setCantidad] = useState(0);
  const [error, setError] = useState(false);

  const handleOnChange = e => {
    setCantidad(parseInt(e.target.value));
  };

  const agregarPresupuesto = e => {
    e.preventDefault();

    //validando errores
    if (cantidad < 1 || isNaN(cantidad)) {
      setError(true);
      return;
    }
    setError(false);
    setPresupuesto(cantidad);
    setRestante(cantidad);
  };

  return (
      <div className="card text-center">
        <div className="card-body">
          {error ? <Error mensaje="Ingresa un presupuesto válido" />: null}
          <h5 className="card-title">Ingresa tu presupuesto</h5>
          <form onSubmit={agregarPresupuesto}>
            <div className="form-group">
              <input
                type="number"
                className="form-control"
                placeholder="Ingresa tu presupuesto"
                onChange={handleOnChange}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Guardar
            </button>
          </form>
        </div>
      </div>
  );
};

export default Pregunta;
