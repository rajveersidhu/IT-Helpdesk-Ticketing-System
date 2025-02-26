import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import CreateTicket from "./components/CreateTicket";
import AdminPanel from "./components/AdminPanel";
import AssignTicket from "./components/AssignTicket";
import Navbar from "./components/Navbar";
import Notifications from "./components/Notifications";

const App = () => {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/notifications" element={<Notifications />} />
                <Route path="/create-ticket" element={<CreateTicket />} />
                <Route path="/admin" element={<AdminPanel />} />
                <Route path="/assign-ticket/:ticketId" element={<AssignTicket />} />
            </Routes>
        </div>
    );
};

export default App;
