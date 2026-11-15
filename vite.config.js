import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      // Manifest dikelola manual di public/manifest.json agar mudah dikustomisasi.
      manifest: false,
      includeAssets: [
        'manifest.json',
        'icons/icon-192.png',
        'icons/icon-512.png'
      ],
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,webp,woff2,json}'],
        navigateFallback: 'index.html',
        cleanupOutdatedCaches: true
      }
    })
  ],
  server: {
    host: true
  },
  preview: {
    host: true
  }
});
