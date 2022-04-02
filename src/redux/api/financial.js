import axios from 'axios';

const url = 'http://localhost:5000/api/v1/financials';

export const fetchFinancials = () => axios.get(url);
export const createFinancial = (newFinancial) => axios.post(url, newFinancial);
export const fetchFinancial = (id) => axios.get(`${url}/${id}`);
export const updateFinancial = (id, updatedFinancial) => axios.patch(`${url}/${id}`, updatedFinancial);
export const deleteFinancial = (id) => axios.delete(`${url}/${id}`);
  