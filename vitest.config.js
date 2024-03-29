import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  test: {
    globals: true,
    environment: 'happy-dom',
    logLevel: 'info',
    coverage: {
      provider: 'v8',
    },
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
