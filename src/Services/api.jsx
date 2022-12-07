import axios from "axios";

const instance = axios.create({
    baseURL: `http://35.202.68.77:80/`,
})

export default {
    login: ({ email, password }) =>
        instance({
            method: `POST`,
            url: `login`,
            data: {
                email: email,
                password: password,
            }
        }),

    tableMenteeList: (token) =>
        instance({
            method: `GET`,
            url: `mentees`,
            headers: {
                Authorization: `Bearer ${token}`
            }
        }),
    classList: (token) =>
        instance({
            method: `GET`,
            url: `classes`,
            headers: {
                Authorization: `Bearer ${token}`
            }
        }),

    //user
    getAllUsers: (token) =>
        instance({
            method: `GET`,
            url: `user`,
            headers: {
                Authorization: `Bearer ${token}`
            }
        }),
    addUser: (token, data) =>
        instance({
            method: 'POST',
            url: 'user',
            data: {
                fullname: fullname,
                email: email,
                password: password,
                role: team,
                phone: phone,
                status: status,
                address: address,
            },
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
}