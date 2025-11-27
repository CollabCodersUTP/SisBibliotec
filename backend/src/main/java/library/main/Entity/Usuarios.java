package library.main.Entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "usuarios")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Usuarios {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idUsuario;

    private String nombre;
    private String apellido;

    @Column(unique = true, nullable = false)
    private String email;

    private String password;
    private String telefono;
    private String direccion;

    @Enumerated(EnumType.STRING)
    private Rol rol = Rol.LECTOR;

    private LocalDateTime fechaRegistro = LocalDateTime.now();

    public enum Rol {
        ADMIN, LECTOR
    }
}