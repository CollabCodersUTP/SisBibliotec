package library.main.Service;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    // Esta parte permite /registro y /login sin estar autenticado
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
                .csrf(csrf -> csrf.disable()) // para usar Postman más fácil
                .authorizeHttpRequests(auth -> auth
                        .requestMatchers("/registro", "/login").permitAll() // <-- habilita estas rutas
                        .anyRequest().authenticated()
                );

        return http.build();
    }
}