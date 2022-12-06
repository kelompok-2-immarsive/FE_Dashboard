import React from 'react';
import { FaUserCircle, FaPhoneAlt, FaTelegramPlane, FaMapMarkerAlt } from 'react-icons/fa';
import {GrMail} from 'react-icons/gr';

const ProfileMentee = ({fullname, mentee_class, mentee_status, address, phone, telegram, email}) => {
    return (
        <div className="card border border-border-primary">
            <div className="card-body">
                <div className='text-center'>
                    <figure className='text-7xl text-grey-default'><FaUserCircle /></figure>
                    <h1 className='text-2xl font-bold text-alta-primary'>{fullname}</h1>
                    <p className='text-grey-default text-[18px] font-medium'>name</p>
                </div>
                <div className='mx-auto'>
                    <h2 className='text-xl text-alta-primary font-bold'>Class Details</h2>
                    <p className='text-class-active'>{mentee_status}</p>
                    <p>{mentee_class}</p>
                </div>
                <div className='mx-auto'>
                    <h2 className='text-xl text-alta-primary font-bold'>Contact Details</h2>
                    <p className='flex gap-5 mt-5'><FaMapMarkerAlt className='text-3xl text-alta-primary' /> {address}</p>
                    <p className='flex gap-5 mt-5'><FaPhoneAlt className='text-3xl text-alta-primary' /> {phone}</p>
                    <p className='flex gap-5 mt-5'><FaTelegramPlane className='text-3xl text-alta-primary' /> {telegram}</p>
                    <p className='flex gap-5 mt-5'><GrMail className='text-3xl text-alta-primary' /> {email}</p>
                </div>
            </div>
        </div>
    );
}

export default ProfileMentee;
