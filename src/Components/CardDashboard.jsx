import React from 'react';

const CardDashboard = ({ icons, title, month, total }) => {
    return (
        <div className="card w-72 bg-base-100 shadow-xl">
            <figure className='w-full h-2 bg-alta-primary'></figure>
            <div className="card-body text-alta-primary">
                <div className='grid grid-cols-2'>
                    <p className='text-5xl'>{icons}</p>
                    <div className='w-auto text-[18px]'>
                        <p>{title}</p>
                        <p>{month}</p>
                    </div>
                </div>
                <div className='flex-1 text-2xl text-end font-bold'>
                    <p>{total}</p>
                </div>
            </div>
        </div>
    );
}

export default CardDashboard;
