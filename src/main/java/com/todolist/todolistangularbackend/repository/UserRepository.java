package com.todolist.todolistangularbackend.repository;

import com.todolist.todolistangularbackend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

// This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository
// CRUD refers Create, Read, Update, Delete
public interface UserRepository extends JpaRepository<User, Long> {
    User findByUsername(String username);
    Optional<User> findByResetToken(String resetToken);
}


