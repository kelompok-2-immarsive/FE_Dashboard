import React from 'react';
import { FaUserCircle, FaPhoneAlt, FaTelegramPlane, FaMapMarkerAlt } from 'react-icons/fa';
import {GrMail} from 'react-icons/gr';

const DetailMenteeComponent = () => {
    return (
        <div className="card border border-border-primary">
            <div className="card-body">
                <div>
                    <figure><FaUserCircle /></figure>
                    <h1>{fullname}</h1>
                    <p>name</p>
                    <p>{mentee_class}</p>
                    <p>{mentee_status}</p>
                </div>
                <div>
                    <h2>Contact Details</h2>
                    <p><FaMapMarkerAlt /> {address}</p>
                    <p><FaPhoneAlt /> {phone}</p>
                    <p><FaTelegramPlane /> {telegram}</p>
                    <p><GrMail /> {email}</p>
                </div>
            </div>
        </div>
    );
}

export default DetailMenteeComponent;
