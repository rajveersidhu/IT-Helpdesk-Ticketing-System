import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ticketService from "../services/ticketService";
import Notifications from "./Notifications";

const Dashboard = () => {
    const [tickets, setTickets] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchTickets = async () => {
            try {
                const data = await ticketService.getAllTickets();
                setTickets(data);
            } catch (error) {
                alert("Failed to load tickets.");
            }
        };
        fetchTickets();
    }, []);

    return (
        <div>
            <h2>Helpdesk Dashboard</h2>
            <button onClick={() => navigate("/create-ticket")}>Create New Ticket</button>
            <table border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Subject</th>
                        <th>Status</th>
                        <th>Priority</th>
                    </tr>
                </thead>
                <tbody>
                    {tickets.map(ticket => (
                        <tr key={ticket.id}>
                            <td>{ticket.id}</td>
                            <td>{ticket.subject}</td>
                            <td>{ticket.status}</td>
                            <td>{ticket.priority}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button onClick={() => { localStorage.removeItem("token"); navigate("/login"); }}>Logout</button>
        </div>
    );
};

export default Dashboard;
