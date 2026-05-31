# Hari 3: HTTP Proxy & Interception ✉️

Hari ini kita akan masuk ke praktik sesungguhnya menggunakan fitur inti Burp Suite: **Proxy Interception**. Kita akan menyadap surat HTTP dari browser, mengubah isinya secara ilegal (tampering), lalu meneruskannya ke server.

---

## 🛑 1. Cara Kerja Intercept (On vs Off)
Buka tab **Proxy ➔ Intercept**. Di sana Anda akan melihat tombol besar bertuliskan **Intercept is on** atau **Intercept is off**.

*   **Intercept is OFF:** Semua data mengalir bebas dari browser ke server tanpa hambatan. Burp Suite hanya mencatatnya secara pasif di tab *HTTP History*.
*   **Intercept is ON:** Setiap kali browser mengirimkan request baru (misalnya mengklik tombol kirim form), request tersebut akan ditangkap oleh Burp Suite dan **ditahan di tengah jalan**. Browser Anda akan terlihat *loading* terus-menerus menunggu balasan.

Saat request ditahan, Anda memiliki tiga tombol kontrol utama:
1.  **Forward:** Mengirimkan surat/request yang sedang ditahan (baik yang sudah diubah maupun tidak) ke server target.
2.  **Drop:** Membuang request tersebut. Server tidak akan pernah menerima request tersebut, dan browser akan menampilkan halaman kosong.
3.  **Action:** Menu untuk mengirim request ke alat lain (seperti Repeater atau Intruder).

---

## 🍪 2. Modifikasi Data On-the-Fly (Cookie Tampering)
*Tampering* adalah istilah IT untuk memodifikasi data secara tidak sah sebelum dikirim. Salah satu target modifikasi paling umum bagi peretas pemula adalah **Cookie**.

> [!NOTE]
> **Mengapa Cookie dimodifikasi?**
> Situs web sering kali menyimpan status otorisasi pengguna di dalam cookie browser (misalnya variabel `role=guest`). Jika situs web tersebut malas melakukan validasi ulang di sisi server (*Server-Side Validation*), peretas bisa mengubah nilai cookie tersebut menjadi `role=admin` agar dianggap sebagai administrator secara instan!

---

## 🚀 3. Praktik Penggunaan Burp Proxy (PortSwigger Academy)
Untuk memperdalam keahlian menyadap dan mengubah data dengan Burp Proxy, silakan coba selesaikan 3 lab praktis berikut:

### Lab 1: SQL Injection Login Bypass (Menggunakan Intercept)
*   **Target Lab:** [SQL injection vulnerability allowing login bypass](https://portswigger.net/web-security/sql-injection/lab-login-bypass)
*   **Fokus Burp Suite:** **Proxy -> Intercept**
*   **Tujuan:**
    1. Pastikan FoxyProxy Firefox aktif ke **Burp Proxy**.
    2. Buka lab di atas, klik **Access the lab**.
    3. Di Burp Suite, buka tab **Proxy ➔ Intercept** dan pastikan **Intercept is ON**.
    4. Di browser lab, klik **My Account**. Ketik username: `administrator' --` dan password asal: `123`. Klik **Log in**.
    5. Di Burp Suite, Anda akan melihat request data POST tertahan. Klik **Forward** sekali untuk melepas request tersebut.
    6. Matikan intercept menjadi **Intercept is OFF**.
    7. Perhatikan browser Anda! Banner hijau **"Congratulations, you solved the lab!"** akan muncul mengonfirmasi kelulusan karena Anda berhasil masuk sebagai admin.
*   **💡 Analogi IT:** Seperti menulis nama palsu di buku tamu kantor, namun menambahkan instruksi ke mesin pembaca kartu untuk langsung menyetujui kartu Anda tanpa mengecek sidik jari.

### Lab 2: Manipulasi Role Pengguna di Profil (JSON Body Tampering)
*   **Target Lab:** [User role can be modified in user profile](https://portswigger.net/web-security/access-control/lab-user-role-can-be-modified-in-user-profile)
*   **Fokus Burp Suite:** **Proxy -> Intercept**
*   **Tujuan:** Login dengan akun Anda `wiener:peter`. Pergi ke halaman profil, ganti email Anda, dan klik Update. Sebelum request terkirim ke server, tahan di Burp Intercept. Ubah variabel JSON `"roleid": 1` atau `"role": "admin"`. Klik Forward, dan Anda akan mendapatkan akses ke panel admin untuk menghapus user `carlos`.
*   **💡 Analogi IT:** Seperti membawa formulir pendaftaran kerja ke meja belakang, lalu mengganti tulisan posisi dari "Staff" menjadi "Manager" sebelum diserahkan ke ruang personalia.

### Lab 3: Bypass URL-Based Access Control (Menggunakan Custom Header)
*   **Target Lab:** [URL-based access control can be circumvented](https://portswigger.net/web-security/access-control/lab-url-based-access-control-can-be-circumvented)
*   **Fokus Burp Suite:** **Proxy -> Intercept (Custom Header Injection)**
*   **Tujuan:**
    1. Aktifkan Burp Proxy. Kunjungi halaman `/admin` pada lab. Anda akan melihat pesan "Access denied" dari sistem WAF.
    2. Buka tab **Proxy ➔ Intercept** dan pastikan **Intercept is ON**.
    3. Segarkan (refresh) halaman utama `/` di browser Anda.
    4. Di Burp Suite, pada request yang tertahan, tambahkan header baru di baris baru: `X-Original-URL: /admin/delete`
    5. Ubah URL request GET di baris pertama menjadi `/` jika berubah, dan tambahkan parameter query `?username=carlos` di browser (atau ganti request menjadi `/admin/delete?username=carlos` via `X-Original-URL`). Klik **Forward**.
    6. Anda akan melihat user `carlos` berhasil terhapus karena WAF depan hanya memeriksa URL utama `/` sedangkan aplikasi backend memproses routing dari header `X-Original-URL`.
*   **💡 Analogi IT:** Seperti menggunakan stiker tanda pengenal palsu yang ditempel di amplop surat resmi. Petugas keamanan di gerbang depan hanya memeriksa amplop luarnya saja, sementara manajer di kantor dalam langsung menyetujui surat tersebut sesuai stiker di dalamnya.

---

## 📽️ Video Pendukung untuk Hari 3
*   **[Day 6 | Burp Suite Full Course with AI (Beginner to Pro) 2026](https://www.youtube.com/watch?v=FzFdBHAtTl4)** (Penjelasan langkah intercept HTTP, memodifikasi header, dan kesalahan umum yang sering dialami pemula).
*   **[Burp Suite Tutorials (oleh HackerSploit)](https://www.youtube.com/playlist?list=PLBf0hzazHTGP2L7AoWTIhggUsDdNZhfBl)** (Fokus pada dasar-dasar proxy interception dan penjelasannya).
