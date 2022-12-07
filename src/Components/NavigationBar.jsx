import React from 'react';

const NavigationBar = ({name, onLogout}) => {
    return (
        <div className="navbar px-10 py-5 border-b border-border-primary">
            <div className="flex-1">
                <a className="normal-case text-3xl font-bold text-alta-primary">IMMERSIVE DASHBOARD <br /> <span className='text-alta-secondary'>Alterra</span></a>
            </div>
            <div className="flex-none gap-2">
                <div>
                    <p className='font-medium text-base'>Hello, {name}</p>
                </div>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="https://placeimg.com/80/80/people" />
                        </div>
                    </label>
                    <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                        <button onClick={onLogout}>Logout</button>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default NavigationBar;
