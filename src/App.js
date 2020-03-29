import React, { useState, useEffect, Fragment } from "react";
import Pregunta from "./components/Pregunta";
import Formulario from "./components/Formulario";
import Listado from "./components/Listado";
import ControlPresupuesto from "./components/ControlPresupuesto";

function App() {
  // definir state

  const [presupuesto, setPresupuesto] = useState(0);
  const [restante, setRestante] = useState(0);
  const [gastos, setGastos] = useState([]);

  const agregarGasto = gasto => {
    setGastos([...gastos, gasto]);
  };

  return (
    <Fragment>
      <div className="container">
        <header>
          <h1>Gastos</h1>
        </header>
        {presupuesto != 0 ? (
          <div className="row">
            <div className="col-md-6">
              <Formulario
                agregarGasto={agregarGasto}
                restante={restante}
                setRestante={setRestante}
              />
            </div>
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <ControlPresupuesto
                    presupuesto={presupuesto}
                    restante={restante}
                  />
                  {gastos.map(gasto => (
                    <Listado key={gasto.id} gasto={gasto} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <Pregunta setPresupuesto={setPresupuesto} setRestante={setRestante} />
        )}
      </div>
      <footer class="page-footer font-small blue">
        <div className="footer-copyright text-center py-3">
          © 2020 Copyright:
          <a
            className="text-light"
            href="https://www.linkedin.com/in/nicolas-ariza/"
          >
            Nicolas Ariza
          </a>
        </div>
      </footer>
    </Fragment>
  );
}

export default App;
