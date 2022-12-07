import React from 'react'
import {RiBook2Fill} from 'react-icons/ri'
import {BsFillTrashFill} from 'react-icons/bs'
import {AiFillEdit} from 'react-icons/ai'
import {MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowLeft} from 'react-icons/md'

const TableList = ({data, paginateFront, paginateBack}) => {
  return (
    <div>
        <div className="overflow-x-auto max-w-[1600px] mx-auto bg-white px-5 rounded-xl">
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
        {

            data?.map(mentee => {
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
                            <div className="bg-white text-black-default">{mentee.name}</div>
                        </div>
                    </div>
                </td>
                <td className='bg-white text-black-default'>{mentee.class}<br/></td>
                <td className='bg-white text-black-default'>{mentee.mantee_status}</td>
                <td className='bg-white text-black-default'>{mentee.category}</td>
                <td className='bg-white text-black-default'>{mentee.gender}</td>
                <td className='bg-white text-black-default cursor-pointer'><RiBook2Fill size={30}/></td>
                <td className='bg-white text-black-default cursor-pointer'><AiFillEdit size={30}/></td>
                <td className='bg-white text-black-default cursor-pointer'><BsFillTrashFill size={30}/></td>
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
                <MdOutlineKeyboardArrowLeft onClick={() => paginateBack()} className='cursor-pointer text-black-default' size={25}/>
                <MdOutlineKeyboardArrowRight onClick={() => paginateFront()} className='cursor-pointer ml-5 text-black-default' size={25}/>
            </div>
        </div>
            
     </div>
    </div>
    </div>
  )
}

export default TableList