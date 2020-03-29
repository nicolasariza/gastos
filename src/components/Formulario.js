import React, { useState } from "react";
import Error from './Error';
import shortid from 'shortid';

const Formulario = ({agregarGasto, restante, setRestante}) => {

    const [nombreGasto, setNombreGasto] = useState('');
    const [cantidad, setCantidad] = useState(0);
    const [error, setError] = useState(false);
    
    const handleSubmit = e =>{
        e.preventDefault();
        if(cantidad < 1 || isNaN(cantidad) || nombreGasto.trim() == ''){
            setError(true);
            return;
        }
        setError(false);

        const gasto = {
            nombreGasto,
            cantidad,
            id: shortid.generate()
        };
        
        agregarGasto(gasto);
        setRestante(restante-gasto.cantidad);
        setNombreGasto('');
        setCantidad(0);

    };
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title text-center">Agrega tus gastos</h5>
        {error ? <Error mensaje="Ingresa el nombre del gasto y un gasto válido mayor a cero" />: null}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Nombre del gasto</label>
            <input type="Text" className="form-control" value={nombreGasto} onChange={e=>setNombreGasto(e.target.value)}/>
          </div>
          <div className="form-group">
            <label>Cantidad del gasto</label>
            <input type="number" className="form-control" value={cantidad} onChange={e=>setCantidad(parseInt(e.target.value,10))} />
          </div>
          <button type="submit" className="btn btn-primary">
            Guardar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Formulario;
