import SockJS from "sockjs-client";
import Stomp from "stompjs";

const socket = new SockJS("http://localhost:8080/ws");
const stompClient = Stomp.over(socket);

stompClient.connect({}, () => {
    console.log("Connected to WebSocket");
});

const subscribeToNotifications = (callback) => {
    stompClient.subscribe("/topic/tickets", (message) => {
        callback(message.body);
    });
};

const websocketService = { subscribeToNotifications };
export default websocketService;
