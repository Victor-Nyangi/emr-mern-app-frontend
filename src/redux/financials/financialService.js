import axios from 'axios';

const API_URL = 'http://localhost:5000/api/v1/financials'

const getFinancials = async () => {
  // const config = {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   }
  const response = await axios.get(API_URL);
  return response.data;
};
 
const createFinancial = async (financial) => {
  const response = await axios.post(API_URL, financial);
  return response.data;
};

const editFinancial = async (id, financial) => {
  const response = await axios.patch(`${API_URL}/${id}`, financial);
  return response.data;
};

const getFinancial = async (id) => {
  // const config = {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   }
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

const deleteFinancial = async (id) => {
  const { data } = await axios.delete(`${API_URL}/${id}`);
  return data;
};

const financialFinancial = {
  createFinancial,
  getFinancials,
  getFinancial,
  editFinancial,
  deleteFinancial,
};

export default financialFinancial;
