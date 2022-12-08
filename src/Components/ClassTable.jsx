import React from 'react'
import {RiBook2Fill} from 'react-icons/ri'
import {BsFillTrashFill} from 'react-icons/bs'
import {AiFillEdit} from 'react-icons/ai'
import {MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowLeft} from 'react-icons/md'
import EditPopUp from './EditPopUp'
import { useState } from 'react'
import { useEffect } from 'react'
import api from '../Services/api'
import { useCookies } from 'react-cookie'


const ClassTable = ({data, disabled, paginateFront, paginateBack, onUpdateClass}) => {

    const [className, setClassName] = useState('')
    const [cookie, setCookie] = useCookies()
    const userId = parseInt(cookie.user_id)

    const updateClass = async (id) => {
        await api.updateClassList(cookie.token, id, {userId, className})
          .then((response) => {
            alert("Data Berhasil Di Ubah")
          })
          .catch((error) => {
            console.log(error)
          })
    }
    
      const onSubmitEditClass = (id) => {
        e.preventDefault()
        updateClass(id)
        // setEditClass('')
        // setClose('my-modal-5')
        console.log(className)
      }

  return (
    <div>
        <div className="overflow-x-auto max-w-[1600px] mx-auto mt-10 rounded-xl bg-white px-5">
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
                <button className='mr-5'> <label className='cursor-pointer' htmlFor="my-modal-5"><AiFillEdit size={30}/></label> </button>
                <button className='mr-5'><BsFillTrashFill size={30}/></button>
                <button><RiBook2Fill size={30}/></button>
                </td>
                <EditPopUp
                 editClass={className === ''? item.class_name : className}
                 setClass={(e) => setClassName(e.target.value)}
                 onSubmitHandler={(e) => onSubmitEditClass( item.id)}
              />
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
                <button onClick={() => paginateBack()} className='cursor-pointer text-black-default' size={25}><MdOutlineKeyboardArrowLeft/></button>
                <button disabled={disabled} onClick={() => paginateFront()} className='cursor-pointer ml-5 text-black-default' size={25}><MdOutlineKeyboardArrowRight/></button>
            </div>
        </div>
            
     </div>
    </div>
    </div>
  )
}

export default ClassTable