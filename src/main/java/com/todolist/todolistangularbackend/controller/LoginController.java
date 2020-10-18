package com.todolist.todolistangularbackend.controller;

import com.todolist.todolistangularbackend.dto.AuthenticationRequestDto;
import com.todolist.todolistangularbackend.entity.Role;
import com.todolist.todolistangularbackend.entity.Status;
import com.todolist.todolistangularbackend.entity.User;
import com.todolist.todolistangularbackend.repository.RoleRepository;
import com.todolist.todolistangularbackend.security.jwt.JwtTokenProvider;
import com.todolist.todolistangularbackend.service.EmailService;
import com.todolist.todolistangularbackend.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.time.LocalDate;
import java.util.*;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(value = "/api/auth")
@Slf4j
public class LoginController {
    private final AuthenticationManager authenticationManager;

    private final JwtTokenProvider jwtTokenProvider;

    private final UserService userService;

    private final RoleRepository roleRepository;

    @Autowired
    private EmailService emailService;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    @Autowired
    public LoginController(AuthenticationManager authenticationManager, JwtTokenProvider jwtTokenProvider, UserService userService, RoleRepository roleRepository) {
        this.authenticationManager = authenticationManager;
        this.jwtTokenProvider = jwtTokenProvider;
        this.userService = userService;
        this.roleRepository = roleRepository;
    }

    @PostMapping("/login")
    public ResponseEntity login(@RequestBody AuthenticationRequestDto requestDto) {
        try {
            String username = requestDto.getUsername();
            User user = userService.getUser(username);
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, requestDto.getPassword()));

            if (user == null) {
                throw new UsernameNotFoundException("User with username: " + username + " not found");
            }

            String token = jwtTokenProvider.createToken(username, user.getRoles());

            Map<Object, Object> response = new HashMap<>();
            response.put("token", token);

            return ResponseEntity.ok(response);
        } catch (AuthenticationException e) {
            throw new BadCredentialsException("Invalid username or password");
        }
    }

    @PostMapping("/register")
    public ResponseEntity register(@RequestBody AuthenticationRequestDto requestDto, HttpServletRequest request) {
        try {
            String username = requestDto.getUsername();
            String password =requestDto.getPassword();
            User user = new User();
            user.setUsername(username);
            user.setPassword(passwordEncoder.encode(password));
            user.setStatus(Status.ACTIVE);
            user.setCreated(LocalDate.now());
            Optional<Role> role = roleRepository.findById((long) 1);
            if(role.isPresent()) {
                List<Role> roles = new ArrayList<>();
                roles.add(role.get());
                user.setRoles(roles);
            }
            //user.setResetToken(UUID.randomUUID().toString());
            User newUser = userService.save(user);
            Map<Object, Object> response = new HashMap<>();
            response.put("user", newUser);
            /*String appUrl = "https://" + request.getServerName();
            // Email message
            SimpleMailMessage activateAccount = new SimpleMailMessage();
            activateAccount.setFrom("planet9.it.co.sup@gmail.com");
            activateAccount.setTo(newUser.getUsername());
            activateAccount.setSubject("Activate account");
            activateAccount.setText("To activate account in the system click the link below:\n" + appUrl
                + "/activate?token=" + newUser.getResetToken());
            emailService.sendEmail(activateAccount);*/
            return ResponseEntity.ok(response);
        } catch (AuthenticationException e) {
            throw new BadCredentialsException("Invalid username or password");
        }
    }
    @RequestMapping(value = "/activate", method = RequestMethod.POST)
    public ResponseEntity<Object> activateAccount(@RequestParam String token, HttpServletRequest request) {
        Optional<User> currentUser = userService.findUserByResetToken(token);
        if (currentUser.isPresent()) {
            User activeUser = currentUser.get();
            activeUser.setResetToken(null);
            activeUser.setStatus(Status.ACTIVE);
            userService.save(activeUser);
            String appUrl = "https://" + request.getServerName();
            // Email message
            SimpleMailMessage registerAccount = new SimpleMailMessage();
            registerAccount.setFrom("planet9.it.co.sup@gmail.com");
            registerAccount.setTo("info@planet9.kz");
            registerAccount.setSubject("Registered account");
            registerAccount.setText("Registered user with username: " + activeUser.getUsername());
            emailService.sendEmail(registerAccount);
            return new ResponseEntity<>(HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_ACCEPTABLE);
        }
    }
    @GetMapping(value = "/user")
    public ResponseEntity<User> getUserByToken(HttpServletRequest req){
        String token = jwtTokenProvider.resolveToken(req);
        String username = jwtTokenProvider.getUsername(token);
        User user = userService.getUser(username);
        if(user == null){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        User result = user;
        log.info("from login {}", user.getRoles());
        return new ResponseEntity<>(result, HttpStatus.OK);
    }
}
