import React from 'react';
import Line from './../media/panel/line.svg'
import Logo from './../media/auth/image.png'
import './static/na.css'

export default function NotAvailable(){
    return (
        <>
            <section className="body">
                <section className="wrapper">
                    <div className="left">
                        <div className="wrapper">
                            <img src={Logo} alt="" class='logo' />
                            <img src={Line} alt="" class='line' />
                        </div>
                    </div>
                    <div className="right">
                        <div className="wrapper">
                            <h1 className="info"> Your signup request has been successfully sent to the <span>PureLink Team</span> for verification.</h1>
                        </div>
                    </div>
                </section>
            </section>
        </>
    )
}