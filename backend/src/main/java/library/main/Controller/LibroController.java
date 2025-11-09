package library.main.Controller;

import library.main.Entity.Libro;
import library.main.Service.LibroService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
//PREFGIJO PARA BUSCAR LO QUE ES LA PARTE DE LIBROS
@RequestMapping("/libro")

@RestController
@RequiredArgsConstructor
@CrossOrigin("*")
public class LibroController {

    private final LibroService libroService;

    // - CREAR -
    @PostMapping("/registrar")
    public ResponseEntity<Libro> registrarLibro(@RequestBody Libro libro) {
        Libro nuevo = libroService.RegistrarLibro(libro);
        return ResponseEntity.ok(nuevo);
    }

    // - LISTAR -
    @GetMapping("/listar")
    public ResponseEntity<List<Libro>> listarLibros() {
        return ResponseEntity.ok(libroService.listarlibros());
    }

    // -BUSCAR POR ID -
    @GetMapping("/{id}")
    public ResponseEntity<?> buscarPorId(@PathVariable Long id) {
        return libroService.buscaridlibro(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // - ACTUALIZAR -
    @PutMapping("/actualizar/{id}")
    public ResponseEntity<?> actualizarLibro(@PathVariable Long id, @RequestBody Libro libro) {
        try {
            Libro actualizado = libroService.actualizarlibros(id, libro);
            return ResponseEntity.ok(actualizado);
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    // -ELIMINAR -
    @DeleteMapping("/eliminar/{id}")
    public ResponseEntity<String> eliminarLibro(@PathVariable Long id) {
        try {
            libroService.eliminarlibro(id);
            return ResponseEntity.ok("Libro eliminado!");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Error al eliminar: " + e.getMessage());
        }
    }
}
