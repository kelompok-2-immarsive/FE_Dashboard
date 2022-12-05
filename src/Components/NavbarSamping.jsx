import React from 'react'
import logo from '../assets/logo-ALTA-v2@2x 1.png'
import {AiOutlineHome, AiOutlineUser} from 'react-icons/ai'
import {TbUsers} from 'react-icons/tb'
import {BiChalkboard} from 'react-icons/bi'

const NavbarSamping = () => {
  return (
    <div>
      <div className='bg-alta-primary max-w-[280px] h-screen'>
        <div>
          <img src={logo} alt="Logo" className='mx-auto py-10' />
        </div>

        <div className='max-w-[80%] mx-auto rounded-xl bg-active cursor-pointer'>
          <div className='mt-10 w-[120px] p-2 flex'>
            <div className='align-middle'>
              <AiOutlineHome className='text-white' size={40}/>
            </div>
            <div className='align-middle py-3 pl-3'>
              <label className='text-white font-bold' htmlFor="">Home</label>
            </div>
          </div>
        </div>

        <div className='max-w-[80%] mx-auto rounded-xl cursor-pointer'>
          <div className='mt-10 w-[120px] p-2 flex'>
            <div className='align-middle'>
              <AiOutlineUser className='text-white' size={40}/>
            </div>
            <div className='align-middle py-3 pl-3'>
              <label className='text-white font-bold' htmlFor="">Users</label>
            </div>
          </div>
          <div className='ruler-bawah'></div>
        </div>

        <div className='max-w-[80%] mx-auto rounded-xl cursor-pointer'>
          <div className='mt-10 w-[120px] p-2 flex'>
            <div className='align-middle'>
              <TbUsers className='text-white' size={40}/>
            </div>
            <div className='align-middle py-3 pl-3'>
              <label className='text-white font-bold' htmlFor="">Mentee</label>
            </div>
          </div>
        </div>

        <div className='max-w-[80%] mx-auto rounded-xl cursor-pointer'>
          <div className='mt-10 w-[120px] p-2 flex'>
            <div className='align-middle'>
              <BiChalkboard className='text-white' size={40}/>
            </div>
            <div className='align-middle py-3 pl-3'>
              <label className='text-white font-bold' htmlFor="">Class</label>
            </div>
          </div>
        </div>


        
      </div>
    </div>
  )
}

export default NavbarSamping