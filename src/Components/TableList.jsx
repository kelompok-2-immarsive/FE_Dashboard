import React from 'react'
import { useNavigate } from 'react-router-dom'
import {RiBook2Fill} from 'react-icons/ri'
import {BsFillTrashFill} from 'react-icons/bs'
import {AiFillEdit} from 'react-icons/ai'
import {MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowLeft} from 'react-icons/md'


const TableList = ({data, paginateFront, paginateBack, disabled,disableBack, classList ,edit, detail, delMentee}) => {
    const navigate = useNavigate()
  return (
    <div>
        <div className="overflow-x-auto max-w-[1600px] mx-auto bg-white px-5 rounded-xl capitalize">
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
                {classList &&
                    classList.map((kelas) => {
                        if(kelas.class_id === mentee.class_id){
                            return <td className='bg-white text-black-default'>{kelas.class_name}<br/></td>
                        }
                    })
                }
                <td className='bg-white text-black-default'>{mentee.mentee_status || '-'}</td>
                <td className='bg-white text-black-default'>{mentee.category}</td>
                <td className='bg-white text-black-default'>{mentee.gender}</td>
                <td className='bg-white text-alta-primary cursor-pointer'
                    onClick={() => detail(mentee)}
                ><RiBook2Fill size={30}/></td>
                <td className='bg-white text-class-active cursor-pointer'
                    onClick={() => edit(mentee)}
                    ><AiFillEdit size={30}/></td>
                <td className='bg-white text-alta-secondary cursor-pointer'
                    onClick={() => delMentee(mentee.id_mantee)}
                ><BsFillTrashFill size={30}/></td>
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
                {/* <MdOutlineKeyboardArrowLeft onClick={() => paginateBack()} className='cursor-pointer text-black-default' size={25}/> */}
                <button disabled={disableBack} onClick={() => paginateBack()}><MdOutlineKeyboardArrowLeft className={`cursor-pointer ml-5 ${disableBack ? `text-grey-default` : `text-black-default`} `} size={25}/></button>
                <button disabled={disabled} onClick={() => paginateFront()}><MdOutlineKeyboardArrowRight className={`cursor-pointer ml-5 ${disabled ? `text-grey-default` : `text-black-default`} `} size={25}/></button>
            </div>
        </div>
            
     </div>
    </div>
    </div>
  )
}

export default TableList