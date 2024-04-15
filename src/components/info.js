import React from "react";
import InformationCard from "./InformationCard";
import { faBell, faBullseye, faEyeSlash, faLocation, faPills } from "@fortawesome/free-solid-svg-icons";
import { faRobot } from '@fortawesome/free-solid-svg-icons';
import "../css/info.css";

function Info() {
  return (
    <div className="info-section" id="services">
      <div className="info-title-content">
        <h3 className="info-title">
          <span>What We Do</span>
        </h3>
        <p className="info-description">
        VitaLink webapp supplements the VitaLink app and aims at making an impact on community 
        by providing nearby services such as diagnostic services, hospitals, gyms, yoga classes etc. 
        and also provides the best platform to read or write blogs and share personal stories of people
        suffering with chronic illness. The blogs and stories also get sorted as per user's interests 
        and needs using our self made Natural Language Processing model.
        </p>
      </div>

      <div className="info-cards-content">
        <InformationCard
          title="Chatbot"
          description="chatbot provides users with clear and concise medical instructions tailored to 
          their specific needs. From medication reminders to lifestyle recommendations, we ensure that users
           receive accurate guidance to manage their health effectively. With our intuitive interface, users 
           can easily access vital information and take control of their well-being from the comfort of their 
           own devices."
          icon={faRobot}
        />

        <InformationCard
          title="Medicine Tracker"
          description="Medicine Tracker designed to empower patients in managing their medication schedules effectively.
           With intuitive functionality, users can effortlessly input, track, and receive reminders for their prescribed medications.
            From daily doses to complex regimens, Medicine Tracker ensures users stay on track with their 
            treatment plans, promoting better adherence and overall health outcomes."
          icon={faPills}
        />

        <InformationCard
          title="Optical Aid"
          description="Optical Aid is a revolutionary tool integrated into our platform, specifically crafted to
           enhance readability for users encountering small printed text, such as medicine labels. Through advanced
            image processing algorithms, it magnifies and clarifies text, ensuring effortless comprehension.
             With Optical Aid, users can confidently access crucial information on medications, promoting safety
              and autonomy in managing their health."
          icon={faEyeSlash}
        />
        <InformationCard
          title="Push Notifications"
          description="Push Notifications serve as gentle nudges within our platform, reminding users of daily 
          routine activities crucial for improving their lifestyle. From hydration reminders to exercise prompts,
           these notifications foster healthy habits by gently encouraging users to prioritize their well-being throughout the day."
          icon={faBell}
        />
        <InformationCard
          title="Daily Goals"
          description="Daily Goals feature is an integral part of our platform, facilitating users in tracking their 
          fitness routines and staying engaged with their health journey. Through personalized goal setting and progress tracking, 
          users can establish achievable milestones and monitor their advancement over time."
          icon={faBullseye}
        />
        <InformationCard
          title="Nearby Services"
          description="Nearby Services is a vital component of our platform, connecting users with accessible healthcare
          services at affordable costs within their vicinity. Through location-based recommendations and user preferences,
           Nearby Services streamlines the process of finding clinics, pharmacies, and other essential healthcare facilities."
           icon={faLocation}
        />
      </div>
    </div>
  );
}
export default Info;