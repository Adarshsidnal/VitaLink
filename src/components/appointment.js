import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './Appointment.css'; // Renamed App.css to Appointment.css for clarity

function Appointment() {
    const [feedbacks, setFeedbacks] = useState([]);
    const [formData, setFormData] = useState({ name: "", email: "", feedback: "" });

    useEffect(() => {
        fetchFeedbacks();
    }, []);

    const fetchFeedbacks = async () => {
        try {
            const response = await axios.get("http://localhost:5000/api/feedback");
            setFeedbacks(response.data);
        } catch (error) {
            console.error("Error fetching feedbacks", error);
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5000/api/feedback", formData);
            setFeedbacks([...feedbacks, response.data]);
            toast.success("Feedback submitted successfully!");
            setFormData({ name: "", email: "", feedback: "" });
        } catch (error) {
            toast.error("Failed to submit feedback");
        }
    };

    return (
        <div className="appointment-container">
            
            {/* Your appointment booking UI goes here */}

            <h2>Feedback</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Feedback:</label>
                    <textarea
                        name="feedback"
                        value={formData.feedback}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Submit Feedback</button>
            </form>


            <ToastContainer />
        </div>
    );
}

export default Appointment;
