import React from 'react'
import { useState, useEffect } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import Select from '../Components/Select';
import { Link, useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom'
import { useCookies } from 'react-cookie';
import api from '../Services/api';
import InputEdit from '../Components/InputEdit';

const EditMentee = () => {
    const location = useLocation()
    const data = location?.state?.data
    console.log(location?.state?.data)
    const [fullname, setFullname] = useState(data.name)
    const [id, setId] = useState(data.id_mantee)
    const [address, setAddress] = useState(data.address)
    const [homeAddress, setHomeAddress] = useState(data.home_address)
    const [email, setEmail] = useState(data.email)
    const [gender, setGender] = useState(data.gender)
    const [telegram, setTelegram] = useState(data.telegram)
    const [phone, setPhone] = useState(data.phone)
    const [emergencyName, setEmergencyName] = useState(data.emergency_name)
    const [emergencyPhone, setEmergencyPhone] = useState(data.emergency_phone)
    const [emergencyStatus, setEmergencyStatus] = useState(data.emergency_relation)
    const [category, setCategory] = useState(data.category)
    const [major, setMajor] = useState(data.major)
    const [graduate, setGraduate] = useState(data.graduate)
    const [menteeClass, setMenteeClass] = useState(data.class_id)
    const [menteeStatus, setMenteeStatus] = useState(data.mentee_status)
    const [cookie, setCookie] = useCookies()
    const [classList, setClasslist] = useState()
    const navigate = useNavigate()
  
    const dataToUpdate = {}

    const getClass = async() => {
      await api.classList(cookie.token)
      .then(response => setClasslist(response.data.data))
      .catch(err => console.log(err))
    }

    const editMentee = async() => {
        await api.editMentee(cookie.token, parseInt(id), {
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
            alert('Data Berhasil Diupdate')
            navigate('/mentee')
        })
        .catch(err => {
            console.log(response.data.message)
            alert('Data Gagal Diupdate')
            navigate('/mentee')
         })
    }
  
    const handleSubmit = (e) => {
      editMentee()
      e.preventDefault()
    }
  
    useEffect(() => {
      getClass()
    },[])

    console.log(fullname)
    console.log(data.id_mantee)

  return (
    <div className='mt-5'>
      <h1 className='text-4xl font-medium  text-alta-primary'>Edit Mentee</h1>
      <Link to='/mentee' className='text-alta-primary hover:text-hover-secondary w-[150px] flex items-center justify-between p-3 cursor-pointer'><FaArrowLeft /><span>Back To List</span></Link>
      <form
        className='my-10 px-10 py-8 bg-white rounded-lg border border-border-primary shadow-xl'
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className='mt-3'>
          <h1 className='font-bold text-2xl text-alta-primary'>Personal Data</h1>
          <InputEdit 
            label='Fullname' placeholder={fullname} type='text'
            change={(e) => setFullname(e.target.value)} value={fullname}/>
          <InputEdit label='Address' placeholder={address} type='text' change={(e) => setAddress(e.target.value)} value={address}/>
          <InputEdit label='Home Address' placeholder={homeAddress} type='text'change={(e) => setHomeAddress(e.target.value)} value={homeAddress}/>
          <InputEdit label='Email' placeholder={email} type='email' change={(e) => setEmail(e.target.value)} value={email}/>
          <div className='text-black-default flex items-center mt-2'>
            <label className='label-text text-xl w-[23%] text-black-default'>Gender</label>
            {/* <p className='label-text text-xl w-[30%] text-alta-primary'>{gender}</p> */}
            <div className='h-12 flex justify-start' id='gender' value={gender}>
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
          <InputEdit label='Telegram' placeholder={telegram} type='text' change={(e) => setTelegram(e.target.value)} value={telegram}/>
          <InputEdit
            label='Phone' type='tel' placeholder={phone}
            pattern="[0-9]{4}-[0-9]{4}-[0-9]{4}" change={(e) => setPhone(e.target.value)} />
            </div>
            <div className='mt-3'>
            <h1 className='font-bold text-2xl text-alta-primary'>Emergency Data</h1>
            <InputEdit label='Name'placeholder={emergencyName} type='text'change={(e) => setEmergencyName(e.target.value)} value={emergencyName}/>
            <InputEdit
                label='Phone' placeholder={emergencyPhone} type='tel' pattern="[0-9]{4}-[0-9]{4}-[0-9]{4}"
                change={(e) => setEmergencyPhone(e.target.value)} value={phone}/>
            <Select
                label='Status' option={['Saudara Kandung', 'Orangtua', 'Kakek Nenek', 'Saudara Orangtua']}
                change={(e) => setEmergencyStatus(e.target.value)} value={emergencyStatus} placeholder={emergencyStatus}
            />
            </div>
            <div className='mt-3'>
            <h1 className='font-bold text-2xl text-alta-primary'>Education Data</h1>
            <div className='flex items-center mt-2'>
                <label className='label-text text-xl w-[23%] text-black-default'>Type</label>
                {/* <p className='label-text text-xl w-[30%] text-alta-primary'>{category}</p> */}
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
            <InputEdit label='Major' placeholder={major} type='text'  change={(e) => setMajor(e.target.value)} value={major}/>
            <InputEdit label='Graduate' placeholder={graduate} type='date'  change={(e) => setGraduate(e.target.value)}  value={graduate}/>
            </div>
            <div className='mt-3'>
            <h1 className='font-bold text-2xl text-alta-primary'>Class Info</h1>
            <Select
                label='Status' option={['Active', 'Graduate', 'Placement']}
                change={(e) => setMenteeStatus(e.target.value)} placeholder={menteeStatus}
            />
            <div className='flex items-center mt-2'>
                <label className='label-text text-xl w-[30%] text-black-default'>Class</label>
                {/* <p className='label-text text-xl w-[30%] text-alta-primary'>{menteeClass}</p> */}
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
                >Edit Mentee</button>
            </div>
        </form>
        </div>
  )
}

export default EditMentee