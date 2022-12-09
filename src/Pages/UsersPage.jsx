import React from 'react';
import { useEffect, useState } from 'react';
import SearchBar from '../Components/SearchBar';
import { Link, useSearchParams } from 'react-router-dom';
import api from '../Services/api';
import { useCookies } from 'react-cookie'
import UserList from '../Components/UserList';

const UsersPage = () => {
    const [allUsers, setAllUsers] = useState([])
    const [cookie, setCookie] = useCookies();
    const [currentPage, setCurrentPage] = useState(1)
    const [userPerPage, setUserPerPage] = useState(3)
    const [searchParams, setSearchParams] = useSearchParams();
    const [keyword, setKeyword] = useState(() => {
      return searchParams.get('keyword') || ''
    });
  
    const onKeywordChangeHandler = (keyword) => {
      setKeyword(keyword)
      setSearchParams({keyword});
    }


    const getAllUsers = async () => {
        await api.getUsers(cookie.token)
            .then(response => {
                setAllUsers(response.data.data)
                console.log(allUsers)
            })
            .catch(err => console.log(err))
    }

    const getDeleteUsers = async (id) => {
        await api.deleteUsers(cookie.token, id)
        .then(response =>{
            alert('yey ke apus')
            getAllUsers()
        })
        .catch(error => {
            console.log(error)
        })
    }

    useEffect(() => {
        getAllUsers()
    }, [])

    const filteredUser = allUsers.filter((user) => {
        return user.fullname.toLowerCase().includes(
          keyword.toLowerCase()
        );
      });

    const lastUserIndex = currentPage * userPerPage
    const firstUserIndex = lastUserIndex - userPerPage
    const currentUser = filteredUser?.slice(firstUserIndex, lastUserIndex)
    const disabled = currentPage === Math.ceil(allUsers?.length / userPerPage) ? true : false;
    return (
        <div className='p-10'>
            <SearchBar
                title={'Users List'}
                description={'Create, Edit Or Delete Users'}
                button={<Link to='/users/add' className='btn bg-alta-primary hover:bg-hover-primary'>Add New</Link>}
                keyword={keyword}
                keywordChange={onKeywordChangeHandler}
            />
            <div className="card border border-border-primary bg-white">
                <div className="card-body">
                    {currentUser ?
                        <UserList
                            data={currentUser}
                            paginateBack={() => setCurrentPage(currentPage - 1)}
                            paginateFront={() => setCurrentPage(currentPage + 1)}
                            disabled={disabled}
                            onDelete={(id) => getDeleteUsers(id)}
                        />
                        : <p>loading...</p>}
                </div>
            </div>
        </div>
    );
}

export default UsersPage;
