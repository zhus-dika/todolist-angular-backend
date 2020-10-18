package com.todolist.todolistangularbackend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class TodolistAngularBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(TodolistAngularBackendApplication.class, args);
	}
    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                //registry.addMapping("/").allowedHeaders("*").allowedOrigins("https://planet9.kz");
                registry.addMapping("/").allowedHeaders("*").allowedOrigins("https://young-sierra-45019.herokuapp.com");

            }
        };
    }
}
