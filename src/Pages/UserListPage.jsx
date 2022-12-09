import React from 'react';
import { useEffect, useState } from 'react';
import SearchBar from '../Components/SearchBar';
import { Link, useSearchParams } from 'react-router-dom';
import api from '../Services/api';
import { useCookies } from 'react-cookie'
import UserList from '../Components/UserList';


const UserListPage = () => {
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
        setSearchParams({ keyword });
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
            .then(response => {
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
                        <div className="overflow-x-auto max-w-[1600px] mx-auto bg-white px-5">
                            <table className="table w-full bg-white">
                                {/* <!-- head --> */}
                                <thead >
                                    <tr className='border-bawah'>
                                        <th className='bg-white'>
                                            <label>
                                                <input type="checkbox" className="checkbox outline-border" />
                                            </label>
                                        </th>
                                        <th className='bg-white text-black-default'>Name</th>
                                        <th className='bg-white text-black-default'>Email</th>
                                        <th className='bg-white text-black-default'>Phone</th>
                                        <th className='bg-white text-black-default'>Role</th>
                                        <th className='bg-white text-black-default'>Status</th>
                                        <th className='bg-white text-black-default'>Detail</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        currentUser.map(user => {
                                            return (
                                                <tr>
                                                    <th className='bg-white'>
                                                        <label>
                                                            <input type="checkbox" className="checkbox outline-border" />
                                                        </label>
                                                    </th>
                                                    <td className='bg-white text-black-default'>
                                                        <div className="flex items-center space-x-3 bg-white text-black-default">
                                                            <div className='bg-white text-black-default'>
                                                                <div className="bg-white text-black-default">{user.fullname}</div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className='bg-white text-black-default'>{user.email}<br /></td>
                                                    <td className='bg-white text-black-default'>{user.phone}</td>
                                                    <td className='bg-white text-black-default'>{user.role}</td>
                                                    <td className='bg-white text-black-default'>{user.status}</td>
                                                </tr>
                                            )

                                        })
                                    }
                                </tbody>

                            </table>
                            <div className='ml-auto mr-20 mt-5 pr-10 w-[30px]'>
                                <div className='flex'>
                                    <div>
                                        <label className='text-end mr-5 text-black-default' htmlFor="">1/20</label>
                                    </div>
                                    <div className='flex'>
                                        <button onClick={() => paginateBack()} className='cursor-pointer text-black-default' ><MdOutlineKeyboardArrowLeft size={25} /></button>
                                        <button disabled={disabled} onClick={() => paginateFront()} className='cursor-pointer ml-5 text-black-default' ><MdOutlineKeyboardArrowRight size={25} /></button>
                                    </div>
                                </div>

                            </div>
                        </div>
                        : <p>loading...</p>}
                </div>
            </div>
        </div>
    );
}

export default UserListPage;
