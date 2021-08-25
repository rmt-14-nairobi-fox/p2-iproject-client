import axios from "axios";

const FISH_URL = "http://localhost:3000" 

const instance = axios.create({
    baseURL: FISH_URL
})

export default instance;