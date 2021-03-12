import axios from "axios"


export const fetchnews = () => {
    return axios.get("https://fake-server-ashutosh.herokuapp.com/news")
}

export const fetchSingleNews = (id) => {
    return axios.get(`https://fake-server-ashutosh.herokuapp.com/news/${id}`)
}