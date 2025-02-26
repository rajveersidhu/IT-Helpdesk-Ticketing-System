import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";

const login = async (email, password) => {
    const response = await axios.post(API_URL + "login", { email, password });
    localStorage.setItem("token", response.data.token);
};

const authService = { login };
export default authService;
