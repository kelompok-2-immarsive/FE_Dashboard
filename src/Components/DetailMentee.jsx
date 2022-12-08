import React from 'react';

const DetailMentee = ({fullname, gender, address, home_address, emergency_name, emergency_phone, emergency_relation, category, major, graduate}) => {
    return (
        <div className='text-alta-primary'>
            <h1 className='text-2xl font-bold'>Personal Details</h1>
            <div className='grid grid-cols-2 gap-x-6 gap-y-2 border-b border-border-primary py-4'>
                <div className=''>
                    <p>Full Name</p>
                    <p>{fullname}</p>
                </div>
                <div className=''>
                    <p>Gender</p>
                    <p>{gender}</p>
                </div>
                <div className=''>
                    <p>Address Now</p>
                    <p>{address}</p>
                </div>
                <div className=''>
                    <p>Home Address</p>
                    <p>{home_address}</p>
                </div>
            </div>
            <h1 className='text-2xl font-bold mt-5'>Emergency Contacts</h1>
            <div className='grid grid-cols-2 gap-x-6 gap-y-2 border-b border-border-primary py-4'>
                <div className=''>
                    <p>Name</p>
                    <p>{emergency_name}</p>
                </div>
                <div className=''>
                    <p>Phone</p>
                    <p>{emergency_phone}</p>
                </div>
                <div className=''>
                    <p>Relation</p>
                    <p>{emergency_relation}</p>
                </div>
            </div>
            <h1 className='text-2xl font-bold mt-5'>Education Data</h1>
            <div className='grid grid-cols-2 gap-x-6 gap-y-2 py-4'>
                <div className=''>
                    <p>Category</p>
                    <p>{category}</p>
                </div>
                <div className=''>
                    <p>Major</p>
                    <p>{major}</p>
                </div>
                <div className=''>
                    <p>Graduate</p>
                    <p>{graduate}</p>
                </div>
            </div>
        </div>
    );
}

export default DetailMentee;
