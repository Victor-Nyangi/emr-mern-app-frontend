import axios from 'axios';

const API_URL = 'http://localhost:5000/api/v1/drugs'

const getDrugs = async () => {
  // const config = {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   }
  const response = await axios.get(API_URL);
  return response.data;
};
 
const createDrug = async (drug) => {
  const response = await axios.post(API_URL, drug);
  return response.data;
};

const editDrug = async (id, drug) => {
  const response = await axios.patch(`${API_URL}/${id}`, drug);
  return response.data;
};

const getDrug = async (id) => {
  // const config = {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   }
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

const deleteDrug = async (id) => {
  const { data } = await axios.delete(`${API_URL}/${id}`);
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
