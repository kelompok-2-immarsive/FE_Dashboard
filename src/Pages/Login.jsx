import React from 'react'
import logo from '../assets/logo-ALTA-v2@2x 1.png'
import LoginImage from '../assets/LoginImage.png'
import { FaRegEye } from 'react-icons/fa';
import { FaRegEyeSlash } from 'react-icons/fa';
import { useState } from 'react';
import api from '../Services/api';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { useEffect } from 'react';

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [seePwd, setSeePwd] = useState(false)

    const onLoginHandler = async (e) => {
        e.preventDefault();
        await api.login({ email, password })
            .then(response => {
                // setData(response.data.data);
                setCookie("name", response.data.data.name, { path: "/" });
                setCookie("token", response.data.data.token, { path: "/" });
            })
            .catch(error => {
                alert(error)
            })
    }

    return (
        <div className='w-screen min-h-screen bg-alta-primary px-10 py-3 flex flex-col justify-between'>
            <div className=''>
                <img src={logo} className='w-36 h-18' />
            </div>
            <div className='flex justify-between px-0 md:px-10 w-full'>
                <div className='w-1/2 text-white font-semibold hidden md:block p-8'>
                    <h1 className='text-5xl'>Welcome Back</h1>
                    <p className='text-xl w-full mt-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has</p>
                    <img src={LoginImage} alt="LoginImage" className='w-[90%] mt-8' />
                </div>
                <div className='grid place-items-center w-full md:w-1/2 '>
                    <div className="card w-[90%] lg:w-[70%] h-full bg-white text-alta-primary p-16">
                        <h1 className='text-5xl font-semibold'>Login</h1>
                        <p className='mt-3'>Please enter your email and password</p>
                        <form className='w-full' onSubmit={(e) => onLoginHandler(e)}>
                            <div className="form-control w-full text-alta- mt-10 text-xl">
                                <label className="label">
                                    <span className="label-text text-alta-primary">Email</span>
                                </label>
                                <input type="email" placeholder="admin@gmail.com" className="input border-alta-primary w-full bg-white caret-alta-primary" onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="form-control w-full text-alta-primary mt-5 text-xl">
                                <label className="label">
                                    <span className="label-text text-alta-primary">Password</span>
                                </label>
                                <div className='flex'>
                                    <div className="relative w-full">
                                        <div
                                            className="absolute top-3 right-3 items-center"
                                            onClick={() => setSeePwd(!seePwd)}>
                                            {seePwd ? <FaRegEye /> : <FaRegEyeSlash />}
                                        </div>
                                        <input
                                            type={seePwd ? `text` : 'password'}
                                            className="input border-alta-primary bg-white caret-alta-primary w-full caret-alta-primary"
                                            placeholder="Password"
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>
                            <button className='btn bg-alta-secondary hover:bg-hover-secondary text-white w-full mt-10'>Login</button>
                        </form>
                    </div>
                </div>
            </div>
            <p className='mt-3 text-white'>2022 &copy; Group Project 2</p>
        </div>
    )
}

export default Login