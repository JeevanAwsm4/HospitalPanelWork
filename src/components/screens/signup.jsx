import './static/auth.css'
import React from 'react';
import Logo from '../media/auth/image.png';
import Discord from '../media/auth/discord.svg';
import Facebook from '../media/auth/facebook.svg';
import Instagram from '../media/auth/instagram.svg';
import Mail from '../media/auth/mail.svg';
import Security from '../media/auth/lock.svg';
import {Link} from 'react-router-dom';

export default function Signup(){
    return (
        <>
            <section class="auth-page signup-page">
                <section class="wrapper">
                    <div class="left">
                        <div class="above">
                            <img src={Logo} alt="logo"/>
                            <h1 class="welcome-message">Sign up for an Ultimate Journey.</h1>
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
                                    <h1>Sign Up</h1>
                                </div>
                                <form action="" class="signup">
                                    <div className="container">
                                        <div className="sub-left">
                                            <div class="input-group">
                                                <input type="text" class="input" placeholder="Username"/>
                                            </div>
                                            <div class="input-group">
                                                <input type="password" class="input" placeholder="Password"/>
                                            </div>
                                            <div class="input-group">
                                                <input type="password" class="input" placeholder="Confirm Password"/>
                                            </div>
                                            <div class="input-group">
                                                <input type="email" class="input" placeholder="Email"/>
                                            </div>
                                        </div>
                                        <div className="sub-right">
                                            <div class="input-group">
                                                <input type="number" class="input" placeholder="Phone No."/>
                                            </div>
                                            <div class="input-group">
                                                <input type="text" class="input" placeholder="Hospital Name"/>
                                            </div>
                                            <div class="input-group">
                                                <input type="text" class="input" placeholder="Hospital Adress"/>
                                            </div>
                                            <div class="input-group">
                                                <input type="text" class="input" placeholder="City"/>
                                        </div>
                                        </div>
                                    </div>
                                    <div class="submit">
                                        <button type="submit" class="btn"><Link to='../panel'>Register</Link></button> <img src={Security} alt="login" />
                                    </div>
                                </form>
                                <p>Have a account? Login <span><a>here.</a></span></p>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </>
    )
}