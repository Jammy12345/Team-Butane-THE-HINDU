import axios from "axios"


export const fetchnews = () => {
    return axios.get("http://localhost:8000/news")
}