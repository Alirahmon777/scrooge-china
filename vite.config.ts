import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';
import { compression } from 'vite-plugin-compression2';
// https://vitejs.dev/config/
const root = resolve(__dirname, 'src');

export default defineConfig({
  plugins: [react(), compression({ deleteOriginalAssets: true })],
  resolve: {
    alias: {
      '@': resolve(root),
      '@admin': resolve(root, 'admin'),
      '@public': resolve(__dirname, 'public'),
      '@assets': resolve(root, 'assets/'),
      '@images': resolve(root, 'assets/images'),
      '@svgs': resolve(root, 'assets/svgs'),
      '@styles': resolve(root, 'assets/styles'),
      '@components': resolve(root, 'components'),
      '@shared': resolve(root, 'shared'),
      '@pages': resolve(root, 'pages'),
      '@type': resolve(root, 'types'),
    },
  },
  server: {
    host: '0.0.0.0',
  },

  optimizeDeps: {
    include: ['react-use-websocket'],
  },

  build: {
    rollupOptions: {
      output: {
        format: 'esm',
      },
    },
  },
});
