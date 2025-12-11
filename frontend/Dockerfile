# ----------------------------------------------------
# ETAPA 1: BUILDER (Construcción del Frontend con Bun)
# ----------------------------------------------------
FROM oven/bun:1 AS builder

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# 1. Copia solo los archivos de dependencia (para optimizar la caché de Docker)
COPY package.json bun.lockb ./

# 2. Instala las dependencias
RUN bun install

# 3. Copia el resto del código fuente del proyecto
COPY . .

# 4. EJECUTA EL COMANDO DE CONSTRUCCIÓN
# Esto generará los archivos estáticos en la carpeta de salida (generalmente 'dist')
RUN bun run build

# ----------------------------------------------------
# ETAPA 2: PRODUCTION (Servir el Frontend con Nginx)
# ----------------------------------------------------
FROM nginx:stable-alpine AS production

# 1. Copia los archivos estáticos construidos desde la etapa 'builder'
# Asume que la carpeta de salida del build es '/app/dist'
# Si tu herramienta de construcción usa otra carpeta (ej: 'build'), ajústalo aquí.
COPY --from=builder /app/dist /usr/share/nginx/html

# Opcional: Si necesitas configuración personalizada de Nginx, cópiala aquí:
# COPY ./nginx/nginx.conf /etc/nginx/nginx.conf

# 2. Expone el puerto por defecto de Nginx
EXPOSE 80

# 3. Comando para iniciar Nginx y servir los archivos
CMD ["nginx", "-g", "daemon off;"]