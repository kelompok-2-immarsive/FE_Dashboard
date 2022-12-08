import React, { useState } from 'react';
import { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { FaArrowLeft } from 'react-icons/fa';
import Input from '../Components/Input';
import Select from '../Components/Select';

const UpdateUser = () => {
    const [fullname, setFullname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [role, setRole] = useState('Admin')
    const [phone, setPhone] = useState('')
    const [status, setStatus] = useState('')
    const [address, setAddress] = useState('')
    const [cookie, setCookie] = useCookies();
    const location = useLocation();

    const user = location?.state?.user;
    console.log(user);

    useEffect(() => {
        const updatedUser = async () => {

        }
    }, [])

    return (
        <div>
            <div className='mt-5'>
                <h1 className='text-4xl font-medium  text-alta-primary'>Edit Users</h1>
                <Link to='/users' className='text-alta-primary hover:text-hover-secondary w-[150px] flex items-center justify-between p-3 cursor-pointer'><FaArrowLeft /><span>Back To List</span></Link>
                <form
                    className='my-10 px-10 py-8 bg-white rounded-lg border border-border-primary shadow-xl'
                    onSubmit={(e) => handleSubmit(e)}
                >
                    <div className='mt-3'>
                        <h1 className='font-bold text-2xl text-alta-primary'>Personal Data</h1>
                        <Input
                            label='Fullname'
                            type='text' placeholder='Fullname'
                            change={(e) => setFullname(e.target.value)}
                            value={user.fullname} />
                        <Input
                            label='Email'
                            type='email'
                            placeholder='email_address@mail.com'
                            value={user.email}
                            change={(e) => setEmail(e.target.value)} />
                        <Input
                            label='Phone'
                            type='tel'
                            placeholder='0812-3456-7890'
                            pattern="[0-9]{4}-[0-9]{4}-[0-9]{4}"
                            change={(e) => setPhone(e.target.value)}
                            value={user.phone} />
                        <Select
                            label='Role' option={['Admin', 'Mentor', 'Admission', 'Placement', 'Team', 'Academic']}
                            change={(e) => setRole(e.target.value)}
                            value={user.role}
                        />
                        <Input
                            label='Your Address'
                            type='text'
                            placeholder='Your Address'
                            change={(e) => setAddress(e.target.value)} 
                            value={user.address}/>
                        <Select
                            label='Status' option={['Active', 'Graduate', 'Placement']}
                            change={(e) => setStatus(e.target.value)}
                        />
                    </div>

                    <div className='flex justify-end mt-10'>
                        <button className='btn bg-alta-secondary border-none hover:bg-hover-secondary mx-3 text-white'>Cancel</button>
                        <input className='btn bg-alta-primary border-none hover:bg-hover-primary mx-3 text-white' type='submit' value={"Add User"} />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default UpdateUser;
