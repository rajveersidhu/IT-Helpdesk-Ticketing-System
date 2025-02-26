import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ticketService from "../services/ticketService";
import userService from "../services/userService";

const AssignTicket = () => {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState("");
    const { ticketId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUsers = async () => {
            setUsers(await userService.getAllUsers());
        };
        fetchUsers();
    }, []);

    const handleAssign = async () => {
        if (!selectedUser) return alert("Select a user first!");
        await ticketService.assignTicket(ticketId, selectedUser);
        alert("Ticket assigned successfully!");
        navigate("/admin");
    };

    return (
        <div>
            <h2>Assign Ticket</h2>
            <select onChange={(e) => setSelectedUser(e.target.value)}>
                <option value="">Select User</option>
                {users.map(user => (
                    <option key={user.id} value={user.id}>{user.email}</option>
                ))}
            </select>
            <button onClick={handleAssign}>Assign</button>
        </div>
    );
};

export default AssignTicket;
