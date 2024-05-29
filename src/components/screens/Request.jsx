import React from 'react';
import './static/request.css';

export default function Request() {
    return (
        <>
            <div className="request-main">
                <div className='request-form-parent'>
                    <h1 className='request-title'>Request Details</h1>
                    <form className='request-form'>
                        <select className="request-input" name="donation-type" id="donation-type">
                            <option value="" disabled selected>Donation Type</option>
                            <option value="Platelets">Platelets</option>
                            <option value="RBC">RBC</option>
                            <option value="WBC">WBC</option>
                        </select>
                        <select className="request-input" id="blood-group">
                            <option value="" disabled selected>Blood Group</option>
                            <option value="A+">A+</option>
                            <option value="A-">A-</option>
                            <option value="B+">B+</option>
                            <option value="B-">B-</option>
                            <option value="AB+">AB+</option>
                            <option value="AB-">AB-</option>
                            <option value="O+">O+</option>
                            <option value="O-">O-</option>
                        </select>
                        <input className="request-input" type="date" placeholder="Enter date and time" />
                        <input className="request-input" type="password" placeholder="Enter Password"/>
                        <button className='request-submit' type="submit">Submit</button>
                    </form>             
                </div>
                <div class="request-last">
                    <p>🔥 Fact: The average red blood cell transfusion is 3 pints (or 3 whole-blood donations). </p>
                </div>
            </div>
        </>
    )
}