import axios from 'axios';

export default (baseUrl) => {
  return axios.create({
    baseURL: baseUrl,
    withCredentials: false,
    headers: {
      // Accept: 'application/json',
      'Content-Type': 'application/json',
      // 'Access-Control-Allow-Origin': '*',
      // 'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    },
  });
};
