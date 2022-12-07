import React from 'react';
import {FaRobot} from 'react-icons/fa';

const Page404 = () => {
    return (
        <div className='bg-bg-primary w-screen h-screen'>
            <div className='text-center justify-center grid grid-cols-1'>
                <h1 className='text-5xl font-medium text-grey-default'>Page Not Found</h1>
                <p className='text-3xl'>Error 404</p>
            </div>
        </div>
    );
}

export default Page404;
