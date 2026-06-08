FROM oven/bun:1 AS base
WORKDIR /app

# Copy package configurations and lockfile
COPY package.json bun.lock ./

# Install dependencies
RUN bun install --frozen-lockfile

# Copy server code
COPY . .

# Development target
FROM base AS development
EXPOSE 3001
CMD ["bun", "run", "start:dev"]

# Build stage for production
FROM base AS builder
RUN bun run build

# Production runner stage
FROM oven/bun:1-slim AS runner
WORKDIR /app
ENV NODE_ENV=production

COPY package.json bun.lock tsconfig.json ./
# Install production-only dependencies
RUN bun install --frozen-lockfile --production

COPY --from=builder /app/dist ./dist

EXPOSE 3001
CMD ["bun", "dist/main.js"]
