import axios from 'axios';
import { url } from '../api';

const getPatients = async () => {
  // const config = {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   }
  const response = await axios.get(url + 'patients');
  return response.data;
};
 
const createPatient = async (patient) => {
  const response = await axios.post(`${url}/patients`, patient);
  return response.data;
};

const editPatient = async (id, patient) => {
  const response = await axios.patch(`${url}/patients/${id}`, patient);
  return response.data;
};

const getPatient = async (id) => {
  // const config = {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   }
  const response = await axios.get(`${url}/patients/${id}`);
  return response.data;
};

const deletePatient = async (id) => {
  const { data } = await axios.delete(`${url}/patients/${id}`);
  return data;
};

const patientPatient = {
  createPatient,
  getPatients,
  getPatient,
  editPatient,
  deletePatient,
};

export default patientPatient;
