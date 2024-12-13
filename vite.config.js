import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 8080, // Set the port to 8080
},
})

// export default {
//   server: {
//       proxy: {
//           '/api': {
//               target: 'https://fashionai-grvw.onrender.com',
//               changeOrigin: true,
//               rewrite: (path) => path.replace(/^\/api/, '')
//           }
//       }
//   }
// };

