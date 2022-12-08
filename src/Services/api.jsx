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
    classList: (token) =>
        instance({
            method: `GET`,
            url: `classes`,
            headers: {
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
        
//Mentees
 tableMenteeList: (token) =>
        instance({
            method: `GET`,
            url: `mentees`,
            headers: {
                Authorization: `Bearer ${token}`
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