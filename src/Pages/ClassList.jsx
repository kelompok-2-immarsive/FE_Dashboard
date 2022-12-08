import React from 'react'
import SearchBar from '../Components/SearchBar'
import { useState } from 'react'
import api from '../Services/api'
import { useEffect } from 'react'
import { useCookies } from 'react-cookie'
import PopUp from '../Components/PopUp'
import EditPopUp from '../Components/EditPopUp'
import { RiBook2Fill } from 'react-icons/ri'
import { BsFillTrashFill } from 'react-icons/bs'
import { AiFillEdit } from 'react-icons/ai'
import { MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowLeft } from 'react-icons/md'

const ClassList = () => {

  const [listClass, setListClass] = useState([])
  const [loading, setLoading] = useState(false)
  const [cookie, setCookie] = useCookies();
  const [class_name, setAddClass] = useState('')
  const [close, setClose] = useState('')
  const user_id = parseInt(cookie.user_id);
  const [currentPage, setCurrentPage] = useState(1)
  const [userPerPage, setUserPerPage] = useState(5)
  const [edit, setEdit] = useState('');


  const getClassList = async () => {
    await api.getAllClass(cookie.token)
      .then((response) => {
        setLoading(true)
        setListClass(response.data.data)
        setLoading(false)
      })
      .catch((error) => {
        alert(error)
      })
  }

  const deleteClass = async (id) => {
    await api.deleteClassList(cookie.token, id)
      .then((response) => {
        alert(response.data.message)
        getClassList()
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const createClass = async () => {
    await api.createClassList(cookie.token, { user_id, class_name })
      .then((response) => {
        alert('Berhasil di tambahkan')
        getClassList();
      })
      .catch((error) => {
        alert(error)
      })

  }

  const onSubmitAddClass = (e) => {
    e.preventDefault();
    createClass();
    setAddClass('');
    setClose('my-modal-4');
  }

  const onClickEdit = async (id) => {
    sessionStorage.setItem("id", id)
    await api.getClass(cookie.token, sessionStorage.getItem('id'))
      .then(response => {
        setEdit(response.data.data.class_name)
      })
      .catch(error => {
        alert(error)
      })
  }
  
  const updateClass = async () => {
    await api.updateClassList(cookie.token, parseInt(sessionStorage.getItem("id")), { user_id, class_name })
      .then((response) => {
        alert(response)
        getClassList();
      })
      .catch((error) => {
        alert(error)
      })
  }

  const onSubmitEditClass = (e) => {
    e.preventDefault()
    updateClass()
    setAddClass('');
    setClose('my-modal-5')
    sessionStorage.removeItem('id')
  }
  
  const deleteClass = async (id) => {
    await api. deleteClassList(cookie.token, id)
      .then((response) => {
        alert("yey ke apus")
        getClassList()
      })
      .catch((error) => {
        console.log(error)
      })
  }


  useEffect(() => {
    getClassList()

  }, []);

  const lastUserIndex = currentPage * userPerPage
  const firstUserIndex = lastUserIndex - userPerPage
  const currentUser = listClass?.slice(firstUserIndex, lastUserIndex)
  const disabled = currentPage === Math.ceil(listClass?.length / userPerPage) ? true : false;
  const firstDisabled = currentPage === 1 ? true : false;

  return (
    <div className='w-full max-w-screen h-screen bg-bg-primary relative'>
      <div className='p-10'>
        <SearchBar
          title={'Class List'} description={'Create, Edit Or Delete Class'}
          button={<label htmlFor="my-modal-4" className="btn bg-alta-primary hover:bg-hover-primary border-none">Add New</label>}
        />
        {
          currentUser && loading === false ?
            <div className="overflow-x-auto max-w-[1600px] mx-auto mt-10 rounded-xl bg-white p-10">
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

                    currentUser?.map(item => {
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
                            <button className='mr-5' onClick={() => onClickEdit(item.class_id)}> <label className='cursor-pointer' htmlFor="my-modal-5"><AiFillEdit size={30} /></label> </button>
                            <button className='mr-5' onClick={() => deleteClass(item.class_id)}><BsFillTrashFill size={30} /></button>
                            <button><RiBook2Fill size={30} /></button>
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
                    <button disabled={firstDisabled} onClick={() => setCurrentPage(currentPage - 1)} className='cursor-pointer text-black-default' size={25}><MdOutlineKeyboardArrowLeft /></button>
                    <button disabled={disabled} onClick={() => setCurrentPage(currentPage + 1)} className='cursor-pointer ml-5 text-black-default' size={25}><MdOutlineKeyboardArrowRight /></button>
                  </div>
                </div>

              </div>
            </div>
            :
            <p className='text-black-default text-5xl'>Loading</p>
        }
      </div>
      <PopUp onSubmitHandler={(e) => onSubmitAddClass(e)} addClass={class_name} setClass={(e) => setAddClass(e.target.value)} />
      <EditPopUp
        editClass={class_name === '' ? edit : class_name}
        setClass={(e) => setAddClass(e.target.value)}
        onSubmitHandler={(e) => onSubmitEditClass(e)}
      />

    </div>
  )
}

export default ClassList