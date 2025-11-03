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

    //-------------------------------------------------------------------------------
    // Ahtgregado Seguridad
    public Usuarios registroUsuario(Usuarios usuario) {
        Optional<Usuarios> existente = ur.findByEmail(usuario.getEmail());
        if (existente.isPresent()) {
            throw new RuntimeException("El correo ya está registrado");
        }

      
        String passwordEncriptada = passwordEncoder.encode(usuario.getPassword());
        usuario.setPassword(passwordEncriptada);

        return ur.save(usuario);
    }

    // Login validando contraseña encriptada
    public Usuarios login(String email, String contraseña) {
        Usuarios usuario = ur.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("Correo no registrado"));

        // comparar la contraseña escrita con la encriptada en la BD
        if (!passwordEncoder.matches(contraseña, usuario.getPassword())) {
            throw new RuntimeException("Contraseña incorrecta");
        }

        return usuario;
    }

    //-------------------------------------------------------------------------------
    // Listar todos los usuarios
    public List<Usuarios> listarUsuarios() {
        return ur.findAll();
    }

    //-------------------------------------------------------------------------------
    // Buscar usuario por ID
    public Optional<Usuarios> buscarPorId(Long id) {
        return ur.findById(id);
    }

    //-------------------------------------------------------------------------------
    // Actualizar usuario
    public Usuarios actualizarUsuario(Long id, Usuarios usuarioActualizado) {
        return ur.findById(id).map(usuario -> {
            usuario.setNombre(usuarioActualizado.getNombre());
            usuario.setApellido(usuarioActualizado.getApellido());
            usuario.setEmail(usuarioActualizado.getEmail());
            usuario.setTelefono(usuarioActualizado.getTelefono());
            usuario.setDireccion(usuarioActualizado.getDireccion());
            usuario.setRol(usuarioActualizado.getRol());
            return ur.save(usuario);
        }).orElseThrow(() -> new RuntimeException("Usuario no encontrado"));
    }

    //-------------------------------------------------------------------------------
    // Eliminar usuario
    public void eliminarUsuario(Long id) {
        ur.deleteById(id);
    }
}