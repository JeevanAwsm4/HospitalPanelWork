import React, { useState } from 'react';
import './static/contact.css';

export default function Contact() {
    const [showMoreDonors, setShowMoreDonors] = useState(false);

    const data = [
        {
            newRequest: {
                isExpired: false,
                id: 9840291,
                date: '18/03/24',
                filedRequest: 20,
                acceptedRequest: 30,
                donors: [
                    {
                        id: 1,
                        name: 'Adil Aathif.M',
                        phone: 7736530403,
                        blood: 'AB+'
                    },
                    {
                        id: 2,
                        name: 'Jeevan.S.K',
                        phone: 7736530403,
                        blood: 'AB+'
                    },
                    {
                        id: 3,
                        name: 'Azvan Sait',
                        phone: 7736530403,
                        blood: 'AB+'
                    },
                    {
                        id: 4,
                        name: 'Devanarayanan',
                        phone: 7736530403,
                        blood: 'AB+'
                    },
                    {
                        id: 5,
                        name: 'Nihal',
                        phone: 7736530403,
                        blood: 'AB+'
                    },
                ]
            },
            oldRequest: {
                isExpired: true,
                id: 4902930,
                date: '13/02/24',
                filedRequest: 20,
                acceptedRequest: 17,
            }
        }
    ];

    return (
        <div>
            <section className='c-wrapper'>
                {data.map((requestData, index) => (
                    <React.Fragment key={index}>
                        <div className="new">
                            <div className="top">
                                <h4>{requestData.newRequest.date}</h4>
                                <h4>Request id:<span>#{requestData.newRequest.id}</span></h4>
                            </div>
                            <div className="below">
                                <div className="top">
                                    <div className="left">
                                        <h1>Filed a request of {requestData.newRequest.filedRequest} <span>donors.</span></h1>
                                        <h1 className='flex'><span>{requestData.newRequest.acceptedRequest} Donors Accepted.</span><img src={require('./../assets/images/main/green-up-arrow.png')} alt="icon" /></h1>
                                    </div>
                                    <div className="right">
                                        <h3>See Details <img src={require('./../assets/images/main/line-arrow.png')} alt="icon" /></h3>
                                    </div>
                                </div>
                                <div className="below">
                                    <table border='1px'>
                                        <thead>
                                            <tr>
                                                <th>Sl No.</th>
                                                <th>Full Name</th>
                                                <th>Phone No.</th>
                                                <th>Blood Group</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {requestData.newRequest.donors.map((donor, donorIndex) => (
                                                <tr key={donorIndex}>
                                                    <td>{donor.id}</td>
                                                    <td>{donor.name}</td>
                                                    <td>{donor.phone}</td>
                                                    <td>{donor.blood}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                    {!showMoreDonors && (
                                        <h1><span>View More <img src={require('./../assets/images/main/view-more.png')} alt="icon" /></span></h1>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="old">
                            <div className="top">
                                <h4>{requestData.oldRequest.date}</h4>
                                <h4>Request Id:<span>#{requestData.oldRequest.id}</span></h4>
                            </div>
                            <div className="below">
                                <div className="left">
                                    <h1>Filed a request of {requestData.oldRequest.filedRequest} <span>donors.</span></h1>
                                    <h1 className='flex'><span>{requestData.oldRequest.acceptedRequest} Donors Accepted.</span><img src={require('./../assets/images/main/red-down-arrow.png')} alt="icon" /></h1>
                                </div>
                                <div className="right">
                                    <span>Request Expired <img src={require('./../assets/images/main/expire.png')} alt="icon" /></span>
                                </div>
                            </div>
                        </div>
                    </React.Fragment>
                ))}
            </section>
        </div>
    );
}
