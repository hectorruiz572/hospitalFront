import axios from "axios";

const instancePacientes = axios.create({ baseURL: 'http://localhost:8080/pacientes' });

export const getPacientes = async () => await instancePacientes.get('');

export const savePaciente = async (obj) => await instancePacientes.post('/', obj)

export const deletePaciente = async (id) => await instancePacientes.delete('/' + id);

export const updatePaciente = async (id, paciente) => await instancePacientes.put(`/${id}`, paciente);

export const getPacienteById = async (id) => await instancePacientes.get(`/${id}`);




