# IT Helpdesk Ticketing System

🚀 **A Java-based IT Helpdesk Ticketing System using Spring Boot & MySQL**

## 📌 Project Overview
An **IT Helpdesk Ticketing System** designed to manage and streamline **technical support requests** efficiently. Users can **submit tickets**, IT staff can **assign and track** them, and admins can generate **reports and analytics**.

---
## 📂 Project Structure
```
📂 IT-Helpdesk-Ticketing-System
 ├── 📂 backend                   # Spring Boot backend
 │    ├── 📂 src/main/java/com/helpdesk
 │    │    ├── 📂 controller        # API endpoints
 │    │    │    ├── AuthController.java
 │    │    │    ├── TicketController.java
 │    │    │    ├── UserController.java
 │    │    ├── 📂 config
 │    │    │    ├── MailConfig.java   # NEW: Configures email settings
 │    │    │    ├── WebSocketConfig.java     # NEW: Configures WebSocket
 │    │    ├── 📂 model             # Data models (entities)
 │    │    │    ├── Ticket.java
 │    │    │    ├── User.java
 │    │    │    ├── enums
 │    │    │    │    ├── Priority.java
 │    │    │    │    ├── Status.java
 │    │    │    │    ├── Role.java
 │    │    ├── 📂 repository        # Data access layer
 │    │    │    ├── TicketRepository.java
 │    │    │    ├── UserRepository.java
 │    │    ├── 📂 service           # Business logic
 │    │    │    ├── TicketService.java
 │    │    │    ├── UserService.java
 │    │    │    ├── EmailService.java  # NEW: Handles sending emails
 │    │    │    ├── NotificationService.java  # NEW: WebSocket notifications
 │    │    ├── 📂 security          # JWT-based authentication & security
 │    │    │    ├── JwtUtil.java
 │    │    │    ├── JwtFilter.java
 │    │    │    ├── SecurityConfig.java
 │    │    ├── ITHelpdeskApplication.java  # Main application entry
 │    ├── 📂 src/main/resources
 │    │    ├── application.properties     # Database & security configs
 │    ├── 📄 pom.xml                       # Maven dependencies
 │    ├── 📄 README.md                     # Backend documentation
 │
 ├── 📂 frontend                  # React.js frontend
 │    ├── 📂 public
 │    │    ├── index.html
 │    ├── 📂 src
 │    │    ├── 📂 components       # UI components
 │    │    │    ├── Login.js
 │    │    │    ├── Dashboard.js
 │    │    │    ├── CreateTicket.js
 │    │    │    ├── Navbar.js
 │    │    │    ├── Notifications.js  # NEW: WebSocket listener component
 │    │    ├── 📂 services         # API service calls
 │    │    │    ├── authService.js
 │    │    │    ├── ticketService.js
 │    │    │    ├── websocketService.js  # NEW: Handles WebSocket connection
 │    │    ├── App.js              # Main application file
 │    │    ├── index.js            # React entry point
 │    ├── 📄 package.json          # Node.js dependencies
 │    ├── 📄 README.md              # Frontend documentation
 │
 ├── 📄 .gitignore                # Ignore unnecessary files
 ├── 📄 README.md                 # Monorepo documentation
```
---

## 🚀 Getting Started
### 1️⃣ **Clone the Repository**
```bash
git clone https://github.com/rajveersidhu/IT-Helpdesk-Ticketing-System.git
cd IT-Helpdesk-Ticketing-System
```

### 2️⃣ **Set Up MySQL Database**
```sql
CREATE DATABASE helpdesk;
```

### 3️⃣ **Configure Application** (Update `application.properties`)
```properties
spring.datasource.url=jdbc:mysql://localhost:3306/helpdesk
spring.datasource.username=root
spring.datasource.password=yourpassword
spring.jpa.hibernate.ddl-auto=update
```

### 4️⃣ **Build & Run the Backend**
```bash
cd backend
mvn clean install
mvn spring-boot:run
```

### 5️⃣ **Test API Endpoints** (Using Curl or Postman)
- **List all tickets:**
```bash
curl -X GET http://localhost:8080/api/tickets
```
- **Create a ticket:**
```bash
curl -X POST -H "Content-Type: application/json" -d '{
    "subject": "Internet not working",
    "description": "Cannot connect to WiFi",
    "priority": "HIGH",
    "status": "OPEN"
}' http://localhost:8080/api/tickets
```

---

## 🏆 Future Enhancements
📌 **JWT authentication for secure API access**
📌 **Reporting & analytics dashboard**
📌 **Slack/Teams integration for notifications**

---

## 📜 License
This project is licensed under the **MIT License**.

---

## 🤝 Contributing
Contributions are welcome! Feel free to fork this repo and submit a pull request.

