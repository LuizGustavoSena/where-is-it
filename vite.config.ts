/// <reference types="vitest" />
/// <reference types="vite/client" />
import react from '@vitejs/plugin-react';
import { UserConfig, defineConfig } from 'vite';
import { InlineConfig } from 'vitest';
interface VitestConfigExport extends UserConfig {
  test: InlineConfig;
}
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
  },
  server: {
    host: true,
    port: 80
  }
} as VitestConfigExport)