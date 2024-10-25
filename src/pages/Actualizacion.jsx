import { useEffect, useState } from "react";
import { updatePaciente } from "../services/api";
import { useNavigate, useParams } from "react-router-dom";
import { getPacienteById } from "../services/api";

const Actualizacion = () => {
  const [paciente, setPaciente] = useState({});

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    getPacienteById(id)
      .then((response) => {
        setPaciente(response.data);
      })
      .catch((err) => {
        console.error("Error en getPacientes:", err);
        setPaciente([]);
      });
  }, [id]);

  const actualizarPaciente = () => {
    console.log("Paciente a actualizar:", paciente);
    updatePaciente(paciente.id, paciente)
      .then(() => {
        navigate("/Consulta");
      })
      .catch((error) => {
        console.error("Error al actualizar el Paciente:", error);
      });
  };

  return (
    <div>
      <h2>Actualización</h2>
      <p>Introduzca el nombre</p>
      <input
        type="text"
        placeholder="Escribe el nombre"
        value={paciente.nombre}
        onChange={(e) => setPaciente({ ...paciente, nombre: e.target.value })}
      />
      <p>Introduzca el apellido</p>
      <input
        type="text"
        placeholder="Escribe el apellido"
        value={paciente.apellido}
        onChange={(e) => setPaciente({ ...paciente, apellido: e.target.value })}
      />
      <p>Introduzca la fecha de alta</p>
      <input
        type="text"
        placeholder="yyyy-MM-dd"
        value={paciente.fechaAlta}
        onChange={(e) =>
          setPaciente({ ...paciente, fechaAlta: e.target.value })
        }
      />
      <button onClick={() => actualizarPaciente()}>Actualizar</button>
    </div>
  );
};

export default Actualizacion;
