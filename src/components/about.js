import React from "react";
import doctor from "../assets/about_logo.png";
import SolutionStep from "./SolutionStep";
import "../css/about.css";

function About() {
  return (
    <div className="about-section" id="about">
      <div className="about-image-content">
        <img src={doctor} alt="Doctor Group" className="about-image1" />
      </div>

      <div className="about-text-content">
        <h3 className="about-title">
          <span>About Us</span>
        </h3>
        <p className="about-description">
        We believe that regular monitoring of daily health and abiding strictly to medication and exercise discipline can greatly improve the conditions of people suffering from chronic disorders or prolonged dieases like diabetes, Parkinson's, High Blood Pressure. 
        </p>

        <h4 className="about-text-title">Your Solutions</h4>

        <SolutionStep
          title="Choose a Service"
          description="Find your perfect service and book with ease at VitaLink. Our services prioritize your health, offering tailored care."
        />

        <SolutionStep
          title="Set Your Daily Goals"
          description="Daily Goals feature is an integral part of our platform, facilitating users in tracking their 
          fitness routines and staying engaged with their health journey."
        />

        <SolutionStep
          title="Get Your Solutions"
          description="Our Services are here to provide expert advice and personalized treatment plans, helping you achieve your best possible health."
        />
      </div>
    </div>
  );
}

export default About;