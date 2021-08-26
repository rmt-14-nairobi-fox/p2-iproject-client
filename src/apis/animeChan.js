import axios from "axios";

const animeQuote = axios.create({
  baseURL: "https://animechan.vercel.app/api/quotes",
});

export default animeQuote;
