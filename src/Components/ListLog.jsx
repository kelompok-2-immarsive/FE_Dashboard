import React from 'react';

const ListLog = ({listLog, name, status, create_at, notes }) => {
    return (
        <div className='w-full'>
            {listLog !== null ?
                listLog.map(log => {
                    return(
                        <div className='grid grid-cols-6 px-10 py-3 border-border-primary border-b'>
                            <div className='border-r border-border-primary p-5'>
                                <p>{log.name}</p>
                                <p>{log.create_at}</p>
                            </div>
                            <div className='col-span-5 py-5 px-8'>
                                <p>{log.notes}</p>
                                <p>{log.status}</p>
                            </div>
                        </div>
                    )
                })
                : <p className='font-bold text-2xl text-alta-primary'>Belum Ada Feedback</p>
            }
            
        </div>
    );
}

export default ListLog;
