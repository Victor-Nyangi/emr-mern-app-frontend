import axios from 'axios';

import { url } from '../api';

const getDepartments = async () => {
  // const config = {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   }
  const response = await axios.get(url + 'departments');
  return response.data;
};
 
const createDepartment = async (department) => {
  const response = await axios.post(`${url}/departments`, department);
  return response.data;
};

const editDepartment = async (id, department) => {
  const response = await axios.patch(`${url}/departments/${id}`, department);
  return response.data;
};

const getDepartment = async (id) => {
  // const config = {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   }
  const response = await axios.get(`${url}/departments/${id}`);
  return response.data;
};

const deleteDepartment = async (id) => {
  const { data } = await axios.delete(`${url}/departments/${id}`);
  return data;
};

const departmentService = {
  createDepartment,
  getDepartments,
  getDepartment,
  editDepartment,
  deleteDepartment,
};

export default departmentService;
