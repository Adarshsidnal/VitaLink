// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import "../css/app.css";
// import Home from "./Home";
// import Login from "./Login"
// import Download from "./DownloadPage";
// function App() {
//     return (
//         <div className="App">
//             <Router>
//                 <Routes>
//                     <Route path="/" element={<Home />} />
//                     <Route path="/login" element={<Login />} />
//                     <Route path="/download" element={<Download/>} />
//                 </Routes>
//             </Router>
//         </div>
//     );
// }

// export default App;
import React from 'react';
import { Auth0Provider } from '@auth0/auth0-react';
import {Navigate, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import LoginForm from './Login';
import Download from './DownloadPage';
import Appointment from './appointment';
const App = () => {
    return (
        <Auth0Provider
            domain="dev-7wrcr201frib5e12.us.auth0.com"
            clientId="wybWLyGVFN6QBSZQSQn53223PFtmQ5Ze"
            authorizationParams={{
                redirect_uri: "http://localhost:3000/download"
            }}
        >
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<LoginForm />} />
                    <Route path="/download" element={<Download />} />
                    <Route path="/appointment" element={<Appointment />} />

                    {/* <Route path="*" element={<Navigate to="/login" replace />} /> */}
                </Routes>
            </Router>
        </Auth0Provider>
    );
};

export default App;
