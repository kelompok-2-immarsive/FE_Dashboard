import React from 'react'
import { useEffect } from 'react'
import TableList from '../Components/TableList'
import SearchBar from '../Components/SearchBar'
import api from '../Services/api'
import { useState } from 'react'
import { useCookies } from 'react-cookie'
import { Link, useNavigate } from 'react-router-dom'


const MenteeList = () => {
  const [listMentee, setlistMentee] = useState([])
  const [loading, setLoading] = useState(false)
  const [classList, setClasslist] = useState()
  const [cookie, setCookie] = useCookies();
  const navigate = useNavigate()
  const [currentPage, setCurrentPage] = useState(1)
  const [userPerPage, setUserPerPage] = useState(5)

  const getClass = async() => {
    await api.classList(cookie.token)
    .then(response => setClasslist(response.data.data))
    .catch(err => console.log(err))
  }
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



  const lastUserIndex = currentPage * userPerPage
  const firstUserIndex = lastUserIndex - userPerPage
  const currentUser = listMentee?.slice(firstUserIndex, lastUserIndex)
  const disabled = currentPage == listMentee?.length/userPerPage ? true : false;

  useEffect(() => {
    getMenteeList()
    getClass()
  }, [])

  return (

    <div className='p-10'>
      <SearchBar
        title={'Mentee List'} description={'Create, Edit Or Delete Mentees'}
        add={() => navigate('/mentee/add')} onSearch={(keyword) => searchMentee(keyword)}
      />

      <div className='mt-20'>
        {
          currentUser && loading === false ?
            <TableList
              data={currentUser}
              paginateBack={() => setCurrentPage(currentPage - 1)}
              paginateFront={() => setCurrentPage(currentPage + 1)}
              disabled={disabled} classList={classList}
                edit={(data) => goEdit(data)}
                detail={(data) => goDetail(data)}
                delMentee={(id) => deleteMentee(id)}
            />
            :
            <p className='text-7xl text-black-default'>Loading</p>
        }

      </div>
    </div>
  )
}

export default MenteeList