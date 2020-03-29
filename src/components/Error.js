import React from "react";

const Error = ({ mensaje }) => (
  <div className="alert alert-danger" role="alert">
    {mensaje}
  </div>
);

export default Error;