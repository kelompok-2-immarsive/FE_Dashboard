import React from 'react'
import TableList from '../Components/TableList'
import SearchBar from '../Components/SearchBar'

const MenteeList = () => {
  return (
    <div className='w-full max-w-screen h-screen bg-bg-primary'>
        <div className='p-10'>
            <SearchBar/>

            <div className='mt-20'>
                <TableList/>
            </div>
            

        </div>
    </div>
  )
}

export default MenteeList