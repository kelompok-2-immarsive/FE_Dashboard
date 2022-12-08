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
    getAllUsers:(token) => 
    instance({
        method : `GET`,
        url : `user`,
        headers : {
            Authorization : `Bearer ${token}`
        }
    }),
    addMentee:(token, {fullname,menteeClass,address,homeAddress,email,gender,telegram,phone,menteeStatus,emergencyPhone,emergencyName,emergencyStatus,category,major,graduate}) => 
    instance({
        method : `POST`,
        url : `mentees`,
        data : {
            name: fullname,
            class_id: parseInt(menteeClass),
            address : address,
            home_address: homeAddress,
            email : email,
            gender : gender,
            telegram : telegram,
            phone : phone,
            mentee_status: menteeStatus,
            emergency_phone: emergencyPhone,
            emergency_name: emergencyName,
            emergency_relation: emergencyStatus,
            category : category,
            major : major,
            graduate : graduate

        },
        headers : {
            Authorization : `Bearer ${token}`
        },
    })
}