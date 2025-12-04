# ----------------------------------------------------
# ETAPA 1: BUILDER (Construcción del Frontend con Bun)
# ----------------------------------------------------
FROM oven/bun:1 AS builder 

# Establece el directorio de trabajo
WORKDIR /app

# Copia solo package.json (Es el mínimo necesario para bun install)
# Si bun.lockb existe, se copiará más tarde, o se generará en el RUN bun install
COPY package.json ./

# PASO DE LIMPIEZA CLAVE: Aseguramos que no haya artefactos viejos
RUN rm -rf node_modules

# Instala todas las dependencias usando BUN (Bun buscará bun.lockb o lo creará)
RUN bun install

# Copia el resto de los archivos (incluyendo el código fuente y el bun.lockb recién creado si no existía antes)
COPY . .

# Ejecuta el script de construcción usando BUN
RUN bun run build

# ----------------------------------------------------
# ETAPA 2: PRODUCCIÓN (Servir los archivos estáticos)
# ----------------------------------------------------
FROM nginx:1.25-alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]