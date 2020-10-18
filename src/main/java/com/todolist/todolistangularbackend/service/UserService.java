package com.todolist.todolistangularbackend.service;
import com.todolist.todolistangularbackend.entity.User;
import com.todolist.todolistangularbackend.repository.RoleRepository;
import com.todolist.todolistangularbackend.repository.UserRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@Slf4j
public class UserService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    public List<User> getAll(){
        return userRepository.findAll(Sort.by(Sort.Direction.ASC, "lastName", "firstNme"));
    }
    public User findById(Long id) {
        return userRepository.findById(id).get();
    }
    public User save(User item) {
        return userRepository.save(item);
    }
    public Long delete(Long id){
        userRepository.deleteById(id);
        return  id;
    }
    public User getUser(String username) {
        User result = userRepository.findByUsername(username);
        if(result==null)
            log.warn("IN findByUsername - user: {} not found by username: {}", username);

        log.info("IN findByUsername - user: {} found by username: {}", result, username);
        return result;
    }

    public Optional findUserByResetToken(String resetToken) {
        return userRepository.findByResetToken(resetToken);
    }
}
















