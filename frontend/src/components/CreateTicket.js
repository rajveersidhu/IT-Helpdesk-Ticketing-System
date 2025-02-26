import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ticketService from "../services/ticketService";

const CreateTicket = () => {
    const [subject, setSubject] = useState("");
    const [description, setDescription] = useState("");
    const [priority, setPriority] = useState("LOW");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await ticketService.createTicket(subject, description, priority);
            alert("Ticket Created Successfully!");
            navigate("/dashboard");
        } catch (error) {
            alert("Failed to create ticket.");
        }
    };

    return (
        <div>
            <h2>Create a New Ticket</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Subject" value={subject} onChange={(e) => setSubject(e.target.value)} required />
                <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
                <select value={priority} onChange={(e) => setPriority(e.target.value)}>
                    <option value="LOW">Low</option>
                    <option value="MEDIUM">Medium</option>
                    <option value="HIGH">High</option>
                </select>
                <button type="submit">Submit Ticket</button>
            </form>
        </div>
    );
};

export default CreateTicket;
