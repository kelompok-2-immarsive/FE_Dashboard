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

const ClassList = () => {

  const [listClass, setListClass] = useState([])
  const [loading, setLoading] = useState(false)
  const [cookie, setCookie] = useCookies();

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
    <div className='p-10'>
          <SearchBar />
          {
            listClass && loading === false ?
              <ClassTable
                data={listClass}
              />
              :
              <p>Loadingg</p>
          }
    </div>
  )
}

export default ClassList