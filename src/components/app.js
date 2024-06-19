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
import {Navigate, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import LoginForm from './Login';
import Download from './DownloadPage';
import Appointment from './appointment';
const App = () => {
    return (
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<LoginForm />} />
                    <Route path="/download" element={<Download />} />
                    <Route path="/appointment" element={<Appointment />} />

                    {/* <Route path="*" element={<Navigate to="/login" replace />} /> */}
                </Routes>
            </Router>
    );
};

export default App;
