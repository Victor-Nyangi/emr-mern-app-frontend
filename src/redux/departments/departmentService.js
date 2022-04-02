import axios from 'axios';

const API_URL = 'http://localhost:5000/api/v1/departments'

const getDepartments = async () => {
  // const config = {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   }
  const response = await axios.get(API_URL);
  return response.data;
};
 
const createDepartment = async (department) => {
  const response = await axios.post(API_URL, department);
  return response.data;
};

const editDepartment = async (id, department) => {
  const response = await axios.patch(`${API_URL}/${id}`, department);
  return response.data;
};

const getDepartment = async (id) => {
  // const config = {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   }
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

const deleteDepartment = async (id) => {
  const { data } = await axios.delete(`${API_URL}/${id}`);
  return data;
};

const departmentDepartment = {
  createDepartment,
  getDepartments,
  getDepartment,
  editDepartment,
  deleteDepartment,
};

export default departmentDepartment;
