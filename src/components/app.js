import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../css/app.css";
import Home from "./Home";
import Login from "./Login"
function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />

                </Routes>
            </Router>
        </div>
    );
}

export default App;
