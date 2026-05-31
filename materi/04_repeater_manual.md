# Hari 4: Burp Repeater - Analisis Manual ⚡

Menangkap dan memodifikasi data langsung via proxy intercept sangat berguna, namun tidak nyaman jika Anda harus mencoba puluhan kode jahat (*payload*) secara bergantian. Browser Anda akan kelelahan karena harus merefresh halaman berulang-ulang.

Di sinilah **Burp Repeater** menjadi pahlawan.

---

## ⚡ 1. Apa itu Burp Repeater?
**Burp Repeater** adalah alat untuk mengirimkan ulang request HTTP tunggal yang sama berkali-kali secara manual. Kita bisa mengubah teks, parameter, atau header di sisi kiri, mengklik "Send", dan melihat respon dari server secara instan di sisi kanan tanpa harus memuat ulang halaman di browser.

> [!NOTE]
> **Analogi Burp Repeater:**
> Bayangkan Anda sedang mencoba kunci-kunci duplikat di sebuah pintu gembok rahasia. 
> *   Jika pakai **Proxy Intercept**, setiap kali mencoba satu kunci, Anda harus memanggil kurir browser untuk berjalan dari rumah ke gembok target.
> *   Jika pakai **Repeater**, Anda seolah membawa gembok tersebut ke laboratorium Anda sendiri. Anda bisa mencobakan berbagai kunci langsung di tempat dengan sangat cepat dalam hitungan milidetik.

---

## 💉 2. Apa itu SQL Injection Login Bypass?
**SQL Injection (SQLi)** adalah kerentanan keamanan web di mana penyerang dapat menyusupkan perintah database SQL jahat ke dalam input aplikasi web.
*   **Login Bypass:** Celah keamanan SQLi pada formulir masuk (login) yang memungkinkan penyerang masuk sebagai administrator tanpa mengetahui kata sandi aslinya.

Contoh query SQL di server web:
```sql
SELECT * FROM users WHERE username = '$username' AND password = '$password';
```
Jika kita menginputkan `admin' OR 1=1 --` ke kolom username, query-nya berubah menjadi:
```sql
SELECT * FROM users WHERE username = 'admin' OR 1=1 --' AND password = '$password';
```
*(Penjelasan IT: Karakter `--` dalam SQL adalah penanda **Komentar**. Segala hal yang ditulis setelah `--` akan diabaikan oleh database. Karena `1=1` selalu bernilai **Benar (True)**, database akan langsung mengizinkan kita login sebagai admin tanpa peduli apa pun kata sandinya).*

---

## 🚀 3. Praktik Penggunaan Burp Repeater (PortSwigger Academy)
Repeater adalah alat terbaik untuk bereksperimen dengan request HTTP secara manual. Silakan tuntaskan 3 lab berikut:

### Lab 1: Pencurian API Key Melalui IDOR (Parameter Manipulation)
*   **Target Lab:** [User ID controlled by request parameter](https://portswigger.net/web-security/access-control/lab-user-id-controlled-by-request-parameter)
*   **Fokus Burp Suite:** **Proxy -> HTTP History -> Send to Repeater**
*   **Tujuan:**
    1. Login dengan akun Anda `wiener:peter`.
    2. Pergi ke **My Account**, perhatikan parameter URL: `?id=wiener`.
    3. Cari request GET `/my-account?id=wiener` di **HTTP History**, klik kanan dan pilih **Send to Repeater** (atau tekan `Ctrl + R`).
    4. Buka tab **Repeater**, ubah parameter request di panel kiri menjadi `?id=carlos`.
    5. Klik **Send**, lalu temukan `API key` milik Carlos di panel respon sebelah kanan.
    6. Salin API Key tersebut dan submit di halaman lab PortSwigger Anda untuk menyelesaikannya!
*   **💡 Analogi IT:** Seperti menaruh nomor antrean palsu saat mengambil paket di loket kantor pos. Karena petugas tidak memverifikasi KTP, Anda berhasil mengambil paket milik orang lain (carlos).

### Lab 2: Directory Traversal (Membaca File Sensitif di Server)
*   **Target Lab:** [File path traversal, simple case](https://portswigger.net/web-security/file-path-traversal/lab-simple)
*   **Fokus Burp Suite:** **Repeater (GET Parameter Modification)**
*   **Tujuan:** Akses lab, klik salah satu produk untuk memuat gambarnya. Di Burp HTTP History, cari request pemuatan gambar `/image?filename=2.jpg`. Kirim ke **Repeater**. Ubah parameter `filename` menjadi `../../../etc/passwd`. Klik **Send** dan lihat respon berisi daftar akun sistem Linux di server target.
*   **💡 Analogi IT:** Seperti menggunakan lift darurat gedung untuk turun melewati lantai lobi utama langsung ke ruang arsip bawah tanah tanpa melalui meja keamanan.

### Lab 3: Eksploitasi IDOR untuk Mencuri Password Admin (Password Disclosure)
*   **Target Lab:** [User ID controlled by request parameter with password disclosure](https://portswigger.net/web-security/access-control/lab-user-id-controlled-by-request-parameter-with-password-disclosure)
*   **Fokus Burp Suite:** **Repeater (GET Request Modification)**
*   **Tujuan:** Login dengan akun `wiener:peter`. Pergi ke halaman **My Account**, perhatikan parameter URL: `?id=wiener`. Kirim request tersebut ke Repeater. Ubah `id` menjadi `administrator`. Klik **Send**. Periksa respon HTML untuk menemukan kata sandi administrator yang terisi otomatis pada form input password. Salin kata sandi tersebut, log keluar, lalu login kembali sebagai `administrator` untuk masuk ke panel admin dan menghapus `carlos`.
*   **💡 Analogi IT:** Seperti meminta resepsionis menyerahkan surat kunci duplikat kamar admin hanya dengan menyebutkan nama "administrator" tanpa perlu menunjukkan KTP atau bukti identitas lainnya.

---

## 📽️ Video Pendukung untuk Hari 4
*   **[Burp Suite Full Course for Beginners | Web Hacking & Bug Bounty 2026](https://www.youtube.com/watch?v=MhxP72H4h3g)** (Penjelasan detail penggunaan Repeater untuk menguji celah kerentanan manual).
*   **[Burp Suite Tutorials (oleh HackerSploit)](https://www.youtube.com/playlist?list=PLBf0hzazHTGP2L7AoWTIhggUsDdNZhfBl)** (Fokus pada bagaimana Repeater membantu alur kerja penetration testing).
