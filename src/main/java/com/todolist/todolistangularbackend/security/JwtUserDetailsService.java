package com.todolist.todolistangularbackend.security;

import com.todolist.todolistangularbackend.Exception.NotFoundException;
import com.todolist.todolistangularbackend.entity.User;
import com.todolist.todolistangularbackend.security.jwt.JwtUser;
import com.todolist.todolistangularbackend.security.jwt.JwtUserFactory;
import com.todolist.todolistangularbackend.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;

@Service
@Slf4j
public class JwtUserDetailsService implements UserDetailsService {

    private final UserService userService;

    @Autowired
    public JwtUserDetailsService(UserService userService) {
        this.userService = userService;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws NotFoundException {
        User user = userService.getUser(username);
        if (user == null) {
            throw new NotFoundException();
        }

        JwtUser jwtUser = JwtUserFactory.create(user);
        log.info("IN loadUserByUsername - user with username: {} successfully loaded", username);
        return jwtUser;
    }
}
