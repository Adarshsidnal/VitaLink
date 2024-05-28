import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import firebase from '../services/firebase.js';
import Navbar from './Navbar2.js';

import "../css/nav2.css"

import mobile from "../assets/images/mobile.png";

export default function download(props) {
   
    return (
        <div>
            <Navbar/>
            <div id="download">Download the Official <span>h</span><span>ummigo</span> app now!</div>
            <div id="downloaddesc">Be one of the first few users to get an early access to the app.</div>
            <center className="mobcontainer">
                <div><img src={mobile} style={{ maxWidth: '80vw', marginTop: '-6vh' }} /></div>
                <div id="mobdata">
                    <div id="mobhead">An app for everyone...</div>
                    <div id="mobtxt">who want to live a healthier, happier life by following a healthy routine and adopting an healthy lifestyle</div>
                </div>
            </center>
        </div>
    );
}