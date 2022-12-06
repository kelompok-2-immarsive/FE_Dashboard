import axios from "axios";

const instance = axios.create({
    baseURL: `https://virtserver.swaggerhub.com/Anti-Gen/PROJCECT-BE13/1.0.0`
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
        })
}