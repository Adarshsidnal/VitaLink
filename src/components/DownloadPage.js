// import { useEffect, useState } from 'react';
// import { useHistory } from 'react-router-dom';
// import firebase from '../services/firebase.js';
// import Navbar from './Navbar2.js';

// import "../css/nav2.css"

// import mobile from "../assets/images/mobile.png";

// export default function download(props) {
   
//     return (
//         <div>
//             <Navbar/>
//             <div id="download">Download the Official <span>h</span><span>ummigo</span> app now!</div>
//             <div id="downloaddesc">Be one of the first few users to get an early access to the app.</div>
//             <center className="mobcontainer">
//                 <div><img src={mobile} style={{ maxWidth: '80vw', marginTop: '-6vh' }} /></div>
//                 <div id="mobdata">
//                     <div id="mobhead">An app for everyone...</div>
//                     <div id="mobtxt">who want to live a healthier, happier life by following a healthy routine and adopting an healthy lifestyle</div>
//                 </div>
//             </center>
//         </div>
//     );
// }
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import firebase from '../services/firebase.js';
import Navbar from './Navbar2.js';

import "../css/nav2.css"

import mobile from "../assets/images/mobile.png";

export default function Download(props) {
    const navigate = useNavigate();

    const handleDownloadClick = () => {
        fetch('/download') // Assuming the API endpoint is at /download
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.blob();
            })
            .then(blob => {
                const url = window.URL.createObjectURL(new Blob([blob]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', 'app.apk');
                document.body.appendChild(link);
                link.click();
                link.parentNode.removeChild(link);
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });
    };

    return (
        <div>
            <Navbar />
            <div id="download">Download the Official <span>V</span><span>itaLink</span> app now!</div>
            <div id="downloaddesc">Be one of the first few users to get an early access to the app.</div>
            <center className="mobcontainer">
                <div><img src={mobile} style={{ maxWidth: '80vw', marginTop: '-6vh' }} /></div>
                <div id="mobdata">
                    <div id="mobhead">An app for everyone...</div>
                    <div id="mobtxt">who want to live a healthier, happier life by following a healthy routine and adopting an healthy lifestyle</div>
                    <button onClick={handleDownloadClick}>Download Now</button>
                </div>
            </center>
        </div>
    );
}
