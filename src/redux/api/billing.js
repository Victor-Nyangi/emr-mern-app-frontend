import axios from 'axios';

const url = 'http://localhost:5000/api/v1/billings';

export const fetchBillings = () => axios.get(url);
export const createBilling = (newBilling) => axios.post(url, newBilling);
export const fetchBilling = (id) => axios.get(`${url}/${id}`);
export const updateBilling = (id, updatedBilling) => axios.patch(`${url}/${id}`, updatedBilling);
export const deleteBilling = (id) => axios.delete(`${url}/${id}`);
  