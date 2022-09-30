import axios from 'axios';

import { url } from '../api';

const getFinancials = async () => {
  // const config = {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   }
  const response = await axios.get(url + 'financials');
  return response.data;
};
 
const createFinancial = async (financial) => {
  const response = await axios.post(`${url}/financials`, financial);
  return response.data;
};

const editFinancial = async (id, financial) => {
  const response = await axios.patch(`${url}/financials/${id}`, financial);
  return response.data;
};

const getFinancial = async (id) => {
  // const config = {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   }
  const response = await axios.get(`${url}/financials/${id}`);
  return response.data;
};

const deleteFinancial = async (id) => {
  const { data } = await axios.delete(`${url}/financials/${id}`);
  return data;
};

const financialService = {
  createFinancial,
  getFinancials,
  getFinancial,
  editFinancial,
  deleteFinancial,
};

export default financialService;
