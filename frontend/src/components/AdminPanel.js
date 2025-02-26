import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ticketService from "../services/ticketService";
import userService from "../services/userService";

const AdminPanel = () => {
    const [tickets, setTickets] = useState([]);
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                setTickets(await ticketService.getAllTickets());
                setUsers(await userService.getAllUsers());
            } catch (error) {
                alert("Error loading data.");
            }
        };
        fetchData();
    }, []);

    const assignTicket = async (ticketId, userId) => {
        await ticketService.assignTicket(ticketId, userId);
        alert("Ticket assigned successfully!");
        setTickets(await ticketService.getAllTickets());
    };

    const updateStatus = async (ticketId, status) => {
        await ticketService.updateTicketStatus(ticketId, status);
        alert("Status updated!");
        setTickets(await ticketService.getAllTickets());
    };

    return (
        <div>
            <h2>Admin Panel</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Subject</th>
                        <th>Status</th>
                        <th>Priority</th>
                        <th>Assigned To</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {tickets.map(ticket => (
                        <tr key={ticket.id}>
                            <td>{ticket.id}</td>
                            <td>{ticket.subject}</td>
                            <td>{ticket.status}</td>
                            <td>{ticket.priority}</td>
                            <td>{ticket.assignedTo ? ticket.assignedTo.email : "Unassigned"}</td>
                            <td>
                                <select onChange={(e) => assignTicket(ticket.id, e.target.value)}>
                                    <option value="">Assign</option>
                                    {users.map(user => (
                                        <option key={user.id} value={user.id}>{user.email}</option>
                                    ))}
                                </select>
                                <select onChange={(e) => updateStatus(ticket.id, e.target.value)}>
                                    <option value="">Update Status</option>
                                    <option value="IN_PROGRESS">In Progress</option>
                                    <option value="CLOSED">Closed</option>
                                </select>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AdminPanel;
