import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'api': '/src/api',
      'assets': '/src/assets',
      'components': '/src/components',
      'hooks': '/src/hooks',
      'pages': '/src/pages',
      'store': '/src/store',
      'routes': '/src/routes',
      'sass': '/src/sass',
      // Add wildcard aliases for all files within specific directories
      // '@components/*': '/src/components/*',
      // '@pages/*': '/src/pages/*',
    },
  },
})
