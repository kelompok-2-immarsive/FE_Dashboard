import React from 'react';
import NavigationBar from '../Components/NavigationBar';
import NavbarSamping from '../Components/NavbarSamping';
import {useCookies} from 'react-cookie';
import { useNavigate } from 'react-router-dom';

const DashboardApp = ({ children }) => {
    const [cookie, removeCookie] = useCookies();
    const navigate = useNavigate();

    const onLogout = () => {
        removeCookie("name")
        removeCookie("token")
        navigate('/');
    }
    return (
        <div className="bg-bg-primary flex">
            <NavbarSamping />
            <main className='w-full p-10'>
                <NavigationBar name={cookie.name} onLogout={() => onLogout()}/>
                <div className='pt-10'>
                    {children}
                </div>
            </main>
        </div>
    )
}

export default DashboardApp;