import 'dotenv/config';
import { defineConfig } from 'prisma/config';

export default defineConfig({
  schema: 'prisma/schema.prisma',
  migrations: {
    path: 'prisma/migrations',
  },
  datasource: {
    // process.env en lugar de env(): `prisma generate` no necesita la URL y
    // así funciona en CI / clones sin .env. migrate sigue fallando si falta.
    url: process.env.DATABASE_URL,
  },
});
