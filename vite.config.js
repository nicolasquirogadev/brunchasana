import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [], // Aquí puedes agregar otros módulos si fuera necesario
    },
  },
  base: '/brunchasana/'
})
