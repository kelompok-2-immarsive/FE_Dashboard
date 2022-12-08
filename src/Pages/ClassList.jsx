import React from 'react'
import ClassTable from '../Components/ClassTable'
import SearchBar from '../Components/SearchBar'
import { useState } from 'react'
import api from '../Services/api'
import { useEffect } from 'react'
import { useCookies } from 'react-cookie'
import PopUp from '../Components/PopUp'
import EditPopUp from '../Components/EditPopUp'

const ClassList = () => {

  const [listClass, setListClass] = useState([])
  const [loading, setLoading] = useState(false)
  const [cookie, setCookie] = useCookies();
  const [display, setDisplay] = useState('hidden')
  const [class_name, setAddClass] = useState('')
  const [className, setEditClass] = useState('')
  const user_id = parseInt(cookie.user_id);
  const [currentPage, setCurrentPage] = useState(1)
  const [userPerPage, setUserPerPage] = useState(5)


  const getClassList = async () => {
    await api.classList(cookie.token)
      .then((response) => {
        setLoading(true)
        setListClass(response.data.data)
        console.log(response.data.data)
        setLoading(false)
      })
      .catch((error) => {
        console.log(error)
      })
  }


  const createClass = async () => {
    await api.createClassList(cookie.token, {user_id, class_name})
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
      })
    
  }
  
  const onSubmitAddClass = (e) => {
    e.preventDefault();
    setAddClass('');
    createClass();
    setClose('my-modal-4');
  }

  const updateClass = async () => {
    await api. updateClassList(cookie.token, {user_id, class_name})
      .then((response) => {
        setListClass(response.data.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const onSubmitEditClass = (e) => {
    e.preventDefault()
    setEditClass('')
    updateClass()
    // setClose('my-modal-5')
    console.log(className)
  }
  
  // const deleteClass = async () => {
  //   await api. deleteClassList(cookie, token)
  //     .then((response) => {
  //       setLoading(true)
  //       setListClass(response.data.data)
  //       setLoading(false)
  //     })
  //     .catch((error) => {
  //       console.log(error)
  //     })
  // }


  useEffect(() => {
    getClassList()
  }, []);

  const lastUserIndex = currentPage * userPerPage
  const firstUserIndex = lastUserIndex - userPerPage
  const currentUser = listClass?.slice(firstUserIndex, lastUserIndex)
  const disabled = currentPage === Math.ceil(listClass?.length / userPerPage) ? true : false;

  return (
    <div className='w-full max-w-screen h-screen bg-bg-primary relative'>
          <div className='p-10'>
              <SearchBar 
                title={'Class List'} description={'Create, Edit Or Delete Class'}
                button={<label htmlFor="my-modal-4" className="btn bg-alta-primary hover:bg-hover-primary border-none">Add New</label>}
                />
              {
                  currentUser && loading === false ?
                  <ClassTable
                    data = {currentUser}
                    paginateBack={() => setCurrentPage(currentPage - 1)}
                    paginateFront={() => setCurrentPage(currentPage + 1)}
                    disabled={disabled}
                    onUpdateClass={(e) => onSubmitEditClass(e)}
                  />
                  :
                  <p className='text-black-default text-5xl'>Loading</p>
              }
          </div>
          <PopUp onSubmitHandler={(e) => onSubmitAddClass(e)} addClass={class_name} setClass={(e) => setAddClass(e.target.value)} />


          {/* <PopUp /> */}
    </div>
  )
}

export default ClassList