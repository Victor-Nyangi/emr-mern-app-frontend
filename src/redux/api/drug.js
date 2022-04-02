import axios from 'axios';

const url = 'http://localhost:5000/api/v1/drugs';

export const fetchDrugs = () => axios.get(url);
export const createDrug = (newDrug) => axios.post(url, newDrug);
export const fetchDrug = (id) => axios.get(`${url}/${id}`);
export const updateDrug = (id, updatedDrug) => axios.patch(`${url}/${id}`, updatedDrug);
export const deleteDrug = (id) => axios.delete(`${url}/${id}`);
  