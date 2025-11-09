import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// The "base: './'" setting tells Vite to use relative paths 
// for assets, which is essential for deployment to subdirectories 
// or custom non-root URLs like the one you are using.
export default defineConfig({
  plugins: [react()],
  base: './', 
});
