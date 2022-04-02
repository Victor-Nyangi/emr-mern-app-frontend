import axios from 'axios';

const API_URL = 'http://localhost:5000/api/v1/patients'

const getPatients = async () => {
  // const config = {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   }
  const response = await axios.get(API_URL);
  return response.data;
};
 
const createPatient = async (patient) => {
  const response = await axios.post(API_URL, patient);
  return response.data;
};

const editPatient = async (id, patient) => {
  const response = await axios.patch(`${API_URL}/${id}`, patient);
  return response.data;
};

const getPatient = async (id) => {
  // const config = {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   }
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

const deletePatient = async (id) => {
  const { data } = await axios.delete(`${API_URL}/${id}`);
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
