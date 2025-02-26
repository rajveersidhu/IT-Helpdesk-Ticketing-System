package com.helpdesk.service;

import com.helpdesk.model.Ticket;
import com.helpdesk.repository.TicketRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class TicketService {
    @Autowired
    private TicketRepository ticketRepository;

    public List<Ticket> getAllTickets() {
        return ticketRepository.findAll();
    }

    public Ticket createTicket(Ticket ticket) {
        return ticketRepository.save(ticket);
    }
}

@Autowired
private EmailService emailService;

public Ticket createTicket(Ticket ticket) {
    Ticket savedTicket = ticketRepository.save(ticket);
    emailService.sendEmail("it-support@example.com", "New Ticket Created", 
        "A new ticket has been created:\n\nSubject: " + ticket.getSubject() + 
        "\nPriority: " + ticket.getPriority());

    return savedTicket;
}

public void assignTicket(Long ticketId, Long userId) {
    Ticket ticket = ticketRepository.findById(ticketId).orElseThrow(() -> new RuntimeException("Ticket not found"));
    User assignedUser = userRepository.findById(userId).orElseThrow(() -> new RuntimeException("User not found"));

    ticket.setAssignedTo(assignedUser);
    ticketRepository.save(ticket);

    emailService.sendEmail(assignedUser.getEmail(), "Ticket Assigned", 
        "You have been assigned a new ticket:\n\nSubject: " + ticket.getSubject() + 
        "\nPriority: " + ticket.getPriority());
}

public void updateTicketStatus(Long ticketId, Status status) {
    Ticket ticket = ticketRepository.findById(ticketId).orElseThrow(() -> new RuntimeException("Ticket not found"));
    ticket.setStatus(status);
    ticketRepository.save(ticket);

    emailService.sendEmail(ticket.getAssignedTo().getEmail(), "Ticket Status Updated", 
        "The status of your assigned ticket has been updated:\n\nSubject: " + ticket.getSubject() + 
        "\nNew Status: " + status);
}
@Autowired
private NotificationService notificationService;

public Ticket createTicket(Ticket ticket) {
    Ticket savedTicket = ticketRepository.save(ticket);
    notificationService.sendNotification("/topic/tickets", "New Ticket Created: " + ticket.getSubject());
    return savedTicket;
}

public void assignTicket(Long ticketId, Long userId) {
    Ticket ticket = ticketRepository.findById(ticketId).orElseThrow(() -> new RuntimeException("Ticket not found"));
    User assignedUser = userRepository.findById(userId).orElseThrow(() -> new RuntimeException("User not found"));

    ticket.setAssignedTo(assignedUser);
    ticketRepository.save(ticket);

    notificationService.sendNotification("/topic/tickets", "Ticket Assigned to " + assignedUser.getEmail());
}
