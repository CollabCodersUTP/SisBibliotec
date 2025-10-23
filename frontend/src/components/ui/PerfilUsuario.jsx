import React, { useState } from 'react';
import './PerfilUsuario.css';

function PerfilUsuario() {
    const [isEditing, setIsEditing] = useState(false);
    const [userData, setUserData] = useState({
        nombre: "María González Pérez",
        email: "maria.gonzalez@email.com",
        librosLeidos: 47,
        prestamosActivos: 3,
        reseñasEscritas: 23,
        miembroDesde: "Enero 2020",
        fotoPerfil: "", // URL de imagen
        telefono: "+51 987 654 321",
        fechaNacimiento: "15/06/1995",
        direccion: "Av. Arequipa 1234, Miraflores",
        sobreMi: "Apasionada por la literatura latinoamericana...",
        wishlist: ["Cien años de soledad", "El amor en los tiempos del cólera"], // Lista de libros deseados
        leyendo: ["La casa de los espíritus"], // Libros actualmente leyendo
        historial: ["1984", "Orgullo y prejuicio", "El principito"], // Historial de préstamos
        reseñasRecientes: [
            { libro: "Cien años de soledad", reseña: "Una obra maestra..." },
            { libro: "El principito", reseña: "Un clásico atemporal..." }
        ],
        recomendaciones: ["Rayuela", "Ficciones"], // Recomendaciones basadas en lecturas
        notificaciones: { devoluciones: true, nuevosLibros: false, eventos: false }, // Configuración
        badges: ["Lector Ávido", "Crítico Literario"] // Logros
    });

    const handleEdit = () => {
        setIsEditing(!isEditing);
    };

    const handleSave = () => {
        // Lógica para guardar (e.g., API call)
        setIsEditing(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => setUserData({ ...userData, fotoPerfil: reader.result });
            reader.readAsDataURL(file);
        }
    };

    const toggleNotificacion = (key) => {
        setUserData({
            ...userData,
            notificaciones: { ...userData.notificaciones, [key]: !userData.notificaciones[key] }
        });
    };

    const addToWishlist = () => {
        const newBook = prompt("Ingresa el nombre del libro:");
        if (newBook) {
            setUserData({ ...userData, wishlist: [...userData.wishlist, newBook] });
        }
    };

    // Función para calcular porcentaje (ejemplo: libros leídos sobre 100)
    const getProgress = (value, max = 100) => (value / max) * 100;

    return (
        <div className="perfil-container">
            <div className="perfil-header">
                <div className="perfil-img">
                    <img src={userData.fotoPerfil || "/default-image.png"} alt="Foto de perfil" />
                    {isEditing && (
                        <input type="file" accept="image/*" onChange={handleFileChange} className="file-input" />
                    )}
                </div>
                <div className="perfil-info">
                    {isEditing ? (
                        <input
                            type="text"
                            name="nombre"
                            value={userData.nombre}
                            onChange={handleChange}
                            className="edit-input"
                        />
                    ) : (
                        <h1>{userData.nombre}</h1>
                    )}
                    {isEditing ? (
                        <input
                            type="email"
                            name="email"
                            value={userData.email}
                            onChange={handleChange}
                            className="edit-input"
                        />
                    ) : (
                        <p>{userData.email}</p>
                    )}
                    <button className="editar-btn" onClick={handleEdit}>
                        {isEditing ? "Cancelar" : "Editar Perfil"}
                    </button>
                    {isEditing && (
                        <button className="guardar-btn" onClick={handleSave}>
                            Guardar Cambios
                        </button>
                    )}
                </div>
            </div>

            <div className="perfil-stats">
                <div className="stat-item">
                    <div className="stat-icon">📖</div>
                    <p>Libros Leídos</p>
                    <h2>{userData.librosLeidos}</h2>
                    <div className="progress-bar">
                        <div className="progress-fill" style={{ width: `${getProgress(userData.librosLeidos)}%` }}></div>
                    </div>
                </div>
                <div className="stat-item">
                    <div className="stat-icon">📚</div>
                    <p>Préstamos Activos</p>
                    <h2>{userData.prestamosActivos}</h2>
                    <div className="progress-bar">
                        <div className="progress-fill" style={{ width: `${getProgress(userData.prestamosActivos, 10)}%` }}></div>
                    </div>
                </div>
                <div className="stat-item">
                    <div className="stat-icon">✍️</div>
                    <p>Reseñas Escritas</p>
                    <h2>{userData.reseñasEscritas}</h2>
                    <div className="progress-bar">
                        <div className="progress-fill" style={{ width: `${getProgress(userData.reseñasEscritas, 50)}%` }}></div>
                    </div>
                </div>
                <div className="stat-item">
                    <div className="stat-icon">📅</div>
                    <p>Miembro Desde</p>
                    <h2>{userData.miembroDesde}</h2>
                </div>
            </div>

            {/* Nuevas secciones con iconos */}
            <div className="perfil-section">
                <h3><span className="section-icon">📖</span> Libros Actualmente Leyendo</h3>
                <ul>
                    {userData.leyendo.map((libro, index) => <li key={index}>{libro}</li>)}
                </ul>
            </div>

            <div className="perfil-section">
                <h3><span className="section-icon">❤️</span> Wishlist</h3>
                <ul>
                    {userData.wishlist.map((libro, index) => <li key={index}>{libro}</li>)}
                </ul>
                <button className="add-btn" onClick={addToWishlist}>Agregar Libro</button>
            </div>

            <div className="perfil-section">
                <h3><span className="section-icon">📜</span> Historial de Préstamos</h3>
                <ul>
                    {userData.historial.map((libro, index) => <li key={index}>{libro}</li>)}
                </ul>
            </div>

            <div className="perfil-section">
                <h3><span className="section-icon">⭐</span> Reseñas Recientes</h3>
                {userData.reseñasRecientes.map((reseña, index) => (
                    <div key={index} className="reseña-item">
                        <strong>{reseña.libro}:</strong> {reseña.reseña}
                    </div>
                ))}
            </div>

            <div className="perfil-section">
                <h3><span className="section-icon">💡</span> Recomendaciones</h3>
                <ul>
                    {userData.recomendaciones.map((libro, index) => <li key={index}>{libro}</li>)}
                </ul>
            </div>

            <div className="perfil-section">
                <h3><span className="section-icon">🏆</span> Badges/Logros</h3>
                <div className="badges">
                    {userData.badges.map((badge, index) => <span key={index} className="badge">{badge}</span>)}
                </div>
            </div>

            <div className="perfil-section">
                <h3><span className="section-icon">🔔</span> Configuración de Notificaciones</h3>
                <div className="notificaciones-container">
                    <div className="notificacion-card">
                        <div className="card-icon">📅</div>
                        <div className="card-content">
                            <h4>Recordatorios de devoluciones</h4>
                            <p>Recibe alertas cuando tus préstamos estén por vencer.</p>
                        </div>
                        <label className="switch">
                            <input
                                type="checkbox"
                                checked={userData.notificaciones.devoluciones}
                                onChange={() => toggleNotificacion('devoluciones')}
                            />
                            <span className="slider"></span>
                        </label>
                    </div>
                    <div className="notificacion-card">
                        <div className="card-icon">📚</div>
                        <div className="card-content">
                            <h4>Nuevos libros disponibles</h4>
                            <p>Te notificamos sobre libros nuevos en tu género favorito.</p>
                        </div>
                        <label className="switch">
                            <input
                                type="checkbox"
                                checked={userData.notificaciones.nuevosLibros}
                                onChange={() => toggleNotificacion('nuevosLibros')}
                            />
                            <span className="slider"></span>
                        </label>
                    </div>
                    <div className="notificacion-card">
                        <div className="card-icon">🎉</div>
                        <div className="card-content">
                            <h4>Eventos de la biblioteca</h4>
                            <p>Invitaciones a talleres, lecturas y eventos virtuales.</p>
                        </div>
                        <label className="switch">
                            <input
                                type="checkbox"
                                checked={userData.notificaciones.eventos || false}
                                onChange={() => toggleNotificacion('eventos')}
                            />
                            <span className="slider"></span>
                        </label>
                    </div>
                </div>
            </div>

            <div className="perfil-footer">
                <div className="perfil-personal-info">
                    <h3><span className="section-icon">👤</span> Información Personal</h3>
                    <p><strong>Nombre Completo:</strong> {isEditing ? (
                        <input type="text" name="nombre" value={userData.nombre} onChange={handleChange} className="edit-input" />
                    ) : userData.nombre}</p>
                    <p><strong>Email:</strong> {isEditing ? (
                        <input type="email" name="email" value={userData.email} onChange={handleChange} className="edit-input" />
                    ) : userData.email}</p>
                    <p><strong>Teléfono:</strong> {isEditing ? (
                        <input type="tel" name="telefono" value={userData.telefono} onChange={handleChange} className="edit-input" />
                    ) : userData.telefono}</p>
                    <p><strong>Fecha de Nacimiento:</strong> {isEditing ? (
                        <input type="date" name="fechaNacimiento" value={userData.fechaNacimiento} onChange={handleChange} className="edit-input" />
                    ) : userData.fechaNacimiento}</p>
                    <p><strong>Dirección:</strong> {isEditing ? (
                        <input type="text" name="direccion" value={userData.direccion} onChange={handleChange} className="edit-input" />
                    ) : userData.direccion}</p>
                    <p><strong>Sobre mí:</strong> {isEditing ? (
                        <textarea name="sobreMi" value={userData.sobreMi} onChange={handleChange} className="edit-textarea" />
                    ) : userData.sobreMi}</p>
                </div>
            </div>
        </div>
    );
}

export default PerfilUsuario;