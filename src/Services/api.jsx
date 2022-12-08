import axios from "axios";

const instance = axios.create({
    baseURL: `http://35.78.200.36:8080/`,
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
    getUsers: (token) =>
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
    getAllClass: (token) =>
        instance({
            method: `GET`,
            url: `classes`,
            headers: {
                Authorization: `Bearer ${token}`
            }
        }),
    getClass: (token, id) => 
        instance({
            method: `GET`,
            url: `classes/${id}`,
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
    updateClassList: (token, id, {class_name, user_id}) =>
        instance({
            method: `PUT`,
            url: `classes/${id}`,
            headers:{
                Authorization: `Bearer ${token}`
            },
            data: {
                user_id: user_id,
                class_name: class_name,
            }
        }),
    deleteClassList: (token, id_class) =>
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