package library.main.Controller;

import library.main.Entity.Usuarios;
import library.main.Service.UsuarioService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/usuarios")
@CrossOrigin(origins = "*") // puedes poner tu dominio de frontend
public class UsuarioController {

    private final UsuarioService usuarioService;

    // ------------------- REGISTRO ------------------------
    @PostMapping("/registro")
    public ResponseEntity<?> registrar(@RequestBody Usuarios usuario) {
        try {
            Usuarios nuevo = usuarioService.registroUsuario(usuario);

            // No devolver password
            nuevo.setPassword(null);

            return ResponseEntity.ok(nuevo);

        } catch (Exception e) {
            return ResponseEntity.badRequest().body(
                    new ErrorResponse("Error en el registro", e.getMessage()));
        }
    }

    // ------------------- LOGIN (JSON) ------------------------
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest request) {
        try {
            Usuarios usuario = usuarioService.login(request.getEmail(), request.getPassword());

            usuario.setPassword(null);

            return ResponseEntity.ok(usuario);

        } catch (Exception e) {
            return ResponseEntity.badRequest().body(
                    new ErrorResponse("Login fallido", e.getMessage()));
        }
    }

    // ----------- DTOs útiles ---------------------

    record LoginRequest(String email, String password) {
        public String getEmail() {
            return email;
        }

        public String getPassword() {
            return password;
        }
    }

    record ErrorResponse(String error, String mensaje) {
    }
}
