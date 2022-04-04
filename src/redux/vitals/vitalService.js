import axios from 'axios';

import { url } from '../api';
const getVitals = async () => {
  // const config = {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   }
  const response = await axios.get(url + 'vitals');
  return response.data;
};
 
const createVital = async (vital) => {
  const response = await axios.post(`${url}/vitals/`, vital);
  return response.data;
};

const editVital = async (id, vital) => {
  const response = await axios.patch(`${url}/vitals/${id}`, vital);
  return response.data;
};

const getVital = async (id) => {
  // const config = {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   }
  const response = await axios.get(`${url}/vitals/${id}`);
  return response.data;
};

const deleteVital = async (id) => {
  const { data } = await axios.delete(`${url}/vitals/${id}`);
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
