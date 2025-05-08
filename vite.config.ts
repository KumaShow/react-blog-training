import path from 'path';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  const productionBase = '/react-blog-training/';

  return {
    plugins: [react(), tailwindcss()],
    base: command === 'serve' ? '/' : productionBase,
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
  };
});