---

## 📬 Contact
- **GitHub:** [rajveersidhu](https://github.com/rajveersidhu)
- **LinkedIn:** [Rajveer Sidhu](https://linkedin.com/in/rajveer-sidhu)
- 


Here is the **complete `README.md` file** for your **IT Helpdesk Ticketing System (Spring Boot + React + WebSockets)** repository.

---

# **🚀 IT Helpdesk Ticketing System**
A **full-stack IT Helpdesk Ticketing System** designed for organizations to manage IT support requests efficiently. Built with:
- **Spring Boot** (Backend with JWT Authentication, MySQL, Email & WebSockets)
- **React.js** (Frontend with Role-Based Access & Live Notifications)
- **MySQL** (Database for storing tickets & users)

---

## **📌 Features**
✅ **User Authentication** (JWT-based login system)  
✅ **Role-Based Access** (**Admin, IT Staff, Users**)  
✅ **Create & Assign Tickets**  
✅ **Email Notifications** (Ticket updates, assignments)  
✅ **Real-Time WebSocket Notifications**  
✅ **Admin Panel** (Manage users, tickets, and assignments)  
✅ **REST API for Integration**  

---
## 📂 Project Structure
```
📂 IT-Helpdesk-Ticketing-System
 ├── 📂 backend                   # Spring Boot backend
 │    ├── 📂 src/main/java/com/helpdesk
 │    │    ├── 📂 controller        # API endpoints
 │    │    │    ├── AuthController.java
 │    │    │    ├── TicketController.java
 │    │    │    ├── UserController.java
 │    │    ├── 📂 config
 │    │    │    ├── MailConfig.java   # NEW: Configures email settings
 │    │    │    ├── WebSocketConfig.java     # NEW: Configures WebSocket
 │    │    ├── 📂 model             # Data models (entities)
 │    │    │    ├── Ticket.java
 │    │    │    ├── User.java
 │    │    │    ├── enums
 │    │    │    │    ├── Priority.java
 │    │    │    │    ├── Status.java
 │    │    │    │    ├── Role.java
 │    │    ├── 📂 repository        # Data access layer
 │    │    │    ├── TicketRepository.java
 │    │    │    ├── UserRepository.java
 │    │    ├── 📂 service           # Business logic
 │    │    │    ├── TicketService.java
 │    │    │    ├── UserService.java
 │    │    │    ├── EmailService.java  # NEW: Handles sending emails
 │    │    │    ├── NotificationService.java  # NEW: WebSocket notifications
 │    │    ├── 📂 security          # JWT-based authentication & security
 │    │    │    ├── JwtUtil.java
 │    │    │    ├── JwtFilter.java
 │    │    │    ├── SecurityConfig.java
 │    │    ├── ITHelpdeskApplication.java  # Main application entry
 │    ├── 📂 src/main/resources
 │    │    ├── application.properties     # Database & security configs
 │    ├── 📄 pom.xml                       # Maven dependencies
 │    ├── 📄 README.md                     # Backend documentation
 │
 ├── 📂 frontend                  # React.js frontend
 │    ├── 📂 public
 │    │    ├── index.html
 │    ├── 📂 src
 │    │    ├── 📂 components       # UI components
 │    │    │    ├── Login.js
 │    │    │    ├── Dashboard.js
 │    │    │    ├── CreateTicket.js
 │    │    │    ├── Navbar.js
 │    │    │    ├── Notifications.js  # NEW: WebSocket listener component
 │    │    ├── 📂 services         # API service calls
 │    │    │    ├── authService.js
 │    │    │    ├── ticketService.js
 │    │    │    ├── websocketService.js  # NEW: Handles WebSocket connection
 │    │    ├── App.js              # Main application file
 │    │    ├── index.js            # React entry point
 │    ├── 📄 package.json          # Node.js dependencies
 │    ├── 📄 README.md              # Frontend documentation
 │
 ├── 📄 .gitignore                # Ignore unnecessary files
 ├── 📄 README.md                 # Monorepo documentation
```
---
# **1️⃣ Backend Setup (Spring Boot)**
## **Step 1: Configure MySQL Database**
1. Open MySQL and run:
   ```sql
   CREATE DATABASE helpdesk;
   CREATE USER 'admin'@'localhost' IDENTIFIED BY 'password';
   GRANT ALL PRIVILEGES ON helpdesk.* TO 'admin'@'localhost';
   FLUSH PRIVILEGES;
   ```

2. **Update `backend/src/main/resources/application.properties`**
   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/helpdesk
   spring.datasource.username=admin
   spring.datasource.password=password
   spring.jpa.hibernate.ddl-auto=update
   ```

---

## **Step 2: Configure Email for Notifications**
- In `application.properties`, add:
  ```properties
  spring.mail.host=smtp.gmail.com
  spring.mail.port=587
  spring.mail.username=your-email@gmail.com
  spring.mail.password=your-email-password
  spring.mail.properties.mail.smtp.auth=true
  spring.mail.properties.mail.smtp.starttls.enable=true
  ```

> **Note:** Enable **Less Secure Apps** in Gmail or use an **App Password**.

---

## **Step 3: Run the Backend**
Navigate to the **backend folder** and run:
```bash
cd backend
mvn clean install
mvn spring-boot:run
```
- API Base URL: **`http://localhost:8080`**
- WebSocket Endpoint: **`ws://localhost:8080/ws`**

---

# **2️⃣ Frontend Setup (React.js)**
## **Step 1: Install Dependencies**
Navigate to the **frontend folder** and install dependencies:
```bash
cd frontend
npm install
```

---

## **Step 2: Run the Frontend**
Start the React app:
```bash
npm start
```
- Open **`http://localhost:3000`** in the browser.

---

# **3️⃣ Testing Features**
## ✅ **User Authentication (JWT)**
1. **Create a User** (Using Postman)
   ```http
   POST http://localhost:8080/api/auth/register
   Body (JSON):
   {
       "email": "admin@example.com",
       "password": "password",
       "role": "ADMIN"
   }
   ```
2. **Login to Get JWT Token**
   ```http
   POST http://localhost:8080/api/auth/login
   Body (JSON):
   {
       "email": "admin@example.com",
       "password": "password"
   }
   ```
3. Copy the **token** and use it in **all API requests** as:
   ```http
   Authorization: Bearer YOUR_JWT_TOKEN
   ```

---

## ✅ **Create & Assign Tickets**
1. **Create a Ticket**
   ```http
   POST http://localhost:8080/api/tickets
   Headers: { "Authorization": "Bearer YOUR_JWT_TOKEN" }
   Body (JSON):
   {
       "subject": "WiFi not working",
       "description": "The office WiFi is down.",
       "priority": "HIGH",
       "status": "OPEN"
   }
   ```

2. **Assign a Ticket**
   ```http
   PUT http://localhost:8080/api/tickets/1/assign?userId=2
   Headers: { "Authorization": "Bearer YOUR_JWT_TOKEN" }
   ```

---

## ✅ **Real-Time WebSocket Notifications**
1. Open **two browser tabs**:
   - **Admin Dashboard** → **`http://localhost:3000/admin`**
   - **IT Staff Dashboard** → **`http://localhost:3000/dashboard`**

2. When a ticket is:
   - **Created** → IT Staff gets notified instantly.
   - **Assigned** → The user receives an instant notification.
   - **Status Updated** → The requester gets a live update.

---

# **4️⃣ Deployment**
## **Backend Deployment**
### **1️⃣ Package the App**
```bash
cd backend
mvn clean package
```
This creates a **`.jar`** file in `target/` directory.

### **2️⃣ Deploy to Server**
Copy the `.jar` to a remote server and run:
```bash
java -jar IT-Helpdesk-System.jar
```
- Runs on **`http://your-server-ip:8080`**

---

## **Frontend Deployment**
### **1️⃣ Build Production Files**
```bash
cd frontend
npm run build
```
- The `build/` directory contains the optimized React app.

### **2️⃣ Deploy to Server**
- Upload `build/` to **Apache, Nginx, or Firebase Hosting**.

Example for **Nginx Deployment**:
1. Install **Nginx**:
   ```bash
   sudo apt update && sudo apt install nginx -y
   ```
2. Configure **Nginx**
   ```bash
   sudo nano /etc/nginx/sites-available/helpdesk
   ```
   Add:
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com;
       root /var/www/helpdesk/build;
       index index.html;
   }
   ```
3. Enable Site:
   ```bash
   sudo ln -s /etc/nginx/sites-available/helpdesk /etc/nginx/sites-enabled/
   sudo systemctl restart nginx
   ```

Now your **frontend is live** at **`http://yourdomain.com`** 🎉

---

# **🚀 Summary**
✅ **Backend (Spring Boot) runs at `http://localhost:8080`**  
✅ **Frontend (React) runs at `http://localhost:3000`**  
✅ **JWT Authentication + Role-Based Access (Admin, IT Staff, Users)**  
✅ **Email Notifications for Ticket Updates**  
✅ **Real-Time WebSocket Notifications for Assignments & Status Changes**  
✅ **Deployment Ready for Server Hosting**  

---
---

## 📬 Contact
- **GitHub:** [rajveersidhu](https://github.com/rajveersidhu)
- **LinkedIn:** [Rajveer Sidhu](https://linkedin.com/in/rajveer-sidhu)

