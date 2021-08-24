import axios from "axios"

const jikanUrl = axios.create({
    baseURL:"https://api.jikan.moe/v3/search/anime?q="
})

export default jikanUrl;