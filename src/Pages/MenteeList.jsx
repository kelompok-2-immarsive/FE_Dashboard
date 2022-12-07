import React from 'react'
import { useEffect } from 'react'
import TableList from '../Components/TableList'
import SearchBar from '../Components/SearchBar'
import api from '../Services/api'
import { useState } from 'react'
import { useCookies } from 'react-cookie'
import axios from 'axios'

const MenteeList = () => {
  const [listMentee, setlistMentee] = useState([])
  const [loading, setLoading] = useState(false)
  const [cookie, setCookie] = useCookies();

  const config = {
    headers: {
      Authorization: `Bearer ${cookie.token}`
    }
};

  const getMenteeList = async () =>{
    await axios.get('http://35.202.68.77:80/classes', config)
    .then((response) =>{
      setLoading(true)
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
    
        <div className='p-10'>
            <SearchBar/>

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
  )
}

export default MenteeList