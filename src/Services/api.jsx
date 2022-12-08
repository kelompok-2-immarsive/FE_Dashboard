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
    addUser: (token, {fullname, email, password, role, phone, address}) =>
        instance({
            method: 'POST',
            url: 'user',
            data: {
                fullname: fullname,
                email: email,
                password: password,
                role: role,
                phone: phone,
                address: address,
            },
            headers: {
                Authorization: `Bearer ${token}`
            }
        }),
        
    //class
    createClassList: (token) =>
        instance({
            method: `POST`,
            url: `classes`,
            headers:{
                Authorization: `Bearer ${token}`
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
}