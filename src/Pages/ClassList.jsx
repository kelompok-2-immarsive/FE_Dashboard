import React from 'react'
import ClassTable from '../Components/ClassTable'
import SearchBar from '../Components/SearchBar'
import NavbarSamping from '../Components/NavbarSamping'
import NavigationBar from '../Components/NavigationBar'
import { useState } from 'react'
import api from '../Services/api'
import { useEffect } from 'react'

const MenteeList = () => {

  const [listClass, setlistClass] = useState([])
  const [loading, setLoading] = useState(false)

  const getListClass = async () => {
    await api.classList()
    .then((response) => {
      setLoading(true)
      console.log(response.data.data)
      setlistClass(response.data.data)
      setLoading(false)

    })
    .catch((error) => {
      console.log(error)
    })
  }

  useEffect(() => {
    getListClass()
  }, [])



  return (
    <div className='w-full max-w-screen h-screen bg-bg-primary'>
          <div className='p-10'>
              <SearchBar title={'Class List'} description={'Create, Edit Or Delete Class'}/>
              {
                  listClass && loading === false ?
                  <ClassTable
                    data = {listClass}
                  />
                  :
                  <p className='text-black-default text-5xl'>Loadingg</p>
              }
              
          </div>
    </div>
  )
}

export default MenteeList