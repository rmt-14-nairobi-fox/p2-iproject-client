import axios from 'axios';

const server = axios.create({
  baseURL: 'https://newromantimes.herokuapp.com',
});

export default server;
