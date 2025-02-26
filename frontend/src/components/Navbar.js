import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/create-ticket">Create Ticket</Link>
            <Link to="/admin">Admin Panel</Link>
            <Link to="/login" onClick={() => localStorage.removeItem("token")}>Logout</Link>
        </nav>
    );
};

export default Navbar;
