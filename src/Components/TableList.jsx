import React from 'react'
import {RiBook2Fill} from 'react-icons/ri'
import {BsFillTrashFill} from 'react-icons/bs'
import {AiFillEdit} from 'react-icons/ai'

const TableList = () => {
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
                <th className='bg-white text-black-default'>Class</th>
                <th className='bg-white text-black-default'>Status</th>
                <th className='bg-white text-black-default'>Category</th>
                <th className='bg-white text-black-default'>Gender</th>
                <th className='bg-white text-black-default'>Detail</th>
                <th className='bg-white text-black-default'></th>
                <th className='bg-white text-black-default'></th>
            </tr>
        </thead>
        <tbody>
        {/* <!-- row 1 --> */}
        <tr>
            <th className='bg-white'>
                <label>
                    <input type="checkbox" className="checkbox outline-border" />
                </label>
            </th>
            <td className='bg-white text-black-default'>
                <div className="flex items-center space-x-3 bg-white text-black-default">
                    <div className='bg-white text-black-default'>
                        <div className="className='bg-white text-black-default'">Hart Hagerty</div>
                    </div>
                </div>
            </td>
            <td className='bg-white text-black-default'>Front End Engineer 10<br/></td>
            <td className='bg-white text-black-default'>Graduate</td>
            <td className='bg-white text-black-default'>IT</td>
            <td className='bg-white text-black-default'>Male</td>
            <td className='bg-white text-black-default cursor-pointer'><RiBook2Fill size={30}/></td>
            <td className='bg-white text-black-default cursor-pointer'><AiFillEdit size={30}/></td>
            <td className='bg-white text-black-default cursor-pointer'><BsFillTrashFill size={30}/></td>
        </tr>
        </tbody>
        
    </table>
    </div>
    </div>
  )
}

export default TableList