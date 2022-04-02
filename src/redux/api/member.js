import axios from 'axios';

const url = 'http://localhost:5000/api/v1/members';

export const fetchMembers = () => axios.get(url);
export const createMember = (newMember) => axios.post(url, newMember);
export const fetchMember = (id) => axios.get(`${url}/${id}`);
export const updateMember = (id, updatedMember) => axios.patch(`${url}/${id}`, updatedMember);
export const deleteMember = (id) => axios.delete(`${url}/${id}`);
 