package library.main.Repository;

import library.main.Entity.Prestamo;
import library.main.Entity.Usuarios;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PrestamoRepository extends JpaRepository<Prestamo , Long> {
    List<Prestamo> findByUsuario(Usuarios usuario);
    List<Prestamo> findByLibro_IdLibro(Long idLibro);

    List<Prestamo> findByEstado(Prestamo.Estado estado);
}

