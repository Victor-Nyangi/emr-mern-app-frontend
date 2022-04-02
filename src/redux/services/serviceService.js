import axios from 'axios';

const API_URL = 'http://localhost:5000/api/v1/services'

const getServices = async () => {
  // const config = {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   }
  const response = await axios.get(API_URL);
  return response.data;
};
 
const createService = async (service) => {
  const response = await axios.post(API_URL, service);
  return response.data;
};

const editService = async (id, service) => {
  const response = await axios.patch(`${API_URL}/${id}`, service);
  return response.data;
};

const getService = async (id) => {
  // const config = {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   }
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

const deleteService = async (id) => {
  const { data } = await axios.delete(`${API_URL}/${id}`);
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
