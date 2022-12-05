import React from 'react'
import logo from '../assets/logo-ALTA-v2@2x 1.png'
import LoginImage from '../assets/LoginImage.png'

const Login = () => {
  return (
    <div className='w-full h-screen bg-alta-primary px-16'>
        <div className='py-7'>
            <img src={logo} className='w-[147px]'/>
        </div>
        <div className='flex justify-between'>
            <div className='w-[50vw] h-full text-white font-semibold px-10'>
                <h1 className='text-[64px]'>Welcome Back</h1>
                <p className='text-2xl'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has</p>
                <img src={LoginImage} alt="LoginImage" className='h-[375px] w-[571px]'/>
            </div>
            <div className='w-[50vw]'>
                <div className="card w-[547px] bg-white text-alta-primary p-16">
                    <h1 className='text-6xl font-semibold'>Login</h1>
                    <p>Please enter your email and password</p>
                    <div className="form-control w-full max-w-xs text-alta-primary">
                        <label className="label">
                            <span className="label-text text-alta-primary">Email</span>
                        </label>
                        <input type="text" placeholder="" className="input border-alta-primary w-full max-w-xs bg-white caret-alta-primary" />
                    </div>
                    <div className="form-control w-full max-w-xs text-alta-primary">
                        <label className="label">
                            <span className="label-text text-alta-primary">Password</span>
                        </label>
                        <input type="text" placeholder="Type here" className="input border-alta-primary w-full max-w-xs bg-white caret-alta-primary" />
                    </div>
                    <button className='btn bg-alta-secondary hover:bg-hover-secondary text-white'>Login</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login