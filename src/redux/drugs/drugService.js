import axios from 'axios';
import { url } from '../api';


const getDrugs = async () => {
  // const config = {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   }
  const response = await axios.get(url + 'drugs');
  return response.data;
};
 
const createDrug = async (drug) => {
  const response = await axios.post(`${url}/drugs`, drug);
  return response.data;
};

const editDrug = async (id, drug) => {
  const response = await axios.patch(`${url}/drugs/${id}`, drug);
  return response.data;
};

const getDrug = async (id) => {
  // const config = {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   }
  const response = await axios.get(`${url}/drugs/${id}`);
  return response.data;
};

const deleteDrug = async (id) => {
  const { data } = await axios.delete(`${url}/drugs/${id}`);
  return data;
};

const drugDrug = {
  createDrug,
  getDrugs,
  getDrug,
  editDrug,
  deleteDrug,
};

export default drugDrug;
