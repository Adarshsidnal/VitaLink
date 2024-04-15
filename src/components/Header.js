import React, { useEffect, useState } from "react";
import Doctor from "../assets/ima.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import '../css/header.css'
function Hero() {
    const navigate = useNavigate();
    const [goUp, setGoUp] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const handleBookAppointmentClick = () => {
        navigate("/appointment");
    };

    useEffect(() => {
        const onPageScroll = () => {
            if (window.scrollY > 600) {
                setGoUp(true);
            } else {
                setGoUp(false);
            }
        };
        window.addEventListener("scroll", onPageScroll);

        return () => {
            window.removeEventListener("scroll", onPageScroll);
        };
    }, []);

    return (
        <div className="section-container">
            <div className="hero-section">
                <div className="text-section">
                    <p className="text-headline">❤️ Health comes first</p>
                    <h2 className="text-title">
                        The only app you'll ever need for Self-care
                    </h2>
                    <p className="text-descritpion">
                        Experience personalized self-care solutions
                        right at your fingertips with our app.
                        Connect with healthcare experts,
                        track your medication, and access essential
                        tools for maintaining your well-being
                    </p>
                    <button
                        className="text-appointment-btn"
                        type="button"
                        onClick={handleBookAppointmentClick}
                    >
                        <FontAwesomeIcon icon={faCalendarCheck} /> Test and reviews
                    </button>
                    <div className="text-stats">
                        <div className="text-stats-container">
                            <p>145k+</p>
                            <p>users</p>
                        </div>

                        <div className="text-stats-container">
                            <p>50+</p>
                            <p>Doctors</p>
                        </div>

                        <div className="text-stats-container">
                            <p>10+</p>
                            <p>Years of Experience</p>
                        </div>
                    </div>
                </div>

                <div className="hero-image-section">
                    <img className="hero-image1" src={Doctor} alt="Doctor" />
                </div>
            </div>

            <div
                onClick={scrollToTop}
                className={`scroll-up ${goUp ? "show-scroll" : ""}`}
            >
                <FontAwesomeIcon icon={faAngleUp} />
            </div>
        </div>
    );
}

export default Hero;
