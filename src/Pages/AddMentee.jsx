import React from 'react'
import { FaArrowLeft } from 'react-icons/fa';
import Input from '../Components/Input';
import Select from '../Components/Select';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../Services/api';
import { useCookies } from 'react-cookie';
import { useEffect } from 'react';

const AddMentee = () => {
  const [fullname, setFullname] = useState('')
  const [address, setAddress] = useState('')
  const [homeAddress, setHomeAddress] = useState('')
  const [email, setEmail] = useState('')
  const [gender, setGender] = useState('')
  const [telegram, setTelegram] = useState('')
  const [phone, setPhone] = useState('')
  const [emergencyName, setEmergencyName] = useState('')
  const [emergencyPhone, setEmergencyPhone] = useState('')
  const [emergencyStatus, setEmergencyStatus] = useState('')
  const [category, setCategory] = useState('')
  const [major, setMajor] = useState('')
  const [graduate, setGraduate] = useState('')
  const [menteeClass, setMenteeClass] = useState('')
  const [menteeStatus, setMenteeStatus] = useState('')
  const [cookie, setCookie] = useCookies()
  const [classList, setClasslist] = useState()

  const getClass = async() => {
    await api.classList(cookie.token)
    .then(response => setClasslist(response.data.data))
    .catch(err => console.log(err))
  }

  const addMentee = async() => {
    const auth = cookie.token
    await api.addMentee(auth, {
      fullname,
      menteeClass,
      address,
      homeAddress,
      email,
      gender,
      telegram,
      phone,
      menteeStatus,
      emergencyPhone,
      emergencyName,
      emergencyStatus,
      category,
      major,
      graduate
    })
    .then(response => {
      console.log(response.data.message)
      alert('Berhasil Ditambahkan')
    })
    .catch(err => {
      console.log(err)
      alert('Gagal Ditambahkan')
    })
  }

  const handleSubmit = (e) => {
    addMentee()
    e.preventDefault()
    setFullname('')
    setMenteeClass('')
    setAddress(''),
    setHomeAddress(''),
    setEmail(''),
    setGender(''),
    setTelegram(''),
    setPhone(''),
    setMenteeStatus(''),
    setEmergencyPhone(''),
    setEmergencyName(''),
    setEmergencyStatus(''),
    setCategory(''),
    setMajor(''),
    setGraduate('')
  }

  useEffect(() => {
    getClass()
  },[])

  return (
    <div className='mt-5'>
      <h1 className='text-4xl font-medium  text-alta-primary'>Add Mentee</h1>
      <Link to='/mentee' className='text-alta-primary hover:text-hover-secondary w-[150px] flex items-center justify-between p-3 cursor-pointer'><FaArrowLeft /><span>Back To List</span></Link>
      <form
        className='my-10 px-10 py-8 bg-white rounded-lg border border-border-primary shadow-xl'
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className='mt-3'>
          <h1 className='font-bold text-2xl text-alta-primary'>Personal Data</h1>
          <Input label='Fullname' type='text' placeholder='Fullname' change={(e) => setFullname(e.target.value)} value={fullname} />
          <Input label='Address' type='text' placeholder='Address' change={(e) => setAddress(e.target.value)} value={address}/>
          <Input label='Home Address' type='text' placeholder='Home Address' change={(e) => setHomeAddress(e.target.value)} value={homeAddress}/>
          <Input label='Email' type='email' placeholder='email_address@mail.com' change={(e) => setEmail(e.target.value)} value={email}/>
          <div className='text-black-default flex items-center mt-2'>
            <label className='label-text text-xl w-[23%] text-black-default'>Gender</label>
            <div className='h-12 flex justify-start' id='gender'>
              <label className="label cursor-pointer">
                <input
                  type="radio" name="radio-1" className="radio border-alta-primary checked:bg-alta-primary"
                  value='male' onChange={(e) => setGender(e.target.value)}
                />
                <span className="label-text text-black-default mx-3 font-semibold">Male</span>
              </label>
              <label className="label cursor-pointer">
                <input
                  type="radio" name="radio-1" className="radio border-alta-primary checked:bg-alta-primary"
                  value='female' onChange={(e) => setGender(e.target.value)}
                />
                <span className="label-text-black-default mx-3 font-semibold">Female</span>
              </label>
            </div>
          </div>
          <Input label='Telegram' type='text' placeholder='@username' change={(e) => setTelegram(e.target.value)} value={telegram}/>
          <Input
            label='Phone' type='tel' placeholder='0812-3456-7890' value={phone}
            pattern="[0-9]{4}-[0-9]{4}-[0-9]{4}" change={(e) => setPhone(e.target.value)} />
        </div>
        <div className='mt-3'>
          <h1 className='font-bold text-2xl text-alta-primary'>Emergency Data</h1>
          <Input label='Name' type='text' placeholder='Fullname' change={(e) => setEmergencyName(e.target.value)} value={emergencyName}/>
          <Input
            label='Phone' type='tel' placeholder='0812-3456-7890' pattern="[0-9]{4}-[0-9]{4}-[0-9]{4}"
            change={(e) => setEmergencyPhone(e.target.value)} value={emergencyPhone}/>
          <Select
            label='Status' option={['Saudara Kandung', 'Orangtua', 'Kakek Nenek', 'Saudara Orangtua']}
            change={(e) => setEmergencyStatus(e.target.value)} value={emergencyStatus}
          />
        </div>
        <div className='mt-3'>
          <h1 className='font-bold text-2xl text-alta-primary'>Education Data</h1>
          <div className='flex items-center mt-2'>
            <label className='label-text text-xl w-[23%] text-black-default'>Type</label>
            <div className='h-12 flex justify-start' id='gender'>
              <label className="label cursor-pointer mr-3">
                <input
                  type="radio" name="radio-2" className="radio border-alta-primary checked:bg-alta-primary"
                  value='informatics' onChange={(e) => setCategory(e.target.value)}
                />
                <span className="label-text text-black-default mx-3 font-semibold">Informatics</span>
              </label>
              <label className="label cursor-pointer">
                <input
                  type="radio" name="radio-2" className="radio border-alta-primary checked:bg-alta-primary"
                  value='non-informatics' onChange={(e) => setCategory(e.target.value)}
                />
                <span className="label-text text-black-default mx-3 font-semibold">Non Informatics</span>
              </label>
            </div>
          </div>
          <Input label='Major' type='text' placeholder='S1' change={(e) => setMajor(e.target.value)} value={major}/>
          <Input label='Graduate' type='date' placeholder='Graduate' change={(e) => setGraduate(e.target.value)} value={graduate}/>
        </div>
        <div className='mt-3'>
          <h1 className='font-bold text-2xl text-alta-primary'>Class Info</h1>
          <Select
            label='Status' option={['Active', 'Graduate', 'Placement']}
            change={(e) => setMenteeStatus(e.target.value)}
            value={menteeStatus}
          />
          <div className='flex items-center mt-2'>
            <label className='label-text text-xl w-[30%] text-black-default'>Class</label>
            <div className='w-full'>
            <select className="select border-alta-primary w-full bg-white text-alta-primary" onChange={(e) => setMenteeClass(e.target.value)}>
                {classList &&
                    classList.map( (opt,index) => {
                        return <option value={opt.class_id} key={index}>{opt.class_name}</option>
                    })
                }
            </select>
            </div>
        </div>
      </div>
        <div className='flex justify-end mt-10'>
          <button className='btn bg-alta-secondary border-none hover:bg-hover-secondary mx-3 text-white'>Cancel</button>
          <button 
            className='btn bg-alta-primary border-none hover:bg-hover-primary mx-3 text-white' type='submit'
            // onClick={() => addMentee()}
            >Add Mentee</button>
        </div>
      </form>
    </div>
  )
}

export default AddMentee