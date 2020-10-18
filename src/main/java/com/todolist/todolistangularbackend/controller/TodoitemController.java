package com.todolist.todolistangularbackend.controller;

import com.todolist.todolistangularbackend.Exception.NotFoundException;
import com.todolist.todolistangularbackend.dto.AuthenticationRequestDto;
import com.todolist.todolistangularbackend.dto.TodoitemDto;
import com.todolist.todolistangularbackend.entity.Todoitem;
import com.todolist.todolistangularbackend.entity.User;
import com.todolist.todolistangularbackend.repository.TodoitemRepository;
import com.todolist.todolistangularbackend.security.jwt.JwtTokenProvider;
import com.todolist.todolistangularbackend.service.UserService;
import org.aspectj.weaver.ast.Not;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(value = "/api/todoitem")
public class TodoitemController {
    @Autowired
    private TodoitemRepository todoitemRepository;
    @Autowired
    private UserService userService;
    @Autowired
    private JwtTokenProvider tokenProvider;
    @PostMapping("/create")
    public ResponseEntity<TodoitemDto> newTodoitem(@RequestBody String content, @RequestHeader (name="Authorization") String token) {
        try {
            Todoitem todoitem = new Todoitem();
            todoitem.setContent(content);
            todoitem.setCreated(LocalDate.now());
            todoitem.setStatus("created");
            User user = userService.getUser(tokenProvider.getUsername(token));
            todoitem.setUser(user);
            Todoitem newItem = todoitemRepository.save(todoitem);
            return new ResponseEntity<>(TodoitemDto.fromTodoitem(newItem), HttpStatus.OK);
        } catch (NotFoundException e) {
            throw new BadCredentialsException("Invalid data");
        }
    }

    @GetMapping("/all")
    public ResponseEntity<List<TodoitemDto>> getAll(@RequestHeader (name="Authorization") String token) {
        try {
            User user = userService.getUser(tokenProvider.getUsername(token));
            List<Todoitem> items = todoitemRepository.findAllByUser(user);
            List<TodoitemDto> dtos = new ArrayList<>();
            for (Todoitem item : items){
                dtos.add(TodoitemDto.fromTodoitem(item));
            }
            return new ResponseEntity<>(dtos, HttpStatus.OK);
        } catch (NotFoundException e) {
            throw new BadCredentialsException("Invalid data");
        }
    }
    @GetMapping("/{id}")
    public ResponseEntity<TodoitemDto> getOne(@PathVariable Long id) {
        try {
            if(todoitemRepository.findById(id).isPresent()) {
                Todoitem item = todoitemRepository.findById(id).get();
                return new ResponseEntity<>(TodoitemDto.fromTodoitem(item), HttpStatus.OK);
            } else {
                return new ResponseEntity<>(HttpStatus.OK);
            }
        } catch (NotFoundException e) {
            throw new BadCredentialsException("Invalid data");
        }
    }

    @PostMapping("/update")
    public ResponseEntity<TodoitemDto> update(@RequestBody Todoitem todoitem, @RequestHeader (name="Authorization") String token) {
        try {
            User user = userService.getUser(tokenProvider.getUsername(token));
            todoitem.setUser(user);
            TodoitemDto dto = TodoitemDto.fromTodoitem(todoitemRepository.save(todoitem));
            return new ResponseEntity<>(dto, HttpStatus.OK);
        } catch (NotFoundException e) {
            throw new BadCredentialsException("Invalid data");
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Todoitem> delete(@PathVariable Long id) {
        try {
            todoitemRepository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (NotFoundException e) {
            throw new BadCredentialsException("Invalid data");
        }
    }
}
