import React from 'react'
import NavbarSamping from '../Components/NavbarSamping'
import NavigationBar from '../Components/NavigationBar'
import { FaArrowLeft } from 'react-icons/fa';
import Input from '../Components/Input';
import Select from '../Components/Select';

const AddMentee = () => {
  return (
    <div className='w-screen min-h-screen bg-bg-primary flex'>
        <NavbarSamping/>
        <main className='w-full bg-w px-10'>
            <NavigationBar/>
            <div className='mt-5'>
                <h1 className='text-4xl font-medium  text-alta-primary'>Add Mentee</h1>
                <a className='text-alta-primary hover:text-hover-secondary w-[150px] flex items-center justify-between p-3 cursor-pointer'><FaArrowLeft/><span>Back To List</span></a>
                <form className='my-10 px-10 py-8 bg-white rounded-lg border-2'>
                  <div className='mt-3'>
                    <h1 className='font-bold text-2xl text-alta-primary'>Personal Data</h1>
                    <Input label='Fullname' type='text' placeholder='Fullname'/>
                    <Input label='Address' type='text' placeholder='Address'/>
                    <Input label='Home Address' type='text' placeholder='Home Address'/>
                    <Input label='Email' type='email' placeholder='email_address@mail.com'/>
                    <div className='text-black-default flex items-center mt-2'>
                      <label for='gender' className='label-text text-xl w-[30%] text-black-default'>Gender</label>
                      <div className='h-12 flex justify-start' id='gender'>
                        <label className="label cursor-pointer mr-3">
                          <input type="radio" name="radio-10" className="radio border-alta-primary checked:bg-alta-primary" checked />
                          <span className="label-text text-black-default mx-3 font-semibold">Male</span> 
                        </label>
                        <label className="label cursor-pointer">
                          <input type="radio" name="radio-10" className="radio border-alta-primary checked:bg-alta-primary" checked />
                          <span className="label-text-black-default mx-3 font-semibold">Female</span> 
                        </label>
                      </div>
                    </div>
                    <Input label='Telegram' type='text' placeholder='@username'/>
                    <Input label='Phone' type='tel' placeholder='0812-3456-7890' pattern="[0-9]{4}-[0-9]{4}-[0-9]{4}"/>
                  </div>
                  <div className='mt-3'>
                    <h1 className='font-bold text-2xl text-alta-primary'>Emergency Data</h1>
                    <Input label='Name' type='text' placeholder='Fullname'/>
                    <Input label='Phone' type='tel' placeholder='0812-3456-7890' pattern="[0-9]{4}-[0-9]{4}-[0-9]{4}"/>
                    <Select label='Status' option={['Saudara Kandung', 'Orangtua', 'Kakek Nenek', 'Saudara Orangtua']}/>
                  </div>
                  <div className='mt-3'>
                    <h1 className='font-bold text-2xl text-alta-primary'>Education Data</h1>
                    <div className='flex items-center mt-2'>
                      <label className='label-text text-xl w-[30%] text-black-default'>Type</label>
                      <div className='h-12 flex justify-start' id='gender'>
                        <label className="label cursor-pointer mr-3">
                          <input type="radio" name="radio-10" className="radio border-alta-primary checked:bg-alta-primary" checked />
                          <span className="label-text text-black-default mx-3 font-semibold">Informatics</span> 
                        </label>
                        <label className="label cursor-pointer">
                          <input type="radio" name="radio-10" className="radio border-alta-primary checked:bg-alta-primary" checked />
                          <span className="label-text text-black-default mx-3 font-semibold">Non Informatics</span> 
                        </label>
                      </div>
                    </div>
                    <Input label='Mayor' type='text' placeholder='S1'/>
                    <Input label='Graduate' type='date' placeholder='Graduate'/>
                  </div>   
                 <div className='mt-3'>
                  <h1 className='font-bold text-2xl text-alta-primary'>Class Info</h1>
                  <Select label='Status' option={['Active','Graduate','Placement']}/>
                  <Select label='Class' option={['Front End Engineer Batch 10','Back End Engineer Batch 13','Quality Assurance Batch 7']}/>
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