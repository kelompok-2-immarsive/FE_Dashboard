import React from 'react';

const DetailMentee = ({fullname, gender, address, home_address, emergency_name, emergency_phone, emergency_relation, category, major, graduate}) => {
    return (
        <div>
            <h1 className='text-2xl font-bold'>Personal Details</h1>
            <div className='grid grid-cols-2 gap-6'>
                <div className='mb-3'>
                    <p>Full Name</p>
                    <p>{fullname}</p>
                </div>
                <div className='mb-3'>
                    <p>Gender</p>
                    <p>{gender}</p>
                </div>
                <div className='mb-3'>
                    <p>Address Now</p>
                    <p>{address}</p>
                </div>
                <div className='mb-3'>
                    <p>Home Address</p>
                    <p>{home_address}</p>
                </div>
            </div>
            <h1 className='text-2xl font-bold'>Emergency Contacts</h1>
            <div className='grid grid-cols-2 gap-6'>
                <div className='mb-3'>
                    <p>Name</p>
                    <p>{emergency_name}</p>
                </div>
                <div className='mb-3'>
                    <p>Phone</p>
                    <p>{emergency_phone}</p>
                </div>
                <div className='mb-3'>
                    <p>Relation</p>
                    <p>{emergency_relation}</p>
                </div>
            </div>
            <h1 className='text-2xl font-bold'>Education Data</h1>
            <div className='grid grid-cols-2 gap-6'>
                <div className='mb-3'>
                    <p>Category</p>
                    <p>{category}</p>
                </div>
                <div className='mb-3'>
                    <p>Major</p>
                    <p>{major}</p>
                </div>
                <div className='mb-3'>
                    <p>Graduate</p>
                    <p>{graduate}</p>
                </div>
            </div>
        </div>
    );
}

export default DetailMentee;
