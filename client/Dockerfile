FROM oven/bun:1 AS base
WORKDIR /app

# Copy package configurations and lockfile
COPY package.json bun.lock ./

# Install dependencies
RUN bun install --frozen-lockfile

# Copy client code
COPY . .

# Development target
FROM base AS development
EXPOSE 3000
CMD ["bun", "run", "dev"]

# Build stage for production
FROM base AS builder
# Accept build-time arguments for Vite environment variables
ARG VITE_SERVER_URL=""
ARG VITE_WS=""
ENV VITE_SERVER_URL=$VITE_SERVER_URL
ENV VITE_WS=$VITE_WS

RUN bun run build

# Production runner stage (using Nginx to serve static files)
FROM nginx:alpine AS runner
COPY --from=builder /app/dist /usr/share/nginx/html
# Add basic routing for single-page application (fallback to index.html)
RUN echo 'server { \
    listen 3000; \
    location / { \
        root /usr/share/nginx/html; \
        index index.html index.htm; \
        try_files $uri $uri/ /index.html; \
    } \
}' > /etc/nginx/conf.d/default.conf

EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]
