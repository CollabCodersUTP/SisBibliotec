package library.main.Service;

import library.main.Entity.Usuarios;
import library.main.Repository.UsuariosRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor

public class UsuarioService {

    private final UsuariosRepository ur;



    //-------------------------------------------------------------------------------
    // Crear nuevo usuario
    public Usuarios registroUsuario(Usuarios usuario) {
        Optional<Usuarios> existente = ur.findByEmail(usuario.getEmail());
        if (existente.isPresent()) {
            throw new RuntimeException("El correo ya está registrado");
        }
        return ur.save(usuario);
    }

    //-------------------------------------------------------------------------------
    // Login de usuario
    public Usuarios login(String email, String contraseña) {
        Optional<Usuarios> usuarioOpt = ur.findByEmail(email);

        if (usuarioOpt.isPresent()) {
            Usuarios usuario = usuarioOpt.get();

            // Verificar contraseña
            if (usuario.getPassword().equals(contraseña)) {
                return usuario;
            } else {
                throw new RuntimeException("Contraseña incorrecta");
            }
        } else {
            throw new RuntimeException("Correo no registrado");
        }
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
