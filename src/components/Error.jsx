import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <p>{err.status + ": " + err.statusText }</p>
      <p>  {err.data}</p>
    </div>
  );
};

export default Error;
