FROM oven/bun:1 AS base
WORKDIR /app

COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

COPY . .

FROM base AS builder
RUN bun run build

FROM oven/bun:1-slim AS production
WORKDIR /app
ENV NODE_ENV=production

COPY package.json bun.lock tsconfig.json ./
RUN sed -i 's/"src\//"dist\//g' tsconfig.json
RUN bun install --frozen-lockfile --production

COPY --from=builder /app/dist ./dist

EXPOSE 3001
CMD ["bun", "dist/main.js"]
