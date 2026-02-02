# ==== Builder stage ====
FROM node:lts-alpine AS builder
WORKDIR /app

# Install pnpm (faster, deterministic)
RUN npm install -g pnpm

# Copy only manifest files first to maximize cache
COPY package.json pnpm-lock.yaml ./

# Install dependencies (including devDependencies for build)
RUN pnpm install

# Copy the rest of the project
COPY . .

# Build
RUN pnpm build


# ==== Runtime stage ====
FROM node:lts-alpine AS runtime
WORKDIR /app

# Install pnpm for workspaces if still needed at runtime (optional)
RUN npm install -g pnpm

# Copy only production node_modules + build output
COPY package.json pnpm-lock.yaml ./

RUN pnpm install --prod

COPY --from=builder /app/dist ./dist

ENV HOST=0.0.0.0

CMD ["node", "./dist/server/entry.mjs"]
