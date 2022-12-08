import React from 'react';
import ProfileMentee from '../Components/ProfileMentee';
import ListLog from '../Components/ListLog';
import DetailMentee from '../Components/DetailMentee';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import api from '../Services/api';
import { useCookies } from 'react-cookie';

const DetailMenteePage = () => {
    const [data, setData] = useState('profile');
    const [listLog, setListlog] = useState()
    const location = useLocation()
    const [cookie, setCookie] = useCookies()
    const [classList, setClasslist] = useState()
    const [kelas, setKelas] = useState()
    const mentee = location?.state?.data
    console.log(location?.state?.data)

    const getFeedbacks = async() => {
        await api.getMenteeFeedback(cookie.token, parseInt(mentee.id_mantee))
        .then(response => setListlog(response.data.data.Feedbacks))
        .catch(err => console.log(err))
    }
    const getClass = async() => {
        await api.getAllClass(cookie.token)
        .then(response => {
            setClasslist(response.data.data)
            response.data.data.map(kelas => kelas.class_id === mentee.class_id && setKelas(kelas.class_name))
            })
        .catch(err => console.log(err))
      }
    useEffect(()=> {
        getFeedbacks()
        getClass()
    })
    return (
        <div className='flex gap-6'>
            <div className='w-auto'>
                {/* <ProfileMentee
                    fullname={`mitro`}
                    address={`Blitar`}
                    email={`mitro@mail.com`}
                    mentee_class={`Frontend Engineer 10`}
                    mentee_status={`active`}
                    phone={`087665889000`}
                    telegram={`@mitro`}
                /> */}
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
            <div className='card border border-border-primary w-auto'>
                <div className="tabs">
                    <button onClick={() => setData('profile')} className={`tab tab-bordered ${data === 'profile' && `tab-active`}`}>Profile Data</button>
                    <button onClick={() => setData('log')} className={`tab tab-bordered ${data === 'log' && `tab-active`}`}>Feed / Log</button>
                </div>
                <div className="card-body">
                    {data === 'profile' ?
                        // <DetailMentee
                        //     address={`Blitar`}
                        //     category={`Informatics`}
                        //     emergency_name={`Nurudin`}
                        //     emergency_phone={`081772665441`}
                        //     emergency_relation={`Ayah Kandung`}
                        //     fullname={`Mitro`}
                        //     gender={`Male`}
                        //     graduate={`2022`}
                        //     home_address={`Blitar`}
                        //     major={`Technology Informatics`}
                        // />
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
                        // <ListLog
                        //     create_at={`29 Jan 2022`}
                        //     name={`Bagas`}
                        //     notes={`lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolorlorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor`}
                        //     status={`section change`}
                        // />
                        <ListLog
                            listLog={listLog}
                            // create_at={`29 Jan 2022`}
                            // name={`Bagas`}
                            // notes={`lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolorlorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor`}
                            // status={`section change`}
                        />
                    }
                </div>
            </div>

        </div>
    );
}

export default DetailMenteePage;
