import axios from "axios";

const API_URL = "http://localhost:8080/api/tickets/";

const getAllTickets = async () => {
    const token = localStorage.getItem("token");
    const response = await axios.get(API_URL, { headers: { Authorization: `Bearer ${token}` } });
    return response.data;
};

const createTicket = async (subject, description, priority) => {
    const token = localStorage.getItem("token");
    await axios.post(API_URL, { subject, description, priority, status: "OPEN" }, { headers: { Authorization: `Bearer ${token}` } });
};

const ticketService = { getAllTickets, createTicket };
export default ticketService;
