import { useEffect, useState } from "react";
import { getPacientes } from "../services/api";
import { useNavigate } from "react-router-dom";

const Consulta = () => {
  const [pacientes, setPacientes] = useState([]);

  const navigate = useNavigate();

  const irActualizar = (id) => {
    navigate(`/Actualizacion/${id}`);
  };

  useEffect(() => {
    getPacientes()
      .then((response) => {
        setPacientes(response.data);
      })
      .catch((err) => {
        console.error("Error en getPacientes:", err);
        setPacientes([]);
      });
  }, []);

  return (
    <div>
      <h1>Lista de Pacientes</h1>
      <table border="1" cellPadding="10" cellSpacing="10">
        <thead>
          <tr>
            <th></th>
            <th>ID</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Fecha alta</th>
          </tr>
        </thead>
        <tbody>
          {pacientes.length > 0 ? (
            pacientes.map((paciente) => (
              <tr key={paciente.id}>
                <td>
                  <button onClick={() => irActualizar(paciente.id)}>
                    Actualizar
                  </button>
                </td>
                <td>{paciente.id}</td>
                <td>{paciente.nombre}</td>
                <td>{paciente.apellido}</td>
                <td>{paciente.fechaAlta}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No hay pacientes para mostrar</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Consulta;
