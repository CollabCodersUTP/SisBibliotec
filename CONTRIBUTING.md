# 🧩 Guía de Contribución

¡Gracias por querer contribuir a este proyecto!  
Sigue estas reglas para mantener un flujo de trabajo limpio y organizado.

---

##  Convención de nombres de ramas

Usa el siguiente formato para crear ramas:


tipo/nombre-breve-descriptivo

**Tipos posibles:**
- `feature/` → nueva funcionalidad  
- `fix/` → corrección de errores  
- `hotfix/` → corrección urgente en producción  
- `chore/` → tareas menores o mantenimiento  
- `docs/` → cambios en documentación  

**Ejemplo:**
feature/login-usuario
fix/bug-formulario


---

## 💬 Formato de mensajes de commit

Usa mensajes claros siguiendo esta estructura:

<tipo>: <breve descripción>


---

## 🔁 Procedimiento para Pull Requests (PR)

1. Asegúrate de que tu rama esté actualizada con `main` o `develop`.  
2. Realiza tus cambios y sube los commits.  
3. Crea un **Pull Request (PR)** hacia la rama principal.  
4. Asigna al menos **un revisor** (revisión cruzada).  
5. Espera la aprobación antes de hacer el merge.  

🚫 **No se aceptan merges directos a `main`.**

---

## 🌳 Reglas de colaboración

### Branch rules:
- `main` → rama estable (solo código probado y liberado).  
- `develop` → rama de desarrollo principal.  
- `feature/*` → ramas temporales para nuevas funcionalidades.  
- `fix/*` → ramas temporales para corrección de errores.  

### Tag rules:
- Usa etiquetas para versiones con el formato `vX.Y.Z`  
  Ejemplo: `v1.0.0`, `v1.2.3`

---

## 🌐 Uso de forks, upstream y flujo de sincronización

1. Haz un **fork** del repositorio principal.  
2. Clona tu fork en local.  
3. Añade el repositorio original como **upstream**:
   ```bash
   git remote add upstream <LINKDELREPO>


## 🧭 Gestión de issues, milestones y tableros de proyecto

- Crea un **issue** para cada bug, mejora o nueva funcionalidad antes de empezar a trabajar.  

- Usa **etiquetas (labels)** para clasificar:  
  - `bug` → errores  
  - `enhancement` → nuevas funcionalidades  
  - `documentation` → cambios en documentación  

- Asocia los issues a **milestones** .  

- Usa el tablero de **Projects** de GitHub para organizar el flujo:  
  - **To Do** → tareas pendientes  
  - **In Progress** → tareas en desarrollo  
  - **Done** → tareas completadas  