package com.helpdesk.controller;

import com.helpdesk.model.Ticket;
import com.helpdesk.service.TicketService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/tickets")
public class TicketController {

    @Autowired
    private TicketService ticketService;

    @PostMapping
    public ResponseEntity<Ticket> createTicket(@RequestBody Ticket ticket) {
        return ResponseEntity.ok(ticketService.createTicket(ticket));
    }

    @GetMapping
    public ResponseEntity<List<Ticket>> getAllTickets() {
        return ResponseEntity.ok(ticketService.getAllTickets());
    }

    @PutMapping("/{ticketId}/assign")
    public ResponseEntity<?> assignTicket(@PathVariable Long ticketId, @RequestParam Long userId) {
        ticketService.assignTicket(ticketId, userId);
        return ResponseEntity.ok("Ticket assigned successfully!");
    }

    @PutMapping("/{ticketId}/update-status")
    public ResponseEntity<?> updateStatus(@PathVariable Long ticketId, @RequestParam String status) {
        ticketService.updateTicketStatus(ticketId, status);
        return ResponseEntity.ok("Ticket status updated!");
    }
}
