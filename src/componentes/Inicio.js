import React from "react";
import { useFetch } from "../hooks/useFetch";

function Inicio() {
  const { data } = useFetch("http://192.168.1.5:8800/data");
  console.log(data);

  return (
    <div className="Inicio">
      {Object.keys(data).map((day, index) => (
        <div key={index}>
          <h2>{day}</h2>
          <ul>
            <li>Mañana: {data[day].mañana}</li>
            <li>Noche: {data[day].noche}</li>
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Inicio;
