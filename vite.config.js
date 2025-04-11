import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Hospital Clinico Aguila',
        short_name: 'HCA',
        description: '',
        theme_color: '#ffffff',
        start_url: '/',
        display: 'standalone',
        icons: [
          {
              src: "/icons/icon-hospital128.png",
              sizes: "128x128",
              type: "image/png"
          },
          {
              src: "/icons/icon-hospital512.png",
              sizes: "512x512",
              type: "image/png"
          }
        ]
        }
      })
    ]
  });