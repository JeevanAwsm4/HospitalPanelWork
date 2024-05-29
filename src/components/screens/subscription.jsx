import React from 'react';
import './static/subscription.css';

export default function Subscription() {
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
        <div id='subscription'>
            <div className="info">
                <h3> 🟣 Subscription started on <span>27/03/2024 (Monthly)</span></h3>
                <h3> 🟣 Your subscription ends on <span>27/04/2024</span></h3>
            </div>
            <RenderAvailableSubscriptions />
    </div>
    </>
  );
}
