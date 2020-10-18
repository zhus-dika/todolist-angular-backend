package com.todolist.todolistangularbackend.config;

import com.todolist.todolistangularbackend.security.jwt.JwtConfigurer;
import com.todolist.todolistangularbackend.security.jwt.JwtTokenProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;


@Configuration
public class SecurityConfig extends WebSecurityConfigurerAdapter implements WebMvcConfigurer {
    private final JwtTokenProvider jwtTokenProvider;

    private static final String USER_ENDPOINT = "/api/**";
    private static final String LOGIN_ENDPOINT = "/auth/login";
    private static final String REGISTER_ENDPOINT = "/register/me";
    private static final String PASSWORD_ENDPOINT = "/forgot/password";
    private static final String PASSWORD_RESET_ENDPOINT = "/reset";



    @Autowired
    public SecurityConfig(JwtTokenProvider jwtTokenProvider) {
        this.jwtTokenProvider = jwtTokenProvider;
    }

    @Bean
    @Override
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                /*.requiresChannel()
                .anyRequest()
                .requiresSecure()*/
                .csrf().disable()
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .authorizeRequests()
                .antMatchers("/**").permitAll()
                .antMatchers(PASSWORD_RESET_ENDPOINT).permitAll()
                .antMatchers(LOGIN_ENDPOINT).permitAll()
                .antMatchers(REGISTER_ENDPOINT).permitAll()
                .antMatchers(PASSWORD_ENDPOINT).permitAll()
                .antMatchers(USER_ENDPOINT).hasRole("USER")
                .anyRequest().authenticated()
                .and()
                .apply(new JwtConfigurer(jwtTokenProvider))
                .and()
                .httpBasic();
                http.cors();
                //http.requiresChannel().anyRequest().requiresSecure();

    }
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                //.allowedOrigins("https://planet9.kz")
                .allowedOrigins("https://young-sierra-45019.herokuapp.com")
                .allowedMethods("*");
    }
}
