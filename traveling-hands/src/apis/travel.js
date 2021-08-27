import axios from "axios";

// const TRAVEL_URL = "http://localhost:3000";
const TRAVEL_URL = "https://i-project-handson-vuex.herokuapp.com";

const instance = axios.create({
  baseURL: TRAVEL_URL,
});

export default instance;
