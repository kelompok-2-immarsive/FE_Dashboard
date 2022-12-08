import React from 'react'
import logo from '../assets/logo-ALTA-v2@2x 1.png'
import {AiOutlineHome, AiOutlineUser} from 'react-icons/ai'
import {TbUsers} from 'react-icons/tb'
import {BiChalkboard} from 'react-icons/bi'
import { Link } from 'react-router-dom';

const NavbarSamping = ({index}) => {
  return (
    <div>
      <div className='bg-alta-primary max-w-[280px] min-h-screen max-h-full h-full w-[300px]'>
        <Link to='/'>
          <img src={logo} alt="Logo" className='mx-auto py-10' />
        </Link>

        <div className={`max-w-[80%] mx-auto rounded-xl ${index === 'dashboard' && 'bg-active'} cursor-pointer`}>
          <Link to='/' className='mt-5 w-[120px] p-2 flex'>
            <div className='align-middle'>
              <AiOutlineHome className='text-white' size={40}/>
            </div>
            <div className='align-middle py-3 pl-3'>
              <label className='text-white font-bold' htmlFor="">Home</label>
            </div>
          </Link>
        </div>

        <div className={`max-w-[80%] mx-auto rounded-xl ${index === 'users' && 'bg-active'} cursor-pointer`}>
          <Link to='/users' className='mt-5 w-[120px] p-2 flex'>
            <div className='align-middle'>
              <AiOutlineUser className='text-white' size={40}/>
            </div>
            <div className='align-middle py-3 pl-3'>
              <label className='text-white font-bold' htmlFor="">Users</label>
            </div>
          </Link>
        </div>
        <div className='ruler-bawah'></div>

        <div className={`max-w-[80%] mx-auto rounded-xl ${index === 'mentee' && 'bg-active'} cursor-pointer`}>
          <Link to='/mentee' className='mt-5 w-[120px] p-2 flex'>
            <div className='align-middle'>
              <TbUsers className='text-white' size={40}/>
            </div>
            <div className='align-middle py-3 pl-3'>
              <label className='text-white font-bold' htmlFor="">Mentee</label>
            </div>
          </Link>
        </div>

        <div className={`max-w-[80%] mx-auto rounded-xl ${index === 'class' && 'bg-active'} cursor-pointer`}>
          <Link to='/class' className='mt-5 w-[120px] p-2 flex'>
            <div className='align-middle'>
              <BiChalkboard className='text-white' size={40}/>
            </div>
            <div className='align-middle py-3 pl-3'>
              <label className='text-white font-bold' htmlFor="">Class</label>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NavbarSamping