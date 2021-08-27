import axios from 'axios'

const instance = axios.create({
  // baseURL: 'http://localhost:3000'
  baseURL: 'https://h8-pet-poll.herokuapp.com/'
})

export default instance
