import React from 'react';

const ListLog = ({listLog, allUsers }) => {
    return (
        <div className='w-full'>
            {listLog && listLog !== null ?
                listLog.map(log => {
                    return(
                        <div className='grid grid-cols-6 px-10 py-3 border-border-primary border-b text-alta-primary'>
                            <div className='border-r border-border-primary p-5'>
                                {allUsers &&
                                    allUsers.map(user=> {
                                        user.id == log.UserID && <p>{user.fullname}</p>

                                    })

                                }
                                <p>{log.UserID}</p>
                                <p>{log.CreatedAt}</p>
                            </div>
                            <div className='col-span-5 py-5 px-8'>
                                <p>{log.Comment}</p>
                                <p className='mt-3 text-class-active'>{log.Status}</p>
                            </div>
                        </div>
                    )
                })
                : <p className='font-bold text-xl text-alta-primary'>Belum Ada Feedback</p>
            }
            
        </div>
    );
}

export default ListLog;
