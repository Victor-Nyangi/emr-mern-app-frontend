import axios from 'axios';

const API_URL = 'http://localhost:5000/api/v1/vitals'

const getVitals = async () => {
  // const config = {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   }
  const response = await axios.get(API_URL);
  return response.data;
};
 
const createVital = async (vital) => {
  const response = await axios.post(API_URL, vital);
  return response.data;
};

const editVital = async (id, vital) => {
  const response = await axios.patch(`${API_URL}/${id}`, vital);
  return response.data;
};

const getVital = async (id) => {
  // const config = {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   }
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

const deleteVital = async (id) => {
  const { data } = await axios.delete(`${API_URL}/${id}`);
  return data;
};

const vitalVital = {
  createVital,
  getVitals,
  getVital,
  editVital,
  deleteVital,
};

export default vitalVital;
