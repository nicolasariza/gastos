import React, { Fragment } from "react";
import {alertPresupuesto} from '../Helpers';
const ControlPresupuesto = ({ presupuesto, restante }) => {
  return (
    <Fragment>
      <div className="alert alert-info" role="alert"><strong>Presupuesto: </strong>{presupuesto}</div>
  <div className={alertPresupuesto(presupuesto,restante)} role="alert"><strong>Restante: </strong>{restante}</div>
    </Fragment>
  );
};

export default ControlPresupuesto;
