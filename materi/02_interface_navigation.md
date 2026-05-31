# Hari 2: Navigasi Interface & Site Map 🗺️

Setelah berhasil menginstal, hari ini kita akan menjelajahi ruang kendali Burp Suite. Burp Suite memiliki banyak sekali tab menu, namun untuk pemula ada beberapa area krusial yang wajib dipahami.

---

## 🧭 1. Mengenal Menu Utama Burp Suite
Saat pertama kali membuka proyek baru, Anda akan disajikan tampilan Dashboard:
*   **Dashboard Tab:** Berisi ringkasan tugas (*Tasks*) yang sedang berjalan, log peristiwa, serta daftar kerentanan yang ditemukan (jika menggunakan versi Pro).
*   **Target Tab:** Tempat memetakan struktur aplikasi web yang Anda kunjungi. Di sinilah **Site Map** berada.
*   **Proxy Tab:** Alat utama yang menjembatani browser dengan server. Berisi sub-tab *Intercept*, *HTTP History*, dan *WebSockets History*.
*   **Intruder Tab:** Digunakan untuk melakukan serangan otomatis (seperti brute force tebak kata sandi).
*   **Repeater Tab:** Digunakan untuk memodifikasi request dan mengirimkannya kembali berulang kali secara manual.

---

## 📍 2. Memahami Site Map (Peta Situs)
Setiap kali Anda berselancar di internet dengan proxy aktif, Burp Suite akan merekam setiap tautan (*URL*), gambar, dan berkas script yang dimuat oleh browser. Semuanya diorganisir dalam struktur pohon folder di tab **Target ➔ Site Map**.

*   **Mengapa Site Map penting?**
    Sebagai pentester, Site Map membantu kita memetakan arsitektur aplikasi web target. Kita bisa melihat folder tersembunyi, file backup, atau file konfigurasi yang tidak sengaja terekspos ke publik.

---

## 🎯 3. Apa itu Target Scoping dan Cara Menyetingnya?
Saat Anda membuka Firefox dengan proxy aktif, browser Anda tidak hanya mengirim request ke website target (misalnya `localhost:8000`), tetapi juga mengirim data latar belakang ke situs Google Analytics, update Fedora OS, atau update ekstensi browser.

Jika semua request ini direkam oleh Burp Suite, tab *HTTP History* Anda akan menjadi sangat kotor dan penuh sampah. Di sinilah fitur **Target Scope (Cakupan Target)** digunakan.

> [!IMPORTANT]
> **Definisi Scope:**
> *Scope* adalah filter pintar yang kita gunakan untuk memberi tahu Burp Suite: *"Saya hanya peduli dengan website target ini, tolong abaikan lalu lintas data dari domain lainnya."*

### Langkah Penyetelan Target Scope:
1.  Buka tab **Target** ➔ pilih sub-tab **Site Map**.
2.  Cari nama domain target Anda di panel sebelah kiri (misalnya `http://localhost:8000`).
3.  Klik kanan pada nama domain tersebut ➔ pilih **Add to scope**.
4.  Sebuah pop-up konfirmasi akan muncul menanyakan apakah Anda ingin menghentikan perekaman traffic di luar scope. Klik **Yes**.
5.  Untuk melihat lalu lintas yang bersih di tab **Proxy ➔ HTTP History**:
    *   Klik pada bar filter di bagian atas tabel history *(biasanya bertuliskan "Filter: Showing all items")*.
    *   Centang pilihan **Show only in-scope items** (Tampilkan hanya item dalam cakupan).
    *   Klik Apply. Sekarang tab history Anda akan sangat bersih!

---

## 🚀 4. Praktik Menggunakan Site Map & Scoping (PortSwigger Academy)
Mari kita latih navigasi menu Burp Target dan Site Map Anda dengan memecahkan 2 lab keamanan berikut:

### Lab 1: Eksplorasi Peta Situs untuk Menemukan Folder Admin Tersembunyi
*   **Target Lab:** [Unprotected admin functionality](https://portswigger.net/web-security/access-control/lab-unprotected-admin-functionality)
*   **Fokus Burp Suite:** **Target -> Site Map**
*   **Tujuan:** Aktifkan FoxyProxy. Kunjungi halaman lab di atas. Jelajahi situs tersebut (klik beberapa menu). Sekarang, buka Burp Suite, lihat tab **Target -> Site Map**. Cari folder atau sub-direktori mencurigakan (seperti `/admin`). Kunjungi URL tersebut langsung di browser Anda untuk masuk ke panel admin dan menghapus pengguna bernama `carlos`.
*   **💡 Analogi IT:** Seperti meneliti peta cetak biru bangunan sekolah di papan pengumuman untuk mencari pintu belakang gudang yang lupa dikunci oleh penjaga.

### Lab 2: Menemukan Admin Portal dengan URL Rahasia Melalui Script Source Code
*   **Target Lab:** [Unprotected admin functionality with unpredictable URL](https://portswigger.net/web-security/access-control/lab-unprotected-admin-functionality-with-unpredictable-url)
*   **Fokus Burp Suite:** **Target -> Site Map (HTML & JS Analysis)**
*   **Tujuan:** Buka lab di atas. Akses situs tersebut, lalu buka tab **Site Map** di Burp. Klik kanan pada request beranda ➔ pilih **Engagement tools** ➔ **Find references** (atau telusuri kode HTML di respon halaman utama). Temukan fungsi JavaScript tersembunyi yang membocorkan path URL panel admin rahasia. Akses URL tersebut dan hapus user `carlos` untuk menyelesaikan lab.
*   **💡 Analogi IT:** Seperti membaca buku harian pemilik rumah untuk menemukan instruksi tersembunyi tentang letak kunci brankas yang disembunyikan di bawah pot bunga.

---

## 📽️ Video Pendukung untuk Hari 2
*   **[TryHackMe Burp Suite: The Basics | Full Walkthrough 2026](https://www.youtube.com/watch?v=98PpFYJv0L0)** (Bagian penjelasan fitur Target Tab, Site Map, dan cara melakukan scoping secara detail).
*   **[How to Use Burp Suite Like a PRO (Beginner Friendly)](https://www.youtube.com/watch?v=GxvFqgCBW-8)** (Tips navigasi antarmuka untuk pemula agar tidak bingung melihat banyaknya tab).
