# --- Build ---
FROM node:22-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
# URL pública para canonical, Open Graph y sitemap: docker build --build-arg SITE_URL=https://tudominio.com .
ARG SITE_URL=https://sucova.com
ENV SITE_URL=$SITE_URL
RUN npm run build

# --- Servir con nginx ---
FROM nginx:1.27-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
HEALTHCHECK CMD wget -qO- http://127.0.0.1/ >/dev/null || exit 1
