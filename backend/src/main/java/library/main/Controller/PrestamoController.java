package library.main.Controller;
import library.main.Entity.Prestamo;
import library.main.Service.PrestamoService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/prestamos")
@RequiredArgsConstructor

public class PrestamoController {
    private final PrestamoService prestamoService;

    // Crear préstamo

    @PostMapping("/crear")
    public ResponseEntity<Prestamo> crearPrestamo(
            @RequestParam Long idUsuario,
            @RequestParam Long idLibro
    )
    {
        Prestamo prestamo = prestamoService.crearPrestamo(idUsuario, idLibro);
        return ResponseEntity.ok(prestamo);
    }

    // Listar todos los préstamos
    @GetMapping
    public ResponseEntity<List<Prestamo>> listarPrestamos() {
        return ResponseEntity.ok(prestamoService.listarPrestamos());
    }


    // Listar préstamos por cada usuariosdx
    @GetMapping("/usuario/{idUsuario}")
    public ResponseEntity<List<Prestamo>> listarPorUsuario(@PathVariable Long idUsuario) {
        return ResponseEntity.ok(prestamoService.listarPorUsuario(idUsuario));
    }

    // Actualizar préstamos atrasados
    @PutMapping("/actualizar-atrasados")
    public ResponseEntity<String> actualizarAtrasados() {
        prestamoService.actualizarAtrasados();
        return ResponseEntity.ok("Estados de préstamos actualizados correctamente.");
    }

}
