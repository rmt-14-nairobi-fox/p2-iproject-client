import axios from "axios";

const FISH_URL = "https://fistator.herokuapp.com";

const instance = axios.create({
    baseURL: FISH_URL
})

export default instance;