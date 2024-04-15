import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Header";

import About from "../components/about";

function Home() {
    return (
        <div className="home-section">
            <Navbar />
            <Hero />
            
            <About />
        </div>
    );
}

export default Home;
