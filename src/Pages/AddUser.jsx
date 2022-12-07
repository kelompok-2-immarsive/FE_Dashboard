import React from 'react'
import { useState } from 'react'
import { FaArrowLeft } from 'react-icons/fa';
import Input from '../Components/Input';
import Select from '../Components/Select';
import { Link } from 'react-router-dom';

const AddUser = () => {
  const [fullname, setFullname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [team, setTeam] = useState('')
  const [phone, setPhone] = useState('')
  const [status, setStatus] = useState('')
  const [address, setAddress] = useState('')

  const data = {
    fullname: fullname,
    email: email,
    password: password,
    role: team,
    phone: phone,
    status: status,
    address: address,
  }

  const addUser = () => {
    console.log(data)
  }

  return (
    <div className='mt-5'>
      <h1 className='text-4xl font-medium  text-alta-primary'>Add Users</h1>
      <Link to='/users' className='text-alta-primary hover:text-hover-secondary w-[150px] flex items-center justify-between p-3 cursor-pointer'><FaArrowLeft /><span>Back To List</span></Link>
      <form
        className='my-10 px-10 py-8 bg-white rounded-lg border border-border-primary shadow-xl'
        onSubmit={() => addUser()}
      >
        <div className='mt-3'>
          <h1 className='font-bold text-2xl text-alta-primary'>Personal Data</h1>
          <Input label='Fullname' type='text' placeholder='Fullname' change={(e) => setFullname(e.target.value)} />
          <Input label='Password' type='password' placeholder='Password' change={(e) => setPassword(e.target.value)}/>
          <Input label='Email' type='email' placeholder='email_address@mail.com' change={(e) => setEmail(e.target.value)} />
          <Input
            label='Phone' type='tel' placeholder='0812-3456-7890'
            pattern="[0-9]{4}-[0-9]{4}-[0-9]{4}" change={(e) => setPhone(e.target.value)} />
          <Select
            label='Role' option={['Admin', 'Mentor', 'Admission', 'Placement', 'Team', 'Academic']}
            change={(e) => setTeam(e.target.value)}
          />   
          <Input label='Your Address' type='text' placeholder='Your Address' change={(e) => setAddress(e.target.value)} />
          <Select
            label='Status' option={['Active', 'Graduate', 'Placement']}
            change={(e) => setStatus(e.target.value)}
          />    
        </div>

        <div className='flex justify-end mt-10'>
          <button className='btn bg-alta-secondary border-none hover:bg-hover-secondary mx-3 text-white'>Cancel</button>
          <button className='btn bg-alta-primary border-none hover:bg-hover-primary mx-3 text-white' type='submit'>Add Users</button>
        </div>
      </form>
    </div>
  )
}

export default AddUser