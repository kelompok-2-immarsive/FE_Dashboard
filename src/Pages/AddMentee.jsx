import React from 'react'
import NavbarSamping from '../Components/NavbarSamping'
import NavigationBar from '../Components/NavigationBar'
import { FaArrowLeft } from 'react-icons/fa';
import Input from '../Components/Input';
import Select from '../Components/Select';
import { useState } from 'react';

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

  const data = {
    name: fullname,
    class: menteeClass,
    address,
    home_address: homeAddress,
    email,
    gender,
    telegram,
    phone,
    mantee_status: menteeStatus,
    emergency_phone: emergencyPhone,
    emergency_name: emergencyName,
    emergency_relation: emergencyStatus,
    category,
    major,
    graduate
  }

  const addMentee = () => {
   console.log(data)
  }

  return (
    <div className='w-screen min-h-screen bg-bg-primary flex'>
        <NavbarSamping/>
        <main className='w-full bg-w px-10'>
            <NavigationBar/>
            <div className='mt-5'>
                <h1 className='text-4xl font-medium  text-alta-primary'>Add Mentee</h1>
                <a className='text-alta-primary hover:text-hover-secondary w-[150px] flex items-center justify-between p-3 cursor-pointer'><FaArrowLeft/><span>Back To List</span></a>
                <form 
                  className='my-10 px-10 py-8 bg-white rounded-lg border-2'
                  onSubmit={() => addMentee()}
                  >
                  <div className='mt-3'>
                    <h1 className='font-bold text-2xl text-alta-primary'>Personal Data</h1>
                    <Input label='Fullname' type='text' placeholder='Fullname' change={(e) => setFullname(e.target.value)}/>
                    <Input label='Address' type='text' placeholder='Address' change={(e) => setAddress(e.target.value)}/>
                    <Input label='Home Address' type='text' placeholder='Home Address' change={(e) => setHomeAddress(e.target.value)}/>
                    <Input label='Email' type='email' placeholder='email_address@mail.com' change={(e) => setEmail(e.target.value)}/>
                    <div className='text-black-default flex items-center mt-2'>
                      <label className='label-text text-xl w-[30%] text-black-default'>Gender</label>
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
                    <Input label='Telegram' type='text' placeholder='@username' change={(e) => setTelegram(e.target.value)}/>
                    <Input 
                      label='Phone' type='tel' placeholder='0812-3456-7890' 
                      pattern="[0-9]{4}-[0-9]{4}-[0-9]{4}" change={(e) => setPhone(e.target.value)}/>
                  </div>
                  <div className='mt-3'>
                    <h1 className='font-bold text-2xl text-alta-primary'>Emergency Data</h1>
                    <Input label='Name' type='text' placeholder='Fullname' change={(e) => setEmergencyName(e.target.value)}/>
                    <Input 
                      label='Phone' type='tel' placeholder='0812-3456-7890' pattern="[0-9]{4}-[0-9]{4}-[0-9]{4}"
                      change={(e) => setEmergencyPhone(e.target.value)}/>
                    <Select 
                      label='Status' option={['Saudara Kandung', 'Orangtua', 'Kakek Nenek', 'Saudara Orangtua']}
                      change={(e) => setEmergencyStatus(e.target.value)}
                      />
                  </div>
                  <div className='mt-3'>
                    <h1 className='font-bold text-2xl text-alta-primary'>Education Data</h1>
                    <div className='flex items-center mt-2'>
                      <label className='label-text text-xl w-[30%] text-black-default'>Type</label>
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
                    <Input label='Major' type='text' placeholder='S1' change={(e) => setMajor(e.target.value)}/>
                    <Input label='Graduate' type='date' placeholder='Graduate' change={(e) => setGraduate(e.target.value)}/>
                  </div>   
                 <div className='mt-3'>
                  <h1 className='font-bold text-2xl text-alta-primary'>Class Info</h1>
                  <Select 
                    label='Status' option={['Active','Graduate','Placement']}
                    change={(e) => setMenteeStatus(e.target.value)}
                    />
                  <Select 
                    label='Class' option={['Front End Engineer Batch 10','Back End Engineer Batch 13','Quality Assurance Batch 7']}
                    change={(e) => setMenteeClass(e.target.value)}
                    />
                 </div>   
                <div className='flex justify-end mt-10'>
                  <button className='btn bg-alta-secondary hover:bg-hover-secondary mx-3 text-white'>Cancel</button>
                  <button className='btn bg-alta-primary hover:bg-hover-primary mx-3 text-white' type='submit'>Add Mentee</button>
                </div>
                </form>
            </div>
        </main>
    </div>
  )
}

export default AddMentee