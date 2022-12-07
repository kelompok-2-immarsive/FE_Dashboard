import axios from "axios";

const instance = axios.create({
    baseURL: `http://35.202.68.77:80/`,
})

export default {
    login: ({email, password}) =>
        instance({
            method: `POST`,
            url: `login`,
            data: {
                email: email,
                password: password,
            }
        }),

    tableMenteeList: () => 
    instance({
        method: `GET`,
        url: `https://virtserver.swaggerhub.com/Anti-Gen/PROJCECT-BE13/1.0.0/mentees`,
    }),
    classList: () => 
    instance({
        method: `GET`,
        url: `https://virtserver.swaggerhub.com/Anti-Gen/PROJCECT-BE13/1.0.0/classes`,
    }),
    getAllUsers:(token) => 
    instance({
        method : `GET`,
        url : `user`,
        headers : {
            Authorization : `Bearer ${token}`
        }
    })
}