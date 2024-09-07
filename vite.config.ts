/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import * as path from 'path';
import { visualizer } from 'rollup-plugin-visualizer';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react(), visualizer()],
  resolve: {
    alias: {
      '@core': path.resolve(__dirname, './src/core'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@components': path.resolve(__dirname, './src/components'),
    },
  },
  optimizeDeps: {
    // include: ["@emotion/styled"],
  },
  build: {
    // chunkSizeWarningLimit: 1700,
    outDir: 'build',
    assetsDir: 'assets',
    emptyOutDir: true,
    minify: 'esbuild',
    rollupOptions: {
      output: {
        // eslint-disable-next-line consistent-return
        manualChunks: (id) => {
          // Libraries that benefit from being manually chunked to avoid huge bundle size.
          // Changing anything here might break the build, proceed with caution
          const libraries = ['@mui', '@emotion', 'luxon'];
          const subLibraries = ['@mui/x-data-grid'];

          const isLibrary = (lib: string) => id.includes(`node_modules/${lib}`);
          const getChunkedName = (c: string) => c.toString().split(`node_modules/`)[1].split('/');

          if (libraries.some(isLibrary)) {
            const chunks = getChunkedName(id);

            if (subLibraries.some(isLibrary)) {
              return `${chunks[0].toString()}/${chunks[1].toString()}`;
            }

            return chunks[0].toString();
          }
        },
      },
    },
  },
});
