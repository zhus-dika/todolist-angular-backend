package com.todolist.todolistangularbackend.security.jwt;

import com.todolist.todolistangularbackend.Exception.ApiError;
import io.jsonwebtoken.JwtException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Slf4j
public class ExceptionHandlerFilter extends OncePerRequestFilter {
    @Override
    public void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        try {
            filterChain.doFilter(request, response);
        } catch (JwtException e) {
            setErrorResponse(HttpStatus.BAD_REQUEST, response, e);
            e.printStackTrace();
        } catch (RuntimeException e) {
            e.printStackTrace();
            log.info("from exception{}");
            setErrorResponse(HttpStatus.INTERNAL_SERVER_ERROR, response, e);
        }
    }

    public void setErrorResponse(HttpStatus status, HttpServletResponse response, Throwable ex){
        response.setStatus(status.value());
        response.setContentType("application/json");
        // A class used for errors
        ApiError apiError = new ApiError(status, ex);
        try {
            String json = apiError.convertToJson();
            response.getWriter().write(json);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

}
