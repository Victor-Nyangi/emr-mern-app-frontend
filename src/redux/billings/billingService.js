import axios from 'axios';

import { url } from '../api';

const getBillings = async () => {
  // const config = {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   }
  const response = await axios.get(url + 'billings');
  return response.data;
};
 
const createBilling = async (billing) => {
  const response = await axios.post(`${url}/billings`, billing);
  return response.data;
};

const editBilling = async (id, billing) => {
  const response = await axios.patch(`${url}/billings/${id}`, billing);
  return response.data;
};

const getBilling = async (id) => {
  // const config = {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   }
  const response = await axios.get(`${url}/billings/${id}`);
  return response.data;
};

const deleteBilling = async (id) => {
  const { data } = await axios.delete(`${url}/billings/${id}`);
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
