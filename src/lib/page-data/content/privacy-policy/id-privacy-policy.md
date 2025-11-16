---
title: 'Kebijakan Privasi'
description: 'Kebijakan Privasi Glitch Text Generator - Pelajari bagaimana kami melindungi privasi Anda dan bagaimana kami mengumpulkan serta menggunakan data'
date: '2025-11-16'
author: 'Admin'
tags: ['kebijakan privasi', 'perlindungan data', 'privasi pengguna']
language: 'id'
---

**Tanggal Berlaku: 16 November 2025**

Selamat datang di Glitch Text Generator (selanjutnya disebut "Situs Web" atau "kami"). Kami sangat serius dalam melindungi privasi Anda. Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, menyimpan, dan melindungi informasi Anda.

## 1. Ikhtisar Pengumpulan Informasi

### 1.1 Informasi yang TIDAK Kami Kumpulkan

**Situs Web berkomitmen untuk:**

- ❌ **Tidak menyimpan konten teks apa pun yang Anda masukkan**: Semua konten yang Anda masukkan ke dalam generator teks hanya diproses secara lokal di browser Anda dan tidak pernah diunggah ke server kami
- ❌ **Tidak memerlukan pendaftaran atau login**: Anda dapat menggunakan semua fitur tanpa membuat akun
- ❌ **Tidak mengumpulkan informasi identifikasi pribadi**: Kami tidak mengumpulkan nama, email, nomor telepon, atau informasi pribadi lainnya
- ❌ **Tidak menggunakan Cookies untuk menyimpan data pribadi**: Kami tidak menyimpan informasi yang dapat mengidentifikasi pribadi melalui Cookies

### 1.2 Data Anonim yang Kami Kumpulkan

Untuk meningkatkan kualitas layanan dan pengalaman pengguna, kami mengumpulkan informasi statistik anonim berikut melalui alat analisis pihak ketiga:

**Dikumpulkan melalui Google Analytics:**

- Tampilan halaman dan jalur navigasi
- Jenis perangkat yang digunakan (desktop, seluler, tablet, dll.)
- Jenis dan versi browser
- Informasi sistem operasi
- Lokasi geografis (tingkat negara/wilayah dan kota)
- Sumber lalu lintas (mesin pencari, akses langsung, tautan eksternal, dll.)
- Waktu yang dihabiskan di halaman
- Jenis generator yang digunakan (Zalgo, Cursed, Flip, dll.)

**Dikumpulkan melalui Microsoft Clarity:**

- Replay sesi anonim (untuk menganalisis pola interaksi pengguna)
- Data peta panas (klik, perilaku scroll)
- Metrik kinerja halaman
- Log kesalahan JavaScript

**Catatan Penting:** Semua data ini bersifat anonim dan tidak terkait dengan identitas pribadi Anda. Kami tidak dapat mengidentifikasi pengguna individu tertentu melalui data ini.

## 2. Metode Pemrosesan Data

### 2.1 Pemrosesan Lokal

Semua fungsi konversi teks diselesaikan secara lokal di browser Anda:

- **Konversi karakter Unicode**: Diimplementasikan menggunakan JavaScript frontend murni, tidak memerlukan keterlibatan server
- **Pratinjau real-time**: Semua efek pratinjau dirender di sisi klien
- **Penyalinan teks**: Fungsi salin menggunakan API clipboard native browser

**Implementasi teknis:**

- Menggunakan pustaka `unicode-text-decorator` untuk konversi simbol alfanumerik matematika
- Menggunakan pustaka `confusables` untuk pengaburan karakter
- Kamus pemetaan karakter khusus untuk efek khusus (Zalgo, Cursed, Glitch, dll.)

Ini berarti konten teks Anda tidak pernah meninggalkan perangkat Anda; kami tidak dapat melihat atau menyimpan apa yang Anda masukkan.

### 2.2 Tidak Ada Penyimpanan Server

Situs Web di-deploy di Cloudflare menggunakan Static Site Generation (SSG):

- Situs web terdiri dari halaman HTML statis yang telah di-render sebelumnya
- Tidak ada server backend atau database
- Tidak ada kemungkinan untuk menyimpan data pengguna

## 3. Layanan Pihak Ketiga

### 3.1 Google Analytics

**Tujuan:** Analisis lalu lintas situs web dan statistik perilaku pengguna

**Jenis data yang dikumpulkan:**

- Statistik kunjungan anonim
- Metrik kinerja halaman
- Informasi perangkat dan browser pengguna
- Lokasi geografis (tingkat negara/kota)

**Periode penyimpanan data:** Menurut pengaturan default Google Analytics, data disimpan selama 26 bulan

**Kontrol privasi:** Anda dapat memilih keluar dari pelacakan Google Analytics dengan:

