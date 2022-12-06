import React from 'react';
import SearchBar from '../Components/SearchBar';
import TableList from '../Components/TableList';

const UsersPage = () => {
    return (
        <div className='p-10'>
            <SearchBar />
            <div className="card border border-border-primary">
                <div className="card-body">
                    <TableList />
                </div>
            </div>
        </div>
    );
}

export default UsersPage;