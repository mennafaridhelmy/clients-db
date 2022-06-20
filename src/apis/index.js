import axios from 'axios';

// db.js
axios.defaults.baseURL= 'http://myjson.dit.upm.es/api/bins/aco5';

// C
export const createUserAPI = async (user) => axios.post(`/users` , user);

// R
export const getUsersAPI = async() => axios.get(`/users`);
export const getUserByIdAPI = async(id) => axios.get(`/users/${id}`);

// U
export const updateUserAPI = async (user) => axios.put(`/users/${user.id}` , user);

// D
export const deleteUserByIdAPI = async (id) => axios.delete(`/users/${id}`);