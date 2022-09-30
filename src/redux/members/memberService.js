import axios from 'axios';
import { url } from '../api';

const getMembers = async () => {
  // const config = {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   }
  const response = await axios.get(url + 'members');
  return response.data;
};
 
const createMember = async (member) => {
  const response = await axios.post(`${url}/members`, member);
  return response.data;
};

const editMember = async (id, member) => {
  const response = await axios.patch(`${url}/members/${id}`, member);
  return response.data;
};

const getMember = async (id) => {
  // const config = {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   }
  const response = await axios.get(`${url}/members/${id}`);
  return response.data;
};

const deleteMember = async (id) => {
  const { data } = await axios.delete(`${url}/members/${id}`);
  return data;
};

const memberService = {
  createMember,
  getMembers,
  getMember,
  editMember,
  deleteMember,
};

export default memberService;
