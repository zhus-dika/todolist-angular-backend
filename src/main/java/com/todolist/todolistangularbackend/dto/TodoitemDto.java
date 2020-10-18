package com.todolist.todolistangularbackend.dto;

import com.todolist.todolistangularbackend.entity.Todoitem;
import lombok.Data;

import java.time.LocalDate;
@Data
public class TodoitemDto {
    private Long id;
    private String status;
    private String content;
    private LocalDate created;

    public Todoitem toTodoitem() {
        Todoitem todoitem = new Todoitem();
        todoitem.setStatus(status);
        todoitem.setCreated(created);
        todoitem.setContent(content);
        todoitem.setId(id);
        return todoitem;
    }
    public static TodoitemDto fromTodoitem(Todoitem todoitem) {
        TodoitemDto dto = new TodoitemDto();
        dto.setContent(todoitem.getContent());
        dto.setCreated(todoitem.getCreated());
        dto.setId(todoitem.getId());
        dto.setStatus(todoitem.getStatus());
        return dto;
    }
}
