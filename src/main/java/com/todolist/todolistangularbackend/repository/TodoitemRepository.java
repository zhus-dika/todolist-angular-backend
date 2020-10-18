package com.todolist.todolistangularbackend.repository;

import com.todolist.todolistangularbackend.entity.Todoitem;
import com.todolist.todolistangularbackend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TodoitemRepository extends JpaRepository<Todoitem, Long> {
    List<Todoitem> findAllByUser(User user);
}
