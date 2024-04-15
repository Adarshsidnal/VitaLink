import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Header";
import Info from "../components/info";
import About from "../components/about";

function Home() {
    return (
        <div className="home-section">
            <Navbar />
            <Hero />
            <Info />
            <About />
            
        </div>
    );
}

export default Home;
