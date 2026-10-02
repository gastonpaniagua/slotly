# Slotly

Reservas online para peluquerías: el cliente elige servicio y horario libre, y el profesional recibe el aviso.

## Stack

- **API**: NestJS 12 (TypeScript estricto, ESM) + Prisma 7 + PostgreSQL 17 con `btree_gist`
- **Web**: Next.js 16 (App Router) + Tailwind
- **Monorepo**: pnpm workspaces (`apps/api`, `apps/web`, `packages/shared-types`)
- **Calidad**: Prettier, oxlint (API), ESLint (web), Husky + lint-staged, GitHub Actions

## Requisitos

- Node 22 o más nuevo
- pnpm 12
- Docker Desktop corriendo

## Levantar el proyecto

```bash
# 1. Variables de entorno
cp .env.example .env
cp apps/api/.env.example apps/api/.env

# 2. Base de datos (Postgres en el puerto 5433)
docker compose up -d

# 3. Dependencias (también genera el cliente de Prisma)
pnpm install

# 4. Todo en modo desarrollo
pnpm dev
```

- API: http://localhost:3000 (chequeo: http://localhost:3000/health)
- Web: http://localhost:3001

En Windows (PowerShell), el paso 1 es con `Copy-Item` en vez de `cp`.

## Scripts

| Comando             | Qué hace                                 |
| ------------------- | ---------------------------------------- |
| `pnpm dev`          | Levanta API, web y shared-types en watch |
| `pnpm build`        | Compila todos los paquetes               |
| `pnpm lint`         | Lint de API y web                        |
| `pnpm test`         | Tests                                    |
| `pnpm format`       | Formatea todo con Prettier               |
| `pnpm format:check` | Verifica el formato (lo usa el CI)       |

Antes de cada commit, Husky formatea los archivos modificados y corre el lint y los tests.

## Estructura

```
apps/
  api/              NestJS: auth, usuarios, profesionales, servicios, disponibilidad, turnos
  web/              Next.js: (publico), (cliente), (profesional), (admin)
packages/
  shared-types/     Tipos compartidos entre API y web
docker/postgres/    Script de inicio de la base (habilita btree_gist)
docs/               Definición del producto e integraciones
```

## Deploy (previsto)

- Web en Vercel
- API y base de datos en Railway o Render
