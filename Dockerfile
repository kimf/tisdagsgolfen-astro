FROM node:23.11.0-slim AS base
WORKDIR /app
ARG DATABASE_URL
ARG TURSO_AUTH_TOKEN
ARG REDIS_URL
ARG NODE_ENV
ARG USER_PASSWORD

COPY . .

RUN npm install --arch=arm64 --platform=linux --libc=musl -g sharp
RUN npm install --include=dev
RUN npm run build
RUN npm run db:migrate

# Set only runtime ENV here
ENV HOST=0.0.0.0
ENV PORT=4321
ENV NODE_ENV=production

ENV DATABASE_URL=${DATABASE_URL}
ENV TURSO_AUTH_TOKEN=${TURSO_AUTH_TOKEN}
ENV REDIS_URL=${REDIS_URL}
ENV USER_PASSWORD=${USER_PASSWORD}

VOLUME /data

EXPOSE 4321

CMD ["node", "./dist/server/entry.mjs"]
