package com.todolist.todolistangularbackend.entity;

import lombok.Data;
import lombok.ToString;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Data
@ToString
@Table(name = "todoitems")
public class Todoitem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "created")
    private LocalDate created;

    @Column(name = "content")
    private String content;

    @Column(name = "status")
    private String status;

    @ManyToOne
    private User user;
}
