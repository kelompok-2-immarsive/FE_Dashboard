import React from 'react';
import CardDashboard from '../Components/CardDashboard';
import LineChart from '../Components/LineChart';
import { data } from '../utils/Data';
import { FaUsers, FaUser, FaChalkboardTeacher } from 'react-icons/fa';

const Dashboard = () => {
    return (
        <div>
            <div className='flex gap-6 m-10 justify-between'>
                <CardDashboard icons={<FaUsers />} title={`Total Mentee`} month={`November`} total={`100 Mentee`} />
                <CardDashboard icons={<FaUser />} title={`Total Users`} month={`November`} total={`100 Users`} />
                <CardDashboard icons={<FaChalkboardTeacher />} title={`Total Class`} month={`November`} total={`3 Class`} />
            </div>
            <div className="card bg-white shadow-xl w-[850px] mx-auto">
                <div className="card-body">
                    <LineChart chartData={data} />
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