- Memasang [Add-on Browser Opt-out Google Analytics](https://tools.google.com/dlpage/gaoptout)
- Mengaktifkan "Do Not Track" di browser Anda
- Menggunakan mode privasi/incognito browser Anda

**Informasi lebih lanjut:** [Kebijakan Privasi Google Analytics](https://policies.google.com/privacy)

### 3.2 Microsoft Clarity

**Tujuan:** Analisis pengalaman pengguna dan optimasi situs web

**Jenis data yang dikumpulkan:**

- Replay sesi anonim
- Peta panas dan peta scroll
- Analisis pola klik
- Data kinerja halaman

**Pemrosesan data:** Microsoft Clarity tidak mengumpulkan informasi yang dapat mengidentifikasi pribadi (PII); semua data bersifat anonim

**Perlindungan privasi:** Clarity secara otomatis menyamarkan informasi sensitif (seperti konten field input password)

**Informasi lebih lanjut:** [Kebijakan Privasi Microsoft Clarity](https://privacy.microsoft.com/privacystatement)

### 3.3 Cloudflare

**Tujuan:** Hosting situs web dan Content Delivery Network (CDN)

**Data yang mungkin dikumpulkan Cloudflare:**

- Alamat IP (untuk perlindungan keamanan dan analisis lalu lintas)
- Jenis dan versi browser
- Timestamp akses
- URL halaman yang diminta

**Fitur keamanan:**

- Perlindungan DDoS
- Enkripsi SSL/TLS
- Web Application Firewall (WAF)

**Informasi lebih lanjut:** [Kebijakan Privasi Cloudflare](https://www.cloudflare.com/privacypolicy/)

## 4. Penggunaan Cookies

### 4.1 Cookies yang Kami Gunakan

Situs Web menggunakan Cookies minimal untuk menyediakan fungsi dasar:

**Cookies Penting (tidak dapat dinonaktifkan):**

- Pengaturan preferensi tema (mode terang/gelap)
- Preferensi pemilihan bahasa (10 opsi bahasa: en, zh, es, fr, de, ja, ko, ru, pt, id)
- Pemeliharaan status sesi

**Cookies Analitik (opsional):**

- Cookies Google Analytics (\_ga, \_gid, \_gat)
- Cookies Microsoft Clarity (\_clck, \_clsk)

### 4.2 Cara Mengelola Cookies

Anda dapat mengelola atau menghapus Cookies melalui pengaturan browser:

- **Chrome:** Pengaturan > Privasi dan keamanan > Cookie dan data situs lainnya
- **Firefox:** Opsi > Privasi & Keamanan > Cookie dan Data Situs
- **Safari:** Preferensi > Privasi > Kelola Data Situs Web
- **Edge:** Pengaturan > Privasi, pencarian, dan layanan > Izin cookie dan situs

**Catatan:** Menonaktifkan Cookies dapat memengaruhi fitur situs web tertentu, seperti pengaturan tema dan preferensi bahasa.

## 5. Keamanan Data

### 5.1 Langkah Perlindungan Teknis

Kami menerapkan langkah-langkah keamanan berikut untuk melindungi informasi Anda:

- **Enkripsi HTTPS:** Semua transmisi data dienkripsi melalui SSL/TLS
- **CDN Cloudflare:** Menyediakan perlindungan DDoS dan Web Application Firewall
- **Arsitektur situs statis:** Tidak ada database atau backend, mengurangi risiko pelanggaran data
- **Pemrosesan lokal:** Konversi teks diselesaikan sepenuhnya di browser Anda; data tidak pernah meninggalkan perangkat Anda

### 5.2 Keamanan Layanan Pihak Ketiga

Layanan pihak ketiga yang kami gunakan (Google Analytics, Microsoft Clarity, Cloudflare) semuanya adalah penyedia terkemuka di industri dengan standar keamanan yang ketat dan langkah-langkah perlindungan privasi.

## 6. Perlindungan Privasi Anak

Situs Web tidak dengan sengaja mengumpulkan informasi pribadi dari anak-anak di bawah 13 tahun. Jika Anda adalah orang tua atau wali dan menemukan bahwa anak Anda telah memberikan informasi pribadi kepada kami, silakan hubungi kami, dan kami akan segera menghapus informasi yang relevan.

## 7. Transfer Data Internasional

Situs Web dilayani melalui jaringan CDN global Cloudflare, dan data Anda mungkin ditransfer antar server di berbagai negara/wilayah. Kami memastikan semua transfer data mematuhi hukum perlindungan data yang berlaku.

**Wilayah yang berlaku:**

- Pengguna UE: Kami mematuhi Peraturan Perlindungan Data Umum (GDPR)
- Pengguna AS: Kami mematuhi Undang-Undang Privasi Konsumen California (CCPA)
- Wilayah lain: Kami mematuhi hukum perlindungan data lokal yang berlaku

## 8. Hak Anda

### 8.1 Akses dan Kontrol Data

Karena kami tidak mengumpulkan atau menyimpan data pribadi Anda:

- ✅ **Hak untuk mengakses:** Kami tidak memiliki data pribadi tentang Anda untuk diakses
- ✅ **Hak untuk menghapus:** Teks yang Anda masukkan tidak pernah disimpan dan tidak memerlukan penghapusan
- ✅ **Hak portabilitas data:** Semua teks yang dihasilkan dapat disalin dan digunakan secara bebas
- ✅ **Hak untuk keberatan:** Anda dapat menonaktifkan Cookies analitik melalui pengaturan browser

### 8.2 Kontrol Data Analitik

Anda dapat mengontrol pengumpulan data analitik melalui:

1. **Nonaktifkan Google Analytics:**
   - Pasang ekstensi browser opt-out Google Analytics
   - Aktifkan fitur "Do Not Track" browser Anda

2. **Nonaktifkan Microsoft Clarity:**
   - Blokir domain clarity.ms di browser Anda
   - Gunakan mode privasi/incognito untuk browsing

3. **Hapus Cookies:**
   - Hapus Cookies browser secara berkala
   - Gunakan fitur peningkatan privasi browser Anda

## 9. Pembaruan Kebijakan Privasi

Kami dapat memperbarui Kebijakan Privasi ini secara berkala. Perubahan signifikan akan dikomunikasikan melalui:

- Pengumuman yang menonjol di halaman utama situs web
- Memperbarui "Tanggal Berlaku" di bagian atas halaman ini
- Pengingat melalui sistem notifikasi situs web

**Rekomendasi:** Harap tinjau Kebijakan Privasi ini secara berkala untuk memahami bagaimana kami melindungi informasi Anda.

## 10. Notifikasi Pelanggaran Data

Meskipun kami tidak menyimpan data pengguna, jika terjadi insiden keamanan yang melibatkan layanan pihak ketiga, kami akan:

1. Segera menyelidiki ruang lingkup dan dampak insiden
2. Memposting pengumuman di situs web untuk memberi tahu pengguna
3. Bekerja sama dengan penyedia layanan yang relevan untuk menerapkan langkah-langkah perbaikan
4. Melaporkan kepada otoritas pengatur sesuai yang disyaratkan oleh hukum

## 11. Catatan Penggunaan Khusus Platform

### 11.1 Pengguna Discord

Jika Anda menggunakan teks yang dihasilkan oleh situs web ini di Discord:

- Teks yang dihasilkan tunduk pada kebijakan privasi Discord
- Discord dapat menyimpan konten pesan Anda
- Harap patuhi Pedoman Komunitas dan Ketentuan Layanan Discord

### 11.2 Pengguna Roblox

Jika Anda menggunakan teks yang dihasilkan oleh situs web ini di Roblox:

- Teks yang dihasilkan tunduk pada kebijakan privasi Roblox
- Roblox dapat memfilter atau mencatat konten chat
- Harap patuhi Kebijakan Konten dan Ketentuan Penggunaan Roblox

### 11.3 Pengguna Minecraft

Jika Anda menggunakan teks yang dihasilkan oleh situs web ini di Minecraft:

- Server dapat mencatat riwayat chat
- Server yang berbeda dapat memiliki kebijakan privasi yang berbeda
- Harap patuhi aturan server dan EULA Minecraft

## 12. Hubungi Kami

Jika Anda memiliki pertanyaan, komentar, atau keluhan tentang Kebijakan Privasi ini, silakan hubungi kami melalui:

- Kunjungi [halaman Tentang](/about) kami untuk informasi kontak
- Kirim pesan melalui formulir kontak yang disediakan di situs web

**Waktu respons:** Kami akan merespons dalam 7 hari kerja setelah menerima permintaan Anda.

## 13. Kepatuhan Hukum

### 13.1 Hukum yang Berlaku

Kebijakan Privasi ini diatur oleh hukum dan peraturan berikut:

- Peraturan Perlindungan Data Umum (GDPR) - berlaku untuk pengguna UE
- Undang-Undang Privasi Konsumen California (CCPA) - berlaku untuk penduduk California
- Hukum perlindungan data internasional dan regional lainnya yang berlaku

### 13.2 Penyelesaian Sengketa

Setiap sengketa yang timbul dari Kebijakan Privasi ini harus diselesaikan terlebih dahulu melalui negosiasi yang bersahabat. Jika negosiasi gagal, sengketa harus diserahkan ke pengadilan yang berwenang.

## 14. Ringkasan

**Komitmen Privasi Kami:**

✅ **Pemrosesan lokal sepenuhnya**: Konten teks Anda tidak pernah meninggalkan browser Anda  
✅ **Tidak perlu pendaftaran**: Gunakan tanpa memberikan informasi pribadi  
✅ **Analitik anonim**: Hanya data statistik anonim yang dikumpulkan untuk meningkatkan layanan  
✅ **Transparansi**: Penjelasan yang jelas tentang data yang kami kumpulkan dan cara kami menggunakannya  
✅ **Kontrol pengguna**: Anda dapat menonaktifkan fitur analitik kapan saja  
✅ **Keamanan data**: Transmisi data dilindungi melalui HTTPS dan Cloudflare

**Sederhananya:** Kami tidak tahu teks apa yang Anda masukkan, dan kami tidak menyimpan informasi pribadi Anda. Kami hanya mengumpulkan statistik penggunaan situs web anonim untuk meningkatkan pengalaman pengguna.

---

**Terakhir diperbarui: 16 November 2025**

Terima kasih telah menggunakan Glitch Text Generator! Kami berkomitmen untuk melindungi privasi Anda sambil memberikan pengalaman generasi teks terbaik.
