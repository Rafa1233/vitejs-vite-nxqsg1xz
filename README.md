# Bubble Music — Tahap 1

Fondasi proyek React + Vite + Tailwind CSS + PWA untuk aplikasi pemutar musik Bubble UI.

## Persyaratan

- Node.js `20.19+` atau `22.12+`
- npm versi yang disertakan dengan Node.js

## Menjalankan proyek

```bash
npm install
npm run dev
```

Buka alamat lokal yang ditampilkan Vite di terminal.

## Build produksi

```bash
npm run build
npm run preview
```

PWA dan service worker diproses oleh `vite-plugin-pwa` saat build. Manifest aplikasi dikelola secara manual di `public/manifest.json`. Pengujian instalasi PWA sebaiknya dilakukan pada HTTPS atau `localhost`.

## Catatan tahap

Halaman awal pada `src/App.jsx` hanya menjadi pemeriksa fondasi Tahap 1. Halaman tersebut akan digantikan dengan aplikasi lengkap pada Tahap 3–4. Struktur folder yang masih kosong telah disiapkan untuk modul audio, lirik, katalog, Firebase, navigasi, player, dan halaman.
