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
  const [loading, setLoading] = useState(false)
  const [cookie, setCookie] = useCookies();
  const [display, setDisplay] = useState('hidden')
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
    await axios.get('http://35.202.68.77:80/classes', config)
      .then((response) => {
        setLoading(true)
        setListClass(response.data.data)
        setLoading(false)
      })
      .catch((error) => {
        console.log(error)
      })
  }

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