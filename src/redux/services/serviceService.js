import axios from 'axios';

import { url } from '../api';
const getServices = async () => {
  // const config = {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   }
  const response = await axios.get(url + 'services');
  return response.data;
};
 
const createService = async (service) => {
  const response = await axios.post(`${url}/services`, service);
  return response.data;
};

const editService = async (id, service) => {
  const response = await axios.patch(`${url}/services/${id}`, service);
  return response.data;
};

const getService = async (id) => {
  // const config = {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   }
  const response = await axios.get(`${url}/services/${id}`);
  return response.data;
};

const deleteService = async (id) => {
  const { data } = await axios.delete(`${url}/services/${id}`);
  return data;
};

const serviceService = {
  createService,
  getServices,
  getService,
  editService,
  deleteService,
};

export default serviceService;
