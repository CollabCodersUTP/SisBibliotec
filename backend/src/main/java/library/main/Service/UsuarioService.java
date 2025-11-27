package library.main.Service;

import library.main.Entity.Usuarios;
import library.main.Repository.UsuariosRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UsuarioService {

    private final UsuariosRepository ur;
    private final PasswordEncoder passwordEncoder;

    // ----------------------- REGISTRO -----------------------
    public Usuarios registroUsuario(Usuarios usuario) {

        if (usuario.getEmail() == null || usuario.getPassword() == null) {
            throw new RuntimeException("Email y contraseña son obligatorios");
        }

        String email = usuario.getEmail().toLowerCase().trim();

        Optional<Usuarios> existente = ur.findByEmail(email);

        if (existente.isPresent()) {
            throw new RuntimeException("El correo ya está registrado");
        }

        usuario.setEmail(email);
        usuario.setPassword(passwordEncoder.encode(usuario.getPassword()));

        return ur.save(usuario);
    }

    // ----------------------- LOGIN -----------------------
    public Usuarios login(String email, String contraseña) {

        Usuarios usuario = ur.findByEmail(email.toLowerCase().trim())
                .orElseThrow(() -> new RuntimeException("Correo no registrado"));

        if (!passwordEncoder.matches(contraseña, usuario.getPassword())) {
            throw new RuntimeException("Contraseña incorrecta");
        }

        return usuario;
    }

    // ----------------------- LISTAR -----------------------
    public List<Usuarios> listarUsuarios() {
        return ur.findAll();
    }

    // ----------------------- BUSCAR POR ID -----------------------
    public Optional<Usuarios> buscarPorId(Long id) {
        return ur.findById(id);
    }

    // ----------------------- ACTUALIZAR -----------------------
    public Usuarios actualizarUsuario(Long id, Usuarios usuarioActualizado) {

        return ur.findById(id).map(usuario -> {

            if (usuarioActualizado.getNombre() != null)
                usuario.setNombre(usuarioActualizado.getNombre());

            if (usuarioActualizado.getApellido() != null)
                usuario.setApellido(usuarioActualizado.getApellido());

            if (usuarioActualizado.getTelefono() != null)
                usuario.setTelefono(usuarioActualizado.getTelefono());

            if (usuarioActualizado.getDireccion() != null)
                usuario.setDireccion(usuarioActualizado.getDireccion());

            if (usuarioActualizado.getRol() != null)
                usuario.setRol(usuarioActualizado.getRol());

            // Validar si quiere actualizar email
            if (usuarioActualizado.getEmail() != null &&
                    !usuarioActualizado.getEmail().equalsIgnoreCase(usuario.getEmail())) {

                String newEmail = usuarioActualizado.getEmail().toLowerCase().trim();

                if (ur.findByEmail(newEmail).isPresent()) {
                    throw new RuntimeException("El nuevo correo ya está registrado");
                }

                usuario.setEmail(newEmail);
            }

            // Evitar cambiar password accidentalmente
            if (usuarioActualizado.getPassword() != null &&
                    !usuarioActualizado.getPassword().isBlank()) {

                usuario.setPassword(passwordEncoder.encode(usuarioActualizado.getPassword()));
            }

            return ur.save(usuario);

        }).orElseThrow(() -> new RuntimeException("Usuario no encontrado"));
    }

    // ----------------------- ELIMINAR -----------------------
    public void eliminarUsuario(Long id) {
        if (!ur.existsById(id)) {
            throw new RuntimeException("El usuario no existe");
        }
        ur.deleteById(id);
    }
}
