import { useState } from "react";
import { savePaciente } from "../services/api";
import { useNavigate } from "react-router-dom";

const Alta = () => {
  const [paciente, setPaciente] = useState({});

  const navigate = useNavigate();

  const darDeAltaPaciente = () => {
    console.log("Paciente a guardar:", paciente); // Verificar el objeto
    savePaciente(paciente)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.error("Error al guardar el Paciente:", error);
      });
  };

  return (
    <div>
      <h2>Ingreso</h2>
      <p>Introduzca el nombre</p>
      <input
        type="text"
        placeholder="Escribe el nombre"
        onChange={(e) => setPaciente({ ...paciente, nombre: e.target.value })}
      />
      <p>Introduzca el apellido</p>
      <input
        type="text"
        placeholder="Escribe el apellido"
        onChange={(e) => setPaciente({ ...paciente, apellido: e.target.value })}
      />
      <p>Introduzca la fecha de alta</p>
      <input
        type="text"
        placeholder="yyyy-MM-dd"
        onChange={(e) =>
          setPaciente({ ...paciente, fechaAlta: e.target.value })
        }
      />
      <button onClick={() => darDeAltaPaciente()}>Alta</button>
    </div>
  );
};

export default Alta;
