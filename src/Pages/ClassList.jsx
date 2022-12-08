import React from 'react'
import ClassTable from '../Components/ClassTable'
import SearchBar from '../Components/SearchBar'
import NavbarSamping from '../Components/NavbarSamping'
import NavigationBar from '../Components/NavigationBar'
import { useState } from 'react'
import api from '../Services/api'
import { useEffect } from 'react'
import { useCookies } from 'react-cookie'
import axios from 'axios'
import PopUp from '../Components/PopUp'

const ClassList = () => {

  const [listClass, setListClass] = useState([])
  const [createListClass, setCreateListClass] = useState([])
  const [loading, setLoading] = useState(false)
  const [cookie, setCookie] = useCookies();
  const [display, setDisplay] = useState('hidden')
  const [class_name, setAddClass] = useState('')
  const [user_id, setIdUser] = useState('')

  const seePopup = () =>{
    setDisplay('block z-100')
  }
  const hiddenPopup = () =>{
    setDisplay('hidden')
  }

  const config = {
    headers: {
      Authorization: `Bearer ${cookie.token}`
    }
  };

  const getClassList = async () => {
    await api.classList(cookie.token)
      .then((response) => {
        setLoading(true)
        setListClass(response.data.data)
        setLoading(false)
      })
      .catch((error) => {
        console.log(error)
      })
  }
  const user = 2
  const parseinter = parseInt(user_id)
  const createClass = async (e) => {
    e.preventDefault()
    // await api.createClassList(cookie.token, {user, class_name})
    await axios.post(`http://34.71.210.70:80/classes`, config, {parseinter, class_name})
      .then((response) => {
        console.log(response.data.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }
  
  console.log(user, class_name)

  // const updateClass = async () => {
  //   await api. updateClassList(cookie, token)
  //     .then((response) => {
  //       setLoading(true)
  //       setListClass(response.data.data)
  //       setLoading(false)
  //     })
  //     .catch((error) => {
  //       console.log(error)
  //     })
  // }
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

  return (
    <div className='w-full max-w-screen h-screen bg-bg-primary relative'>
          <div className='p-10'>
              <SearchBar 
                title={'Class List'} description={'Create, Edit Or Delete Class'}
                button={<label htmlFor="my-modal-4" className="btn bg-alta-primary hover:bg-hover-primary border-none">Add New</label>}
                />
              {
                  listClass && loading === false ?
                  <ClassTable
                    data = {listClass}
                  />
                  :
                  <p className='text-black-default text-5xl'>Loading</p>
              }
          </div>
          {/* <PopUp onSubmitHandler={fungsi tambah class} /> */}
          <PopUp />
    </div>
  )
}

export default ClassList