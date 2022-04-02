import axios from 'axios';

const url = 'http://localhost:5000/api/v1/patients';

export const fetchPatients = () => axios.get(url);
export const createPatient = (newPatient) => axios.post(url, newPatient);
export const fetchPatient = (id) => axios.get(`${url}/${id}`);
export const updatePatient = (id, updatedPatient) => axios.patch(`${url}/${id}`, updatedPatient);
export const deletePatient = (id) => axios.delete(`${url}/${id}`);
  