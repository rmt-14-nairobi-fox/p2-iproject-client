import axios from "axios";

const TRAVEL_URL = "http://localhost:3000";

const instance = axios.create({
  baseURL: TRAVEL_URL,
});

export default instance;
