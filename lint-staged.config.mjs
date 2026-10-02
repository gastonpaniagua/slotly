export default {
  '*.{ts,tsx,js,mjs,cjs,json,md,css,yml,yaml}': 'prettier --write',
  'apps/api/**/*.ts': () => 'pnpm --filter @slotly/api lint',
  'apps/web/**/*.{ts,tsx}': () => 'pnpm --filter @slotly/web lint',
};
