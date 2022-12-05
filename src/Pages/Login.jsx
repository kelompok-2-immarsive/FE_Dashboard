import React from 'react'
import logo from '../assets/logo-ALTA-v2@2x 1.png'
import LoginImage from '../assets/LoginImage.png'

const Login = () => {
  return (
    <div className='w-screen min-h-screen bg-alta-primary px-10 py-3 flex flex-col justify-between'>
        <div className=''>
            <img src={logo} className='w-36 h-18'/>
        </div>
        <div className='flex justify-between px-0 md:px-10 w-full'>
            <div className='w-1/2 text-white font-semibold hidden md:block p-8'>
                <h1 className='text-5xl'>Welcome Back</h1>
                <p className='text-xl w-full mt-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has</p>
                <img src={LoginImage} alt="LoginImage" className='w-[90%] mt-8'/>
            </div>
            <div className='grid place-items-center w-full md:w-1/2 '>
                <div className="card w-[90%] lg:w-[70%] h-full bg-white text-alta-primary p-16">
                    <h1 className='text-5xl font-semibold'>Login</h1>
                    <p className='mt-3'>Please enter your email and password</p>
                    <div className="form-control w-full text-alta- mt-10 text-xl">
                        <label className="label">
                            <span className="label-text text-alta-primary">Email</span>
                        </label>
                        <input type="text" placeholder="admin@gmail.com" className="input border-alta-primary w-full bg-white caret-alta-primary" />
                    </div>
                    <div className="form-control w-full text-alta-primary mt-5 text-xl">
                        <label className="label">
                            <span className="label-text text-alta-primary">Password</span>
                        </label>
                        <input type="text" placeholder="Password" className="input border-alta-primary w-full bg-white caret-alta-primary" />
                    </div>
                    <button className='btn bg-alta-secondary hover:bg-hover-secondary text-white w-full mt-10'>Login</button>
                </div>
            </div>
        </div>
        <p className='mt-3 text-white'>2022 © Group Project 2</p>
    </div>
  )
}

export default Login