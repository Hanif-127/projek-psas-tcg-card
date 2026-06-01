# Tap Wayang React - Persiapan dan Deploy

Versi ini dibuat ulang dengan:

- React
- Vite
- Tailwind CSS
- Framer Motion
- lucide-react
- React Router
- Firebase Auth + Firestore opsional untuk login Google

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

Route lihat kartu dari web masih mudah dibaca:

```txt
/k/abimanyu
```

Route NFC untuk koleksi fisik sudah dipisah menjadi kode:

```txt
/t/tw-a8m4q2
```

Klik `/k/...` menambah progress Eksplorasi Web. Tap `/t/...` menambah progress Koleksi Fisik.

## Login Google

Login Google sudah disiapkan, tetapi baru aktif setelah Firebase config dimasukkan.

1. Buat project Firebase.
2. Aktifkan Authentication > Sign-in method > Google.
3. Buat Firestore Database.
4. Tambahkan domain Vercel di Authorized domains pada Firebase Auth.
5. Isi environment variables di Vercel sesuai `.env.example`.

Nama environment variable:

```txt
VITE_FIREBASE_API_KEY
VITE_FIREBASE_AUTH_DOMAIN
VITE_FIREBASE_PROJECT_ID
VITE_FIREBASE_STORAGE_BUCKET
VITE_FIREBASE_MESSAGING_SENDER_ID
VITE_FIREBASE_APP_ID
```

Contoh Firestore rules sederhana:

```txt
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /userProgress/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
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
