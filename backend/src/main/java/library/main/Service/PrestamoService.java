package library.main.Service;

import library.main.Entity.Libro;
import library.main.Entity.Prestamo;
import library.main.Entity.Usuarios;
import library.main.Repository.LibroRepository;
import library.main.Repository.PrestamoRepository;
import library.main.Repository.UsuariosRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
@RequiredArgsConstructor
public class PrestamoService {

    private final PrestamoRepository prestamoRepository;
    private final LibroRepository libroRepository;
    private final UsuariosRepository usuarioRepository;


    /// ////////////////////////////////////////////////
    ///
    // Crear un prestamo nuevo
    public Prestamo crearPrestamo(Long idUsuario, Long idLibro) {
        Usuarios usuario = usuarioRepository.findById(idUsuario).orElseThrow(() -> new RuntimeException("Usuario no encontrado"));
        Libro libro = libroRepository.findById(idLibro)
                .orElseThrow(() -> new RuntimeException("Libro no encontrado"));

        Prestamo prestamo = Prestamo.builder()
                .usuario(usuario)
                .libro(libro)
                .fechaPrestamo(LocalDate.now())
                .fechaDevolucion(LocalDate.now().plusDays(14))
                .estado(Prestamo.Estado.PRESTADO)
                .build();

        return prestamoRepository.save(prestamo);
    }


    /// /////////////////////////////////

    // Listar todos los prestamos
    public List<Prestamo> listarPrestamos() {
        return prestamoRepository.findAll();
    }

    // Listar prestamos de un usuario específico
    public List<Prestamo> listarPorUsuario(Long idUsuario) {
        Usuarios usuario = usuarioRepository.findById(idUsuario)
                .orElseThrow(() -> new RuntimeException("Usuario no encontrado"));
        return prestamoRepository.findByUsuario(usuario);
    }



    /// ////////////////////////////////////////
    // Devolver un prestamos
    public Prestamo devolverPrestamo(Long idPrestamo) {
        Prestamo prestamo = prestamoRepository.findById(idPrestamo)
                .orElseThrow(() -> new RuntimeException("Préstamo no encontrado"));

        if (prestamo.getEstado() == Prestamo.Estado.DEVUELTO) {
            throw new RuntimeException("El préstamo ya fue devuelto");
        }

        prestamo.setEstado(Prestamo.Estado.DEVUELTO);
        prestamo.setFechaDevolucion(LocalDate.now());
        return prestamoRepository.save(prestamo);
    }


    /// ////////////////////////////////////////////////////////////////////

    // Verificar y actualizar prestamos atrasados
    public void actualizarAtrasados() {
        List<Prestamo> prestamos = prestamoRepository.findAll();
        LocalDate hoy = LocalDate.now();

        for (Prestamo p : prestamos) {
            if (p.getEstado() == Prestamo.Estado.PRESTADO &&
                    p.getFechaDevolucion().isBefore(hoy)) {
                p.setEstado(Prestamo.Estado.ATRASADO);
                prestamoRepository.save(p);
            }
        }
    }


    ////////////////////////////////////////////////////////////////////

    // Eliminar prestamos
    public void eliminarPrestamo(Long idPrestamo) {
        prestamoRepository.deleteById(idPrestamo);
    }
}
