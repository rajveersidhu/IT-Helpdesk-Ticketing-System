package com.helpdesk.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Ticket {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String subject;
    private String description;

    @Enumerated(EnumType.STRING)  // Correct Priority reference
    private Priority priority;

    @Enumerated(EnumType.STRING)  // Correct Status reference
    private Status status;

    private Long assignedUserId;
}
