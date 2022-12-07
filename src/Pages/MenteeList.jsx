import React from 'react'
import { useEffect } from 'react'
import TableList from '../Components/TableList'
import SearchBar from '../Components/SearchBar'
import api from '../Services/api'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const MenteeList = () => {
  const [listMentee, setlistMentee] = useState([])
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  
  const getMenteeList = async () =>{
    await api.tableMenteeList()
    .then((response) =>{
      setLoading(true)
      console.log(response.data.data)
      setlistMentee(response.data.data)
      setLoading(false)
    })
    .catch((error) => {
      console.log(error)
    })
  }

  useEffect(() => {
    getMenteeList()
  }, [])

  console.log(listMentee)
  return (
    <div className='w-full max-w-screen h-screen bg-bg-primary'>
        <div className='p-10'>
            <SearchBar 
              title={'Mentee List'} description={'Create, Edit Or Delete Mentees'}
              add={() => navigate('/mentee/add')}
              />

            <div className='mt-20'>
            {
              listMentee && loading === false ? 
              <TableList
               data = {listMentee}

              />
              :
              <p className='text-7xl text-black-default'>Loading</p>
            }
            </div>
            

        </div>
    </div>
  )
}

export default MenteeList