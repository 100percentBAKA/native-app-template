import axios from "axios"
// const BASE_URL = "https://api.tvmaze.com/search/shows"

// const axiosInstance = axios.create({ baseURL: BASE_URL })

export async function getAllMovies() {
    return await axios.get("https://api.tvmaze.com/search/shows?q=all")
}