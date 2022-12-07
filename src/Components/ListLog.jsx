import React from 'react';

const ListLog = ({ name, status, create_at, notes }) => {
    return (
        <div className='grid grid-cols-6 px-10 py-3 border-border-primary border-b'>
            <div className='border-r border-border-primary p-5'>
                <p>{name}</p>
                <p>{create_at}</p>
            </div>
            <div className='col-span-5 py-5 px-8'>
                <p>{notes}</p>
                <p>{status}</p>
            </div>
        </div>
    );
}

export default ListLog;
