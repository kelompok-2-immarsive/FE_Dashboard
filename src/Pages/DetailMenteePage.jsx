import React from 'react';
import ProfileMentee from '../Components/ProfileMentee';
import ListLog from '../Components/ListLog';
import DetailMentee from '../Components/DetailMentee';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import api from '../Services/api';
import { useCookies } from 'react-cookie';
import NewlogPopUp from '../Components/NewlogPopUp';

const DetailMenteePage = () => {
    const [data, setData] = useState('profile');
    const [listLog, setListlog] = useState()
    const location = useLocation()
    const [cookie, setCookie] = useCookies()
    const [classList, setClasslist] = useState()
    const [allUsers, setAllUsers] = useState()
    // const [user, setUser] = useState()
    const [kelas, setKelas] = useState()
    const [comment, setComment] = useState('');
    const [status, setStatus] = useState('');
    const mentee = location?.state?.data;
    const mentee_id = parseInt(mentee.id_mantee);
    const user_id = parseInt(cookie.user_id);

    const getFeedbacks = async () => {
        await api.getMenteeFeedback(cookie.token, parseInt(mentee.id_mantee))
            .then(response => {
                setListlog(response.data.data.Feedbacks)
            })
            .catch(err => console.log(err))
    }
    const getClass = async () => {
        await api.getAllClass(cookie.token)
            .then(response => {
                setClasslist(response.data.data)
                response.data.data.map(kelas => kelas.class_id === mentee.class_id && setKelas(kelas.class_name))
            })
            .catch(err => console.log(err))
    }
    const getAllUsers = async () => {
        await api.getUsers(cookie.token)
            .then(response => {
                setAllUsers(response.data.data)
            })
            .catch(err => console.log(err))
    }

    const addFeedback = async () => {
        await api.addFeedback(cookie.token, {user_id, status, comment, mentee_id})
            .then(response => {
                console.log(response.data)
                getFeedbacks();
            })
            .catch(error => {
                console.log(error)
            })
    }

    const onSubmitFeedbackHandler = (e) => {
        addFeedback();
        setComment('');
        setStatus('');
        e.preventDefault();
    }

    useEffect(() => {
        getFeedbacks()
        getClass()
        getAllUsers()
    }, [])

    return (
        <div className='flex gap-6'>
            <div className='w-auto'>
                <ProfileMentee
                    fullname={mentee.name}
                    address={mentee.address}
                    email={mentee.email}
                    mentee_class={kelas}
                    mentee_status={mentee.mentee_status}
                    phone={mentee.phone}
                    telegram={mentee.telegram}
                />
            </div>
            <div className='card border border-border-primary w-full'>
                <div className="tabs p-4">
                    <button onClick={() => setData('profile')} className={`tab tab-bordered text-lg ${data === 'profile' && `tab-active`}`}>Profile Data</button>
                    <button onClick={() => setData('log')} className={`tab tab-bordered text-lg ${data === 'log' && `tab-active`}`}>Feed / Log</button>
                </div>
                <div className="card-body">
                    {data === 'profile' ?
                        <DetailMentee
                            address={mentee.address}
                            category={mentee.category}
                            emergency_name={mentee.emergency_name}
                            emergency_phone={mentee.emergency_phone}
                            emergency_relation={mentee.emergency_relation}
                            fullname={mentee.name}
                            gender={mentee.gender}
                            graduate={mentee.graduate}
                            home_address={mentee.home_address}
                            major={mentee.major}
                        />
                        :
                        <>
                            <label htmlFor="my-modal-4" className="btn bg-alta-secondary hover:bg-hover-primary border-none text-white w-32">Add New Log</label>
                            <ListLog
                                listLog={listLog} allUsers={allUsers}
                            />
                        </>
                    }
                </div>
            </div>
            <NewlogPopUp
                onSubmitFeedback={(e) => onSubmitFeedbackHandler(e)}
                comment={comment}
                setComment={(e) => setComment(e.target.value)}
                status_feedback={status}
                onChangeSelect={(e) => setStatus(e.target.value)}
            />
        </div>
    );
}

export default DetailMenteePage;
