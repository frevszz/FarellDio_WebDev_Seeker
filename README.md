# Eco-Track — [Farell Dio]

## Tentang Project

Eco-Track membantu orang orang dalam menjaga lingkungan. Dirancang untuk membantu pengguna
menyadari besaran emisi karbon yang dihasilkan dari aktivitas harian mereka.

## Masalah Iklim yang Ingin Disoroti

Masalah utama yang disoroti dalam proyek ini adalah Emisi Karbon Tidak Terlihat.
Menurut saya tantangan terbesar dalam menjaga lingkungan adalah diri kita sendiri.
Karena seringkali kita merasa bahwa penggunaan AC selama satu jam atau berkendara
jarak dekat tidak memberikan dampak apa-apa. Saya harap dengan project ini orang orang
dapat sadar dan tahu bahwa aktivitas sehari hari pun dapat berdampak besar bagi lingkungan.

## Jalur Spesialisasi yang Dipilih

- [x] A1. Real-time UI Feedback
- [x] A2. Interactive Tips (Action Plan)
- [ ] A3. Dynamic Result Display
- [ ] B1. Static File Serving
- [ ] B2. The Carbon API
- [ ] B3. Smart Validation

## Cara Menjalankan Project

### Prasyarat

- Node.js (versi 14 atau lebih baru)
- npm (biasanya sudah ter-install bersama Node.js)

### Langkah-langkah

1. **Clone/Extract Project**

   ```
   git clone <https://github.com/frevszz/FarellDio_WebDev_Seeker.git>
   cd eco-track-project
   ```

2. **Install Dependencies**

   ```
   npm install
   ```

   Perintah ini akan menginstall Express.js dan dependency lainnya yang diperlukan.

3. **Jalankan Server**

   ```
   node app.js
   ```

   Server akan berjalan di `http://localhost:3000`

4. **Akses Aplikasi**
   - Buka browser dan navigasi ke `http://localhost:3000`
   - Website Eco-Track akan termuat dan siap digunakan

## Fitur Utama

- 🧮 **Carbon Calculator** - Hitung emisi karbon dari aktivitas harian
- 📋 **Action Plan** - Tips dan aksi untuk mengurangi emisi
- 📊 **Monthly Progress** - Track emisi bulanan dengan target 450 kg CO2e
- ✨ **Real-time Feedback** - UI berubah warna berdasarkan tingkat emisi
- 💾 **Persistent Storage** - Data tersimpan menggunakan Local Storage

## Struktur Project

```
eco-track-project/
├── app.js                    # Backend server (Express.js)
├── package.json             # Dependencies dan metadata project
├── README.md                # Panduan project
├── public/                  # Folder static files
│   ├── index.html          # Halaman utama/home
│   ├── main.js             # JavaScript utama untuk logika
│   ├── style.css           # CSS custom
│   ├── assets/
│   │   └── img/            # Folder untuk gambar/aset
│   └── pages/
│       ├── calculator.html # Halaman carbon calculator
│       └── actionPlan.html # Halaman action plan & tips
```

## Teknologi yang Digunakan

### Backend

- **Node.js** - Runtime JavaScript di server
- **Express.js 5.2.1** - Framework web server
- **path** - Module bawaan Node.js untuk handling file paths

### Frontend

- **HTML5** - Struktur halaman
- **Tailwind CSS 4** - Framework CSS utility-first
- **Vanilla JavaScript** - Logika interaktif (tanpa framework)
- **Remix Icons** - Icon library
- **Ionicons** - Icon library tambahan
- **Google Fonts (Manrope)** - Custom font

### Storage

- **Local Storage** - Menyimpan data progress pengguna secara lokal di browser

## Cara Menggunakan

### 1. Menggunakan Carbon Calculator

**Langkah:**

1. Navigasi ke halaman Calculator
2. Isi form:
   - Jarak perjalanan hari ini (km)
   - Pilih tipe kendaraan yang digunakan
   - Durasi penggunaan AC (jam)
   - Durasi penggunaan laptop (jam)
3. Perhatikan perubahan warna background secara real-time
4. Klik **Calculate** untuk melihat total emisi
5. Lihat progress bar dan kategorisasi emisi
6. Klik **Reset** untuk mengulang

**Fitur Real-time:**

- Background berubah warna saat Anda mengetik
- Progress bar update otomatis
- Loading animation menampilkan status

### 2. Menggunakan Action Plan

**Langkah:**

1. Navigasi ke halaman Action Plan (Pencet bagian "Action di Navbar")
2. Baca motivasi di atas
3. Centang aksi yang sudah Anda lakukan hari ini
4. Motivasi akan berubah seiring Anda menyelesaikan aksi

### 3. Tracking Progress Bulanan

**Otomatis:**

- Setiap kali Anda klik Calculate, emisi ditambahkan ke total bulanan
- Progress bar di halaman utama terupdate otomatis
- Data tersimpan di Local Storage selama 30 hari

**Manual Reset:**

- Klik tombol "Reset Monthly Progress" untuk memulai tracking baru

## Troubleshooting

### ❌ Server tidak berjalan

**Error:** `EADDRINUSE: address already in use :::3000`

**Solusi:**

- Port 3000 sudah digunakan oleh aplikasi lain
- Gunakan port berbeda di `app.js`:
  ```javascript
  app.listen(3001, () => {
    console.log("Server berjalan di http://localhost:3001");
  });
  ```

### ❌ CSS tidak dimuat / Styling berantakan

**Error:** Tailwind CSS atau custom CSS tidak muncul

**Solusi:**

- Pastikan file `style.css` ada di folder `public/`
- Refresh halaman dengan Ctrl+Shift+R (clear cache)
- Cek browser console (F12) untuk error messages

### ❌ Data tidak tersimpan setelah refresh

**Error:** Progress bulanan hilang setelah refresh halaman

**Solusi:**

- Pastikan browser mengizinkan Local Storage
- Cek di browser settings → Privacy → Cookies and Site Data
- Jangan clear browsing data secara otomatis

### ❌ Calculator tidak menghitung

**Error:** Total emisi tidak muncul setelah klik Calculate

**Solusi:**

- Isi semua input form (jarak, AC, laptop)
- Pastikan JavaScript di-enable di browser
- Cek console untuk error messages (F12 → Console)

### ❌ Mobile menu tidak bekerja

**Error:** Hamburger menu tidak responsive

**Solusi:**

- Refresh halaman
- Cek browser width (pastikan < 768px)
- Clear browser cache

## Tantangan yang Dihadapi

Banyak Hal yang saya pelajari dalam membuat project ini, terutama tentang local storage yang cukup asing bagi saya.
Namun local storage ini cukup penting dalam project yang saya buat. Tantangan lainnya tentang ketelitian karena project
ini sebagian besar menggunakan tailwind karena saya tidak terbiasa menggunakan css di file external, yang dimana
membuat kode saya mungkin terlihat agak padat. Overall saya sangat menikmati dalam membuat project ini, saya belajar
banyak dan gasabar buat dapet tantangan lain (jgn yang susah tapi)
