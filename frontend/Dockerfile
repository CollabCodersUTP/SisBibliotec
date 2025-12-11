# ----------------------------------------------------
# ETAPA 1: BUILDER (Construcción del Frontend con Bun)
# ----------------------------------------------------
FROM oven/bun:1 AS builder

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# 1. Copia solo los archivos de dependencia (package.json y bun.lock)
# ¡CORRECCIÓN AQUÍ! Cambiamos 'bun.lockb' por 'bun.lock'
COPY package.json bun.lock ./

# 2. Instala las dependencias
RUN bun install

# 3. Copia el resto del código fuente del proyecto
COPY . .

# 4. EJECUTA EL COMANDO DE CONSTRUCCIÓN
# Esto genera los archivos estáticos en la carpeta de salida (generalmente 'dist')
RUN bun run build

# ----------------------------------------------------
# ETAPA 2: PRODUCTION (Servir el Frontend con Nginx)
# ----------------------------------------------------
FROM nginx:stable-alpine AS production

# 1. Copia los archivos estáticos construidos desde la etapa 'builder'
# Asume que la carpeta de salida del build es '/app/dist' (ajústala si es diferente).
COPY --from=builder /app/dist /usr/share/nginx/html

# 2. Copia la configuración de Nginx para manejar rutas de SPA (Single Page Application)
# Vemos que tienes 'nginx.conf' en la raíz, ¡esto es correcto!
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# 3. Expone el puerto por defecto de Nginx
EXPOSE 80

# 4. Comando para iniciar Nginx y servir los archivos
CMD ["nginx", "-g", "daemon off;"]