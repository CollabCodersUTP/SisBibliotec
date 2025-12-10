package library.main.Controller;

import library.main.Entity.Usuarios;
import library.main.Service.UsuarioService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/usuarios")
@CrossOrigin(origins = "*")
@RequiredArgsConstructor
public class UsuarioController {

    private final UsuarioService usuarioService;

    // ------------ REGISTRO ----------------------
    @PostMapping("/registro")
    public ResponseEntity<?> registrar(@RequestBody Usuarios usuario) {
        try {
            System.out.println("Recibiendo registro: " + usuario.getNombre() + " - " + usuario.getEmail());
            Usuarios nuevo = usuarioService.registroUsuario(usuario);

            nuevo.setPassword(null);

            return ResponseEntity.ok(nuevo);
        } catch (Exception e) {
            System.err.println("Error en registro: " + e.getMessage());
            e.printStackTrace();
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    // ---------- LOGIN ------------------------
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest) {
        try {
            Usuarios usuario = usuarioService.login(loginRequest.getEmail(), loginRequest.getPassword());

            usuario.setPassword(null);

            return ResponseEntity.ok(usuario);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    // DTO para Login
    public static class LoginRequest {
        private String email;
        private String password;

        public String getEmail() {
            return email;
        }

        public void setEmail(String email) {
            this.email = email;
        }

        public String getPassword() {
            return password;
        }

        public void setPassword(String password) {
            this.password = password;
        }
    }
}
