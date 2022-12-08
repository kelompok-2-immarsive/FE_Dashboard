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
    getMenteeByName:(token, menteeName) =>
        instance({
            method : `GET`,
            url : `mentee`,
            headers:{
                Authorization: `Bearer ${token}`
            },
            data : {Name : menteeName}
        }),
    deleteMentee:(token,idMentee) =>
        instance({
            method : `DELETE`,
            url : `mentees/${idMentee}`,
            headers:{
                Authorization: `Bearer ${token}`
            },
        }),
    editMentee:(token,idMentee, {fullname,menteeClass,address,homeAddress,email,gender,telegram,phone,menteeStatus,emergencyPhone,emergencyName,emergencyStatus,category,major,graduate}) =>
        instance({
            method : `PUT`,
            url : `mentees/${idMentee}`,
            headers:{
                Authorization: `Bearer ${token}`
            },
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
        }),
    getMenteeFeedback:(token, idMentee) =>
        instance({
            method : `GET`,
            url : `mentee/${idMentee}/feedback`,
            headers:{
                Authorization: `Bearer ${token}`
            },
        })
}