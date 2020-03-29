import React from 'react';

const Listado = ({gasto}) => (
    <div class="card">
    <div class="card-body">
      <p><strong>Nombre del gasto: </strong>{gasto.nombreGasto}</p>
      <p><strong>Cantidad del gasto: </strong>{gasto.cantidad}</p>
    </div>
  </div>
    );

export default Listado;