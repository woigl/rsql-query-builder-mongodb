import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm', 'iife'],
  globalName: 'RSQLBuilderMongoDB',
  dts: true,
  sourcemap: true,
  clean: true,
  target: 'es2020',
  minify: true,
});