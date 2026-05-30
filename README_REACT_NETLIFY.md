# Tap Wayang React - Persiapan dan Deploy

Versi ini dibuat ulang dengan:

- React
- Vite
- Tailwind CSS
- Framer Motion
- lucide-react
- React Router

## Yang Perlu Disiapkan

1. Node.js dan npm

Sudah dicek di laptop ini:

```txt
Node v26.0.0
npm 11.12.1
```

2. Akun Netlify

Bisa pakai deploy manual atau sambungkan ke GitHub.

3. Domain Netlify final

Tentukan domain sebelum menulis semua stiker NFC, misalnya:

```txt
https://tap-wayang-kamu.netlify.app
```

4. Review isi materi

Cek lagi narasi tokoh, piwulang Jawa, dan bagian 4 mapel utama sebelum dinilai guru.

5. Keputusan link rahasia

Saat ini route masih mudah dibaca:

```txt
/k/abimanyu
```

Kalau link NFC ingin lebih rahasia, ganti menjadi kode acak sebelum stiker ditulis:

```txt
/k/a7q2m9
```

## Jalankan Lokal

```bash
npm install
npm run dev
```

## Build Production

```bash
npm run build
```

Hasil build ada di folder:

```txt
dist
```

## Deploy ke Netlify

Cara paling mudah untuk manual deploy:

1. Jalankan `npm run build`.
2. Upload folder `dist` ke Netlify.

Kalau pakai GitHub:

- Build command: `npm run build`
- Publish directory: `dist`

File `netlify.toml` sudah disiapkan untuk routing `/k/nama-kartu`.
