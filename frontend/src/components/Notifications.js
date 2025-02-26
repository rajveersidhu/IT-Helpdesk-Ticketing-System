import React, { useState, useEffect } from "react";
import websocketService from "../services/websocketService";

const Notifications = () => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        websocketService.subscribeToNotifications((message) => {
            setMessages((prevMessages) => [...prevMessages, message]);
        });
    }, []);

    return (
        <div>
            <h2>Notifications</h2>
            <ul>
                {messages.map((msg, index) => (
                    <li key={index}>{msg}</li>
                ))}
            </ul>
        </div>
    );
};

export default Notifications;
