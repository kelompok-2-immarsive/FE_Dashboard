import React from 'react';
import NavigationBar from '../Components/NavigationBar';
import NavbarSamping from '../Components/NavbarSamping';
import {useCookies} from 'react-cookie';
import { useNavigate } from 'react-router-dom';

const DashboardApp = ({ children, index}) => {
    const [cookie, removeCookie] = useCookies();
    const navigate = useNavigate();

    const onLogout = () => {
        removeCookie("name")
        removeCookie("token")
        navigate('/');
    }
    
    return (
        <div className="bg-bg-primary flex max-w-screen">
            <NavbarSamping index={index} />
            <main className='w-full h-full'>
                <NavigationBar name={cookie.name} onLogout={() => onLogout()}/>
                <div className='pt-10 p-10 h-full'>
                    {children}
                </div>
            </main>
        </div>
    )
}

export default DashboardApp;