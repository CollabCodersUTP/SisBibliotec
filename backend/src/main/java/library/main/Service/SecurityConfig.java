package library.main.Service;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
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

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
                .csrf(csrf -> csrf.disable()) // Deshabilitar CSRF
                .authorizeHttpRequests(auth -> auth
                        .requestMatchers(
                                "/api/usuarios/registro",
                                "/api/usuarios/login",
                                "/api/usuarios/**",
                                "/libro/**",
                                "/favicon.ico")
                        .permitAll()
                        .anyRequest().permitAll());

        http.cors(); // habilitar CORS

        return http.build();
    }

    // CORS Global Configuración Abierta (FLEXIBLE, no depende de una URL
    // específica)
    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                // ** IMPORTANTE: Se ha eliminado la URL fija y se usa el comodín (*) **

                registry.addMapping("/**")
                        // Permite peticiones desde CUALQUIER dominio para máxima compatibilidad
                        .allowedOrigins("*")
                        .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH")
                        .allowedHeaders("*");
            }
        };
    }
}