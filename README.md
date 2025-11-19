# SisBibliotec 📚

Sistema de Biblioteca Digital desarrollado como proyecto académico para la gestión integral de bibliotecas, permitiendo a usuarios buscar, reservar y gestionar libros de manera eficiente.

![License](https://img.shields.io/badge/License-MIT-blue.svg)
![Java](https://img.shields.io/badge/Java-17-orange.svg)
![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.5.5-green.svg)
![React](https://img.shields.io/badge/React-19.1.1-blue.svg)

## 📋 Tabla de Contenidos

- [Descripción](#descripción)
- [Tecnologías](#tecnologías)
- [Requisitos](#requisitos)
- [Instalación](#instalación)
- [Uso](#uso)
- [Características](#características)
- [Roles de Usuario](#roles-de-usuario)
- [Flujo de Trabajo](#flujo-de-trabajo)
- [Equipo](#equipo)
- [Contribuir](#contribuir)
- [Licencia](#licencia)

## 📖 Descripción

SisBibliotec es una aplicación web full-stack que moderniza la gestión bibliotecaria tradicional. Permite a los usuarios explorar catálogos digitales, gestionar préstamos y a los administradores mantener el inventario de manera eficiente.

### Objetivos del Proyecto
- Digitalizar procesos bibliotecarios tradicionales
- Mejorar la experiencia del usuario en la búsqueda de libros
- Facilitar la gestión administrativa de inventarios
- Implementar buenas prácticas de desarrollo colaborativo

## 🛠️ Tecnologías

### Backend (API REST)
- **Java 21** - Lenguaje de programación principal
- **Spring Boot 3.5.5** - Framework de desarrollo
- **Spring Data JPA** - Persistencia de datos
- **Spring Security** - Autenticación y autorización
- **MySQL** - Base de datos relacional
- **Maven** - Gestión de dependencias

### Frontend
- **React 19.1.1** - Biblioteca de interfaz de usuario
- **Material-UI (MUI)** - Componentes de interfaz
- **Tailwind CSS** - Framework de estilos
- **React Router** - Navegación
- **Vite** - Herramienta de construcción
- **Axios** - Cliente HTTP

### Herramientas de Desarrollo
- **Git & GitHub** - Control de versiones
- **Visual Studio Code / IntelliJ IDEA** - IDEs
- **Postman** - Pruebas de API
- **ESLint** - Análisis de código

## 📋 Requisitos

### Requisitos del Sistema
- Java 17 o superior
- Node.js 18+ y npm
- MySQL 8.0+
- Git

### Requisitos Funcionales

| ID | Requisito | Descripción |
|---|---|---|
| RF01 | Registro de usuarios | Permitir registro con email y contraseña |
| RF02 | Autenticación | Sistema de login seguro |
| RF03 | Búsqueda de libros | Búsqueda por título, autor o categoría |
| RF04 | Catálogo de libros | Visualización detallada de información |
| RF05 | Gestión personal | Lista personal de libros favoritos |
| RF06 | Panel administrativo | CRUD completo de libros y usuarios |

### Requisitos No Funcionales

| ID | Requisito | Descripción |
|---|---|---|
| RNF01 | Seguridad | Cifrado de contraseñas y protección de datos |
| RNF02 | Rendimiento | Respuesta < 2 segundos |
| RNF03 | Escalabilidad | Soporte para crecimiento de usuarios |
| RNF04 | Usabilidad | Interfaz intuitiva y accesible |
| RNF05 | Mantenibilidad | Código limpio y documentado |
| RNF06 | Disponibilidad | 95% de tiempo activo |

## 🚀 Instalación

### 1. Clonar el Repositorio
```bash
git clone https://github.com/soporCiber11M/ProyectLibrary.git
cd ProyectLibrary
```

### 2. Configurar Backend
```bash
cd backend
# Configurar base de datos en application.properties
./mvnw clean install
./mvnw spring-boot:run
```

### 3. Configurar Frontend
```bash
cd frontend
npm install
npm run dev
```

### 4. Configurar Base de Datos
```sql
CREATE DATABASE sisbibliotec;
-- Las tablas se crean automáticamente con JPA
```

## 💻 Uso

1. **Acceder a la aplicación**: `http://localhost:5173`
2. **API Backend**: `http://localhost:8080`
3. **Registrarse** como nuevo usuario
4. **Explorar** el catálogo de libros
5. **Buscar** por título, autor o categoría
6. **Gestionar** tu biblioteca personal

## ⚙️ Características

| Funcionalidad | Estado |
|---|---|
| ✅ Registro/Login de usuarios | Completado |
| ✅ Catálogo de libros | Completado |
| ✅ Creación de entidades | Completado |
| ✅ Pruebas con Postman | Completado |
| 🔄 Búsqueda avanzada | En desarrollo |
| ⏳ Panel de administración | Pendiente |
| ⏳ Sistema de préstamos | Pendiente |

## 👥 Roles de Usuario

### 🔑 Administrador
- Gestión completa del catálogo (CRUD)
- Administración de usuarios
- Reportes y estadísticas
- Configuración del sistema

### 👤 Usuario
- Búsqueda en el catálogo
- Visualización de detalles
- Gestión de biblioteca personal
- Historial de actividades

## 🌿 Flujo de Trabajo Git

| Rama | Propósito |
|---|---|
| `main` | Código estable para producción |
| `release` | Integración y preparación de releases |
| `feature/*` | Desarrollo de nuevas funcionalidades |
| `fix/*` | Corrección de errores |

### Proceso de Desarrollo
1. Crear rama desde `release`
2. Desarrollar funcionalidad
3. Crear Pull Request
4. Revisión de código
5. Merge a `release`
6. Deploy a `main`

## 👨‍💻 Equipo

### 👑 Líder del Proyecto: Darwin Joel
- Configuración inicial del repositorio
- Gestión de ramas y políticas de protección
- Supervisión de Pull Requests
- Resolución de conflictos

### 👨‍💻 Desarrolladores

**Christofer**
- Diseño y creación de entidades
- Configuración de base de datos
- Modelado de datos

**Anthony**
- Desarrollo de componentes frontend
- Integración de APIs
- Diseño de interfaz

**Mariano**
- Implementación de funcionalidades backend
- Pruebas y validaciones
- Documentación técnica

## 🤝 Contribuir

1. Fork el proyecto
2. Crear rama feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit cambios (`git commit -m 'Agregar nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Crear Pull Request

Ver [CONTRIBUTING.md](CONTRIBUTING.md) para más detalles.

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver [LICENSE](LICENSE) para más detalles.

## 📞 Contacto

- **Repositorio**: [GitHub](https://github.com/soporCiber11M/ProyectLibrary)
- **Documentación**: Ver carpeta `/docs`
- **Issues**: [GitHub Issues](https://github.com/soporCiber11M/ProyectLibrary/issues)

---

⭐ **¡No olvides dar una estrella al proyecto si te ha sido útil!**
