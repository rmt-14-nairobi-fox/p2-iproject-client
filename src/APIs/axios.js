import axios from 'axios'

export default axios.create({
  baseURL: 'https://crypto-portal-server.herokuapp.com'
  // baseURL: 'http://localhost:3000'
})
