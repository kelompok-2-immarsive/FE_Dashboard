import React from 'react'
import { useEffect } from 'react'
import TableList from '../Components/TableList'
import SearchBar from '../Components/SearchBar'
import api from '../Services/api'
import { useState } from 'react'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'


const MenteeList = () => {
  const [listMentee, setlistMentee] = useState([])
  const [loading, setLoading] = useState(false)
  const [cookie, setCookie] = useCookies();
  const [userData, setUserData] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [userPerPage, setUserPerPage] = useState(2)

  const getMenteeList = async () => {
    await api.tableMenteeList(cookie.token)
      .then((response) => {
        setLoading(true)
        setlistMentee(response.data.data)
        setLoading(false)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const navigate = useNavigate()


  const lastUserIndex = currentPage * userPerPage
  const firstUserIndex = lastUserIndex - userPerPage
  const currentUser = listMentee?.slice(firstUserIndex, lastUserIndex)
  // const paginateFront = () => setCurrentPage(currentPage + 1);
  // const paginateBack = () => setCurrentPage(currentPage - 1);
  const disabled = currentPage == listMentee?.length/userPerPage ? true : false;

  useEffect(() => {
    getMenteeList()
  }, [])

  return (

    <div className='p-10'>
      <SearchBar
        title={'Mentee List'} description={'Create, Edit Or Delete Mentees'}
        add={() => navigate('/mentee/add')}
      />

      <div className='mt-20'>
        {
          currentUser && loading === false ?
            <TableList
              data={currentUser}
              paginateBack={() => setCurrentPage(currentPage - 1)}
              paginateFront={() => setCurrentPage(currentPage + 1)}
              disabled={disabled}

            />
            :
            <p className='text-7xl text-black-default'>Loading</p>
        }

      </div>
    </div>
  )
}

export default MenteeList