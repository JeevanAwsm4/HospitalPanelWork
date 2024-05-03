import './static/auth.css'
import React from 'react';
import Logo from '../media/auth/image.png';
import Discord from '../media/auth/discord.svg';
import Facebook from '../media/auth/facebook.svg';
import Instagram from '../media/auth/instagram.svg';
import Mail from '../media/auth/mail.svg';
import Security from '../media/auth/lock.svg';
import {Link} from 'react-router-dom'

export default function Login(){
    return (
        <>
            <section class="auth-page">
                <section class="wrapper">
                    <div class="left">
                        <div class="above">
                            <img src={Logo} alt="logo"/>
                            <h1 class="welcome-message">Welcome to Purelink Hospital's panel</h1>
                        </div>
                        <div class="below">
                            <h1 class="info">Contact us via,</h1>
                            <div class="social">
                                <a href="" class="link-to-media"><img src={Discord} alt="" class="icon-social"/></a>
                                <a href="" class="link-to-media"><img src={Facebook} alt="" class="icon-social"/></a>
                                <a href="" class="link-to-media"><img src={Instagram} alt="" class="icon-social"/></a>
                                <a href="" class="link-to-media"><img src={Mail} alt="" class="icon-social"/></a>
                            </div>
                        </div>
                    </div>
                    <div class="right">
                        <div class="form-parent">
                            <div class="wrapper">
                                <div className="title">
                                    <h1>Sign in</h1>
                                </div>
                                <form action="" class="login">
                                    <div class="input-group">
                                        <input type="text" class="input" placeholder="Enter Username"/>
                                    </div>
                                    <div class="input-group">
                                        <input type="password" class="input" placeholder="Enter Password"/>
                                    </div>
                                    <div class="submit">
                                        <button type="submit" class="btn">Login Securely</button> <img src={Security} alt="login" />
                                    </div>
                                </form>
                                <p>Don't have a account? Register <span><Link to="/signup">here.</Link></span></p>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </>
    )
}