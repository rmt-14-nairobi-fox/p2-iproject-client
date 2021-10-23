import axios from 'axios'

export default axios.create({
  baseURL: 'https://v6.exchangerate-api.com/v6/bccd8b61279bbf64f09bb2ee/pair'
})
