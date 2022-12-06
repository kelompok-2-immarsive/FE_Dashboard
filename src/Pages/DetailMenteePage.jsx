import React from 'react';
import ProfileMentee from '../Components/ProfileMentee';
import ListLog from '../Components/ListLog';
import DetailMentee from '../Components/DetailMentee';
import { useState } from 'react';

const DetailMenteePage = () => {
    const [data, setData] = useState('profile');

    return (
        <div className='flex gap-6'>
            <div className='w-auto'>
                <ProfileMentee
                    fullname={`mitro`}
                    address={`Blitar`}
                    email={`mitro@mail.com`}
                    mentee_class={`Frontend Engineer 10`}
                    mentee_status={`active`}
                    phone={`087665889000`}
                    telegram={`@mitro`}
                />
            </div>
            <div className='card border border-border-primary w-auto'>
                <div className="tabs">
                    <button onClick={() => setData('profile')} className={`tab tab-bordered ${data === 'profile' && `tab-active`}`}>Profile Data</button>
                    <button onClick={() => setData('log')} className={`tab tab-bordered ${data === 'log' && `tab-active`}`}>Feed / Log</button>
                </div>
                <div className="card-body">
                    {data === 'profile' ?
                        <DetailMentee
                            address={`Blitar`}
                            category={`Informatics`}
                            emergency_name={`Nurudin`}
                            emergency_phone={`081772665441`}
                            emergency_relation={`Ayah Kandung`}
                            fullname={`Mitro`}
                            gender={`Male`}
                            graduate={`2022`}
                            home_address={`Blitar`}
                            major={`Technology Informatics`}
                        />
                        :
                        <ListLog
                            create_at={`29 Jan 2022`}
                            name={`Bagas`}
                            notes={`lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolorlorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor`}
                            status={`section change`}
                        />
                    }
                </div>
            </div>

        </div>
    );
}

export default DetailMenteePage;
