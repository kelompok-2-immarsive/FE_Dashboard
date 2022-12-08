import React from 'react'
import { RiBook2Fill } from 'react-icons/ri'
import { BsFillTrashFill } from 'react-icons/bs'
import { AiFillEdit } from 'react-icons/ai'
import { MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowLeft } from 'react-icons/md'
import { Link } from 'react-router-dom'

const UserList = ({ data, paginateFront, paginateBack, disabled, delUsers }) => {
    return (
        <div>
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
                            {/* <th className='bg-white text-black-default'>Team</th> */}
                            <th className='bg-white text-black-default'>Role</th>
                            <th className='bg-white text-black-default'>Status</th>
                            <th className='bg-white text-black-default'>Detail</th>
                            <th className='bg-white text-black-default'></th>
                            <th className='bg-white text-black-default'></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}
                        {data &&
                            data.map(user => {
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
                                        <td className='bg-white text-black-default cursor-pointer'><Link to='/users/edit'><RiBook2Fill size={30}/></Link></td>
                                        <td className='bg-white text-black-default cursor-pointer'><label onClick={() => delUsers(user.id)} className='cursor-pointer' htmlFor=""><AiFillEdit size={30} /></label></td>
                                        <td className='bg-white text-black-default cursor-pointer'><BsFillTrashFill size={30} /></td>
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
                            <button onClick={() => paginateBack()} className='cursor-pointer text-black-default' ><MdOutlineKeyboardArrowLeft size={25}/></button>
                            <button disabled={disabled} onClick={() => paginateFront()} className='cursor-pointer ml-5 text-black-default' ><MdOutlineKeyboardArrowRight size={25}/></button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default UserList