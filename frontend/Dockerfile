# ----------------------------------------------------
# ETAPA 1: BUILDER (Construcción del Frontend con Bun)
# ----------------------------------------------------
FROM oven/bun:1 AS builder

# ****************************************************
# ** CORRECCIÓN CRUCIAL: INYECCIÓN DE VITE_API_URL **
# ****************************************************
# 1. ACEPTAR el argumento de construcción desde GitHub Actions
ARG VITE_API_URL

# 2. DEFINIR la variable de entorno para que Vite (Bun run build) pueda leerla
# Esto fuerza a que el valor de Railway se "queme" en el JavaScript.
ENV VITE_API_URL=$VITE_API_URL

WORKDIR /app

# 3. Copia y instala dependencias para aprovechar el cache de Docker
COPY package.json bun.lock ./

# Nota: Asumo que 'bun.lock' es el archivo correcto para Bun 1
RUN bun install

# 4. Copia el resto del código fuente del proyecto
COPY . .

# 5. EJECUTA EL COMANDO DE CONSTRUCCIÓN
# Esto genera los archivos estáticos en la carpeta de salida 'dist'
RUN bun run build

# ----------------------------------------------------
# ETAPA 2: PRODUCTION (Servir el Frontend con Nginx)
# ----------------------------------------------------
FROM nginx:stable-alpine AS production

# 1. Copia los archivos estáticos construidos desde la etapa 'builder'
# (Asumimos que la carpeta de salida de Bun/Vite es 'dist')
COPY --from=builder /app/dist /usr/share/nginx/html

# 2. Copia la configuración de Nginx para manejar rutas de SPA
# Asumimos que tienes 'nginx.conf' en la raíz de tu carpeta 'frontend'
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# 3. Expone el puerto por defecto de Nginx
EXPOSE 80

# 4. Comando para iniciar Nginx y servir los archivos
CMD ["nginx", "-g", "daemon off;"]