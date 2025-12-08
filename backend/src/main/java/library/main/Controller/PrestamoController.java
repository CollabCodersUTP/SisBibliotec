package library.main.Controller;
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
}
