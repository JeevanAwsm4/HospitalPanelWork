import React from 'react';
import './static/request.css';

export default function Request() {
    return (
        <>
<div class="request-main">
        <h1>Request Details</h1>
    <form>
        <div class="type">
            <select class="request-lone request-select" name="donation-type" id="donation-type">
                <option value="" disabled selected>Donation Type</option>
                <option value="Platelets">Platelets</option>
                <option value="RBC">RBC</option>
                <option value="WBC">WBC</option>
            </select>
        </div>
        <div class="request-form-group2">
            <select class="request-ltwo request-select" name="blood-group" id="blood-group">
                <option class="" value="" disabled selected>Blood Group</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
            </select>
        </div>
        <div class="request-form-group3">
            <input class="request-input" type="datetime-local" placeholder="Enter your name" name="date-time" id="date-time"/>
        </div>
        <div class="request-form-group4">
            <input class="request-input input-request-edit" type="checkbox" id="terms" name="terms"/>
            <label class="request-lthree request-label" for="terms">I have read & I agree to the Terms and Conditions</label>
        </div>
        <div class="request-form-group5">
            <input class="request-input request-password" type="password" placeholder="Enter Password" id="password" name="password"/>
        </div>
        <div class="request-form-group6">
            <button class='request-submit' type="submit">Submit</button>
        </div>
    </form>
    </div>
    <div class="request-last">
        <p>🔥 Fact: The average red blood cell transfusion is 3 pints (or 3 whole-blood donations). </p>
    </div>

        </>
    )
}