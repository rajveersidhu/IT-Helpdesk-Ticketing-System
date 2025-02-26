import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import CreateTicket from "./components/CreateTicket";
import Navbar from "./components/Navbar";

const App = () => {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/create-ticket" element={<CreateTicket />} />
            </Routes>
        </div>
    );
};

export default App;
