import React from 'react';
import './static/report.css';

export default function Report() {
    const data = [
        {
            id: 1,
            date: '10/2/23',
            requestId: '94029503',
            patients: [
                {
                    id: 1,
                    code: 'f94029',
                    name: 'Jeevan S Kumar',
                    status: 'positive',
                    reportLink: '#',
                    icon: 'img/icon.png'
                },
                {
                    id: 2,
                    code: 'f94029',
                    name: 'D5',
                    status: 'warning',
                    reportLink: '#',
                    icon: 'img/icon.png'
                },
            ]
        },
        {
            id: 2,
            date: '10/2/23',
            requestId: '94029503',
            patients: [
                {
                    id: 1,
                    code: 'f94029',
                    name: 'Jeevan S Kumar',
                    status: 'positive',
                    reportLink: '#',
                    icon: 'img/icon.png'
                },
                {
                    id: 2,
                    code: 'f94029',
                    name: 'D5',
                    status: 'warning',
                    reportLink: '#',
                    icon: 'img/icon.png'
                },
            ]
        },
    ];
    const MappingRequests = () => {
        return (
            <div className="bax">
                {data.map(request => (
                    <div className="box1" key={request.id}>
                        <div className='did'>
                            <h3 className="datee">Date: {request.date}</h3>
                            <h3 className="requestt">Request ID : #{request.requestId}</h3>
                        </div>
                        <div className="inbax ">
                            {request.patients.map(patient => (
                                <span className="patient" key={patient.id}>
                                    <h5>#{patient.code}</h5>
                                    <div className="patient_name"><h3>{patient.name}</h3></div>
                                    <div className='door_sign'>
                                        <h4 className={patient.status}>{patient.status}</h4>
                                        <div className="indication"><div className={patient.status}></div></div>
                                    </div>
                                    <div className="report"><a href={patient.reportLink} className="report11">Report<img src={patient.icon} alt="" /></a></div>
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        );
    }
    
    // Now you can call MappingRequests as a function in the return statement
    return (
        <MappingRequests />
    );
}