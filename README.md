# IT Helpdesk Ticketing System

🚀 **A Java-based IT Helpdesk Ticketing System using Spring Boot & MySQL**

## 📌 Project Overview
An **IT Helpdesk Ticketing System** designed to manage and streamline **technical support requests** efficiently. Users can **submit tickets**, IT staff can **assign and track** them, and admins can generate **reports and analytics**.

## ✨ Features
- ✅ **User Authentication:** Secure login for employees, IT staff, and admins
- ✅ **Ticket Management:** Create, update, assign, and close IT support tickets
- ✅ **Priority & Status:** Assign priority (Low, Medium, High) and track ticket status
- ✅ **Email Notifications:** Send alerts when a ticket is created, assigned, or resolved
- ✅ **Admin Dashboard:** View open tickets, issue trends, and generate reports
- ✅ **REST API Integration:** Expose endpoints for external system integrations

---

## 🛠️ Technologies Used
### **Backend (Spring Boot)**
- **Spring Boot + Spring MVC** (for REST APIs)
- **Spring Security** (for authentication & authorization)
- **Hibernate & JPA** (for database integration)
- **MySQL/PostgreSQL** (for persistent data storage)
- **Lombok** (to reduce boilerplate code)

### **Frontend (Optional)**
- **JavaFX** (for desktop UI) OR **React.js** (for web UI)

---
## 📂 Project Structure
```
📂 IT-Helpdesk-Ticketing-System
 ├── 📂 src
 │    ├── 📂 main
 │    │    ├── 📂 java/com/helpdesk
 │    │    │    ├── 📂 controller
 │    │    │    │    ├── TicketController.java
 │    │    │    │    ├── UserController.java
 │    │    │    │    ├── AuthController.java   # NEW (Handles login & JWT generation)
 │    │    │    ├── 📂 model
 │    │    │    │    ├── Ticket.java
 │    │    │    │    ├── User.java
 │    │    │    │    ├── enums
 │    │    │    │    │    ├── Priority.java
 │    │    │    │    │    ├── Status.java
 │    │    │    │    │    ├── Role.java
 │    │    │    ├── 📂 repository
 │    │    │    │    ├── TicketRepository.java
 │    │    │    │    ├── UserRepository.java
 │    │    │    ├── 📂 service
 │    │    │    │    ├── TicketService.java
 │    │    │    │    ├── UserService.java
 │    │    │    ├── 📂 security
 │    │    │    │    ├── JwtUtil.java         # NEW (JWT token utility)
 │    │    │    │    ├── JwtFilter.java       # NEW (Intercepts and validates JWT)
 │    │    │    │    ├── SecurityConfig.java  # NEW (Spring Security configuration)
 │    │    │    ├── ITHelpdeskApplication.java
 │    │    ├── 📂 resources
 │    │    │    ├── application.properties
 ├── 📄 pom.xml
 ├── 📄 README.md

```

---

## 🚀 Getting Started
### 1️⃣ **Clone the Repository**
```bash
git clone https://github.com/yourusername/it-helpdesk.git
cd it-helpdesk
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
