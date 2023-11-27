// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// });

// vite.config.js
// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        // Use manualChunks to create custom chunks
        manualChunks(id) {
          if (id.includes('node_modules/large-library')) {
            return 'large-library';
          }
        },
      },
    },
    // Adjust the chunk size warning limit
    chunkSizeWarningLimit: 2000,
    
  },
  plugins: [react()],
  
});

