import React from 'react'
import { useEffect } from 'react'
import TableList from '../Components/TableList'
import SearchBar from '../Components/SearchBar'
import api from '../Services/api'
import { useState } from 'react'
import { useCookies } from 'react-cookie'
import { useNavigate, Link } from 'react-router-dom'


const MenteeList = () => {
  const [listMentee, setlistMentee] = useState([])
  const [loading, setLoading] = useState(false)
  const [classList, setClasslist] = useState()
  const [cookie, setCookie] = useCookies();
  const navigate = useNavigate()
  const [userData, setUserData] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [userPerPage, setUserPerPage] = useState(5)

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

  const getClass = async() => {
    await api.getAllClass(cookie.token)
    .then(response => setClasslist(response.data.data))
    .catch(err => console.log(err))
  }

  const searchMentee = async(menteeName) => {
    await api.getMenteeByName(cookie.token, menteeName)
    .then(response => console.log(response.data))
    .catch(err => console.log(err))
  }

  const goEdit = (data) => {
    navigate('/mentee/edit', {
      state : { data : data}
    })
  }

  const goDetail = (data) => {
    navigate('/mentee/detail', {
      state : { data : data}
    })
  }
  const deleteMentee = async(idMentee) => {
    await api.deleteMentee(cookie.token, idMentee)
    .then(response =>{
      console.log(response)
      alert('Data berhasil Diahapus')
      getMenteeList()
    })
    .catch(err => {
      console.log(err)
      alert('Data gagal dihapus')
    })
  }

  const lastUserIndex = currentPage * userPerPage
  const firstUserIndex = lastUserIndex - userPerPage
  const currentUser = listMentee?.slice(firstUserIndex, lastUserIndex)
  const disabled = currentPage === Math.ceil(listMentee?.length / userPerPage) ? true : false;
  const disableBack = currentPage === 1 ? true : false

  useEffect(() => {
    getMenteeList();
    getClass();
  }, [])
  
  return (

    <div className='p-10'>
      <SearchBar
        title={'Mentee List'} description={'Create, Edit Or Delete Mentees'}
        button={<Link to="/mentee/add" className="btn bg-alta-primary hover:bg-hover-primary text-white">Add New</Link>} onSearch={(keyword) => searchMentee(keyword)}
      />

      <div className='mt-20'>
        {
          currentUser && loading === false ?
            <TableList
              data={currentUser} disableBack={disableBack}
              paginateBack={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
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