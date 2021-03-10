import axios from "axios"


export const fetchnews = () => {
    return axios.get("http://localhost:3000/news")
}