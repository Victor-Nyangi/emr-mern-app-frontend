import axios from 'axios';

const url = 'http://localhost:5000/api/v1/vitals';

export const fetchVitals = () => axios.get(url);
export const createVital = (newVital) => axios.post(url, newVital);
export const fetchVital = (id) => axios.get(`${url}/${id}`);
export const updateVital = (id, updatedVital) => axios.patch(`${url}/${id}`, updatedVital);
export const deleteVital = (id) => axios.delete(`${url}/${id}`);
  