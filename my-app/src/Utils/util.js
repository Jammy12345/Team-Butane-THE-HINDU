import axios from "axios"


export const fetchnews = () => {
    return axios.get("https://fake-server-ashutosh.herokuapp.com/news")
}

export const postSignup = (payload) => {
    return axios.post("https://fake-server-ashutosh.herokuapp.com/users", payload);
}

export const checkLogin = (email) => {
    return axios.get("https://fake-server-ashutosh.herokuapp.com/users", {
        params: {
            q: email
        }
    });
}

export const fetchSingleNews = (id) => {
    return axios.get(`https://fake-server-ashutosh.herokuapp.com/news/${id}`)
}

export const postComment = (payload) => {
    return axios.patch(`https://fake-server-ashutosh.herokuapp.com/news/${payload.id}`, {
        ...payload
    })
}

export const postBookmark = (payload) => {
    return axios.patch(`https://fake-server-ashutosh.herokuapp.com/news/${payload.id}`, {
        ...payload
    })
}