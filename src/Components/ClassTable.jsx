import React from 'react'
import {RiBook2Fill} from 'react-icons/ri'
import {BsFillTrashFill} from 'react-icons/bs'
import {AiFillEdit} from 'react-icons/ai'
import {MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowLeft} from 'react-icons/md'

const ClassTable = ({data}) => {
  return (
    <div>
        <div className="overflow-x-auto max-w-[1600px] mx-auto mt-10 bg-white px-5">
        <table className="table w-full bg-white">
        {/* <!-- head --> */}
        <thead >
            <tr>
                <th className='bg-white'>
                    <label>
                        <input type="checkbox" className="checkbox outline-border" />
                    </label>
                </th>
                <th className='bg-white text-black-default'>Class</th>
                <th className='bg-white text-black-default'>Action</th>
            </tr>
        </thead>
        <tbody>
        {/* <!-- row 1 --> */}
        {

            data?.map(item => {
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
                            <div className="bg-white text-black-default">{item.class_name}</div>
                        </div>
                    </div>
                </td>
                <td className='bg-white flex ml-auto text-black-default cursor-pointer'>
                    <button  className='mr-5'><AiFillEdit size={30}/></button>
                    <button className='mr-5'><BsFillTrashFill size={30}/></button>
                    <button><RiBook2Fill size={30}/></button>
                </td>

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
                <MdOutlineKeyboardArrowLeft className='cursor-pointer text-black-default' size={25}/>
                <MdOutlineKeyboardArrowRight className='cursor-pointer ml-5 text-black-default' size={25}/>
            </div>
        </div>
            
     </div>
    </div>
    </div>
  )
}

export default ClassTable