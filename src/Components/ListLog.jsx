import React from 'react';

const ListLog = ({name, status, create_at, notes}) => {
    return (
        <div className='card'>
            <div className="card-body flex">
                <div>
                    <p>{name}</p>
                    <p>{create_at}</p>
                </div>
                <div>
                    <p>{notes}</p>
                    <p>{status}</p>
                </div>
            </div>
        </div>
    );
}

export default ListLog;
