package com.helpdesk.service;

import com.helpdesk.model.Ticket;
import com.helpdesk.model.Status; // Ensure Status enum is imported
import com.helpdesk.repository.TicketRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TicketService {

    @Autowired
    private TicketRepository ticketRepository;

    public Ticket createTicket(Ticket ticket) {
        return ticketRepository.save(ticket);
    }

    public List<Ticket> getAllTickets() {
        return ticketRepository.findAll();
    }

    public void assignTicket(Long ticketId, Long userId) {
        Optional<Ticket> ticketOptional = ticketRepository.findById(ticketId);
        if (ticketOptional.isPresent()) {
            Ticket ticket = ticketOptional.get();
            ticket.setAssignedUserId(userId);
            ticketRepository.save(ticket);
        }
    }

    public void updateTicketStatus(Long ticketId, String status) {
        Optional<Ticket> ticketOptional = ticketRepository.findById(ticketId);
        if (ticketOptional.isPresent()) {
            Ticket ticket = ticketOptional.get();
            
            // Convert String to Enum
            try {
                ticket.setStatus(Status.valueOf(status.toUpperCase())); 
                ticketRepository.save(ticket);
            } catch (IllegalArgumentException e) {
                throw new RuntimeException("Invalid status value: " + status);
            }
        }
    }
}
