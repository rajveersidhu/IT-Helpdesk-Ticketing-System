package com.helpdesk.controller;

import com.helpdesk.model.Ticket;
import com.helpdesk.service.TicketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/tickets")
public class TicketController {
    @Autowired
    private TicketService ticketService;

    @GetMapping
    public List<Ticket> getAllTickets() {
        return ticketService.getAllTickets();
    }

    @PostMapping
    public Ticket createTicket(@RequestBody Ticket ticket) {
        return ticketService.createTicket(ticket);
    }
}

@PutMapping("/{ticketId}/assign")
public ResponseEntity<?> assignTicket(@PathVariable Long ticketId, @RequestParam Long userId) {
    ticketService.assignTicket(ticketId, userId);
    return ResponseEntity.ok("Ticket assigned successfully!");
}

@PutMapping("/{ticketId}/update-status")
public ResponseEntity<?> updateStatus(@PathVariable Long ticketId, @RequestParam String status) {
    ticketService.updateTicketStatus(ticketId, Status.valueOf(status.toUpperCase()));
    return ResponseEntity.ok("Ticket status updated!");
}
