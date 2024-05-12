import React,{useState} from 'react';
import './static/subscribe.css';

export default function Subscribe() {
    const [AuthenticatedName,setAuthenticatedName] = useState('Medicity Kollam')

    const RenderAvailableSubscriptions = () => {
        const subscriptions = [
            {
                price: 2000,
                features: [
                    "All features included",
                    "Support available",
                    "Under Licensed",
                ],
                color : '#eb8a90',
                type : '1-month',
            },
            {
                price: 5000,
                features: [
                    "All features included",
                    "Support available",
                    "Licensed",
                ],
                color : '#7cea9c',
                type : '6-month',
            },
            {
                price: 20000,
                features: [
                    "All features included",
                    "Support available",
                    "Licensed",
                ],
                color : '#69626d',
                type : '12-Month',
            },
            
        ];

        return (
            <div className='s-options'>
                {subscriptions.map((subscription, index) => (
                    <div key={index} className='subscription' style={{ border: `1px solid ${subscription.color}` }}>
                        <div className='s-banner'>
                            <img src={require('./../assets/images/main/real.jpg')} alt='banner' />
                        </div>
                        <div className='subscription-wrapper'>
                            <h2 className='s-title' style={{ color: `${subscription.color}` }}>{subscription.type} Subscription</h2>
                            <p className='s-price' style={{ color: `${subscription.color}` }}>{subscription.price}$/month</p>
                            <ul className='s-features-list'>
                                {subscription.features.map((feature, index) => (
                                    <li key={index}><div className='s-circle' style={{ backgroundColor: `${subscription.color}` }}></div><span style={{ color: `${subscription.color}` }}>{feature}</span></li>
                                ))}
                            </ul>
                            <button className='s-subscribe-button' style={{ border: `1px solid ${subscription.color}`,color : `${subscription.color}` }}>Subscribe</button>
                        </div>
                    </div>
                ))}
            </div>
        );
    };

    return (
        <>
            <div id='s-false'>
                <div className="wrapper">
                    <div className="s-false-top">
                        <h1 className='subscribed-false-top'><span className='s-false'>Uh Oh! </span>Looks like your out of fuel⛽.<span className='s-false'>Resubscribe here.</span></h1>
                    </div>
                    <RenderAvailableSubscriptions />
                    <div className='s-authenticated-as'>
                        <h1>Signed in as <span>{AuthenticatedName}</span></h1>
                    </div>
                </div>
            </div>
        </>
    );
}
