import axios from "axios"


export const fetchnews = () => {
    return axios.get("http://localhost:3004/news")
}

export const fetchSingleNews = (id) => {
    return axios.get(`http://localhost:3004/news/${id}`)
}