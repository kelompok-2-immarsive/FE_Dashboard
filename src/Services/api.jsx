import axios from "axios";

const instance = axios.create({
    baseURL: `http://34.71.210.70:80/`,
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
            headers:{
                Authorization: `Bearer ${token}`
            }
        }),
    classList: (token) =>
        instance({
            method: `GET`,
            url: `classes`,
            headers:{
                Authorization: `Bearer ${token}`
            }
        }),
    createClassList: (token, {user_id, class_name}) =>
        instance({
            method: `POST`,
            url: `classes`,
            headers:{
                Authorization: `Bearer ${token}`
            },
            data: {
                user_id: user_id,
                class_name: class_name,
            }
        }),
    updateClassList: (token) =>
        instance({
            method: `PUT`,
            url: `classes/${id_class}`,
            headers:{
                Authorization: `Bearer ${token}`
            }
        }),
    deleteClassList: (token) =>
        instance({
            method: `DELETE`,
            url: `classes/${id_class}`,
            headers:{
                Authorization: `Bearer ${token}`
            }
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