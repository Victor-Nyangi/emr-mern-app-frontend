import axios from 'axios';

const API_URL = 'http://localhost:5000/api/v1/members'

const getMembers = async () => {
  // const config = {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   }
  const response = await axios.get(API_URL);
  return response.data;
};
 
const createMember = async (member) => {
  const response = await axios.post(API_URL, member);
  return response.data;
};

const editMember = async (id, member) => {
  const response = await axios.patch(`${API_URL}/${id}`, member);
  return response.data;
};

const getMember = async (id) => {
  // const config = {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   }
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

const deleteMember = async (id) => {
  const { data } = await axios.delete(`${API_URL}/${id}`);
  return data;
};

const memberMember = {
  createMember,
  getMembers,
  getMember,
  editMember,
  deleteMember,
};

export default memberMember;
