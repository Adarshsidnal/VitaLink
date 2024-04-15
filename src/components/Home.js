import React from "react";
import Hero from "../components/Header";
import Navbar from "../components/Navbar";
import About from "../components/about";
import Footer from "../components/footer";
import Info from "../components/info";
import Reviews from "../components/reviews";
function Home() {
    return (
        <div className="home-section">
            <Navbar />
            <Hero />
            <Info />
            <About />
            <Reviews />
            <Footer />
        </div>
    );
}

export default Home;
