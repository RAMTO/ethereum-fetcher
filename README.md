# 🪫 Ethereum fetcher API

Ethereum fetcher API with basic authentication

## 🤓 Prerequisites

Node version: `20.17.0`

If you use another version, please use [n](https://github.com/tj/n) to manage.

`pnpm` version: `9.14.2`

To upgrade to the latest pnpm version please run:

```bash
npm install -g pnpm@latest
```

[Docker](https://www.docker.com/) installed on your system.

## ⚙️ Project setup

```bash
$ pnpm install
```

Before running the project please create `.env` or use the example one.

```shell
cp .env.example .env
```

```shell
API_PORT=
ETH_NODE_URL=
DB_CONNECTION_URL=
JWT_SECRET=
```

## 📖 Run Postgres DB with Docker

```bash
docker compose up -d
```

Apply DB migrations:

```bash
npx prisma migrate deploy
```

## 🚀 Compile and run the project

```bash
# development
pnpm run start

# watch mode
pnpm run start:dev

# production mode
pnpm run start:prod
```

## Run tests

```bash
# unit tests
pnpm run test

# test coverage
pnpm run test:cov
```
