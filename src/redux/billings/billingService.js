import axios from 'axios';

const API_URL = 'http://localhost:5000/api/v1/billings'

const getBillings = async () => {
  // const config = {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   }
  const response = await axios.get(API_URL);
  return response.data;
};
 
const createBilling = async (billing) => {
  const response = await axios.post(API_URL, billing);
  return response.data;
};

const editBilling = async (id, billing) => {
  const response = await axios.patch(`${API_URL}/${id}`, billing);
  return response.data;
};

const getBilling = async (id) => {
  // const config = {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   }
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

const deleteBilling = async (id) => {
  const { data } = await axios.delete(`${API_URL}/${id}`);
  return data;
};

const billingBilling = {
  createBilling,
  getBillings,
  getBilling,
  editBilling,
  deleteBilling,
};

export default billingBilling;
