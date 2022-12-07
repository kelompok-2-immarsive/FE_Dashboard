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
            },
        }),
}