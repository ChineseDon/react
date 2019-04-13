import axios from 'axios';

const api = process.env.REACT_APP_RECORDS_API_URL || 'http://5cb1619f8bdfe80014e980d9.mockapi.io/account';

// 查询全部数据
export const getAll = () => 
    axios.get(`${api}/account`);

export const add = (body) => 
    axios.post(`${api}/account`, body);

export const update = (id, body) =>
    axios.put(`${api}/account/${id}`, body);

export const del = (id) => 
    axios.delete(`${api}/account/${id}`);
