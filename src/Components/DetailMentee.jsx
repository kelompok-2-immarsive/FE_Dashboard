import React from 'react';

const DetailMentee = () => {
    return (
        <div>
            <h1 className='text-2xl font-bold'>Personal Details</h1>
            <div className='grid grids-col-2'>
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
            <div>
                
            </div>
        </div>
    );
}

export default DetailMentee;
