import React from 'react';
import { useEffect, useState } from 'react';
import SearchBar from '../Components/SearchBar';
import TableList from '../Components/TableList';
import api from '../Services/api';
import { useCookies } from 'react-cookie'
import UserList from '../Components/UserList';

const UsersPage = () => {
    const [allUsers, setAllUsers] = useState('')
    const [cookie, setCookie] = useCookies();
    const authToken = cookie.token 

    const getAllUsers = async() => {
        await api.getAllUsers(authToken)
        .then(response => {
            setAllUsers(response.data.data)
            console.log(response.data.data)
    })
        .catch(err => console.log(err))
    }

    useEffect(() => {
        getAllUsers()
    }, [])
    return (
        <div className='p-10'>
            <SearchBar />
            <div className="card border border-border-primary">
                <div className="card-body">
                    <UserList data={allUsers}/>
                </div>
            </div>
        </div>
    );
}

export default UsersPage;
