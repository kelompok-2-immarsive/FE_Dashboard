import React from 'react';
import { useEffect, useState } from 'react';
import SearchBar from '../Components/SearchBar';
import { Link } from 'react-router-dom';
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
    })
        .catch(err => console.log(err))
    }

    useEffect(() => {
        getAllUsers()
    }, [])

    return (
        <div className='p-10'>
            <SearchBar 
            title={'Users List'} 
            description={'Create, Edit Or Delete Users'}
            button={<Link to='/users/add' className='btn bg-alta-primary hover:bg-hover-primary'>Add New</Link>}
            />
            <div className="card border border-border-primary">
                <div className="card-body">
                    {allUsers ? <UserList data={allUsers}/>  : <p>loading...</p>}
                </div>
            </div>
        </div>
    );
}

export default UsersPage;
