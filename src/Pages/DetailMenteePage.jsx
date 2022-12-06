import React from 'react';
import ProfileMentee from '../Components/ProfileMentee';
import ListLog from '../Components/ListLog';
import DetailMentee from '../Components/DetailMentee';

const DetailMenteePage = () => {
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
                    <a className="tab tab-bordered">Profile Data</a>
                    <a className="tab tab-bordered tab-active">Feed / Log</a>
                </div>
                <div className="card-body">
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
                </div>
            </div>

        </div>
    );
}

export default DetailMenteePage;
