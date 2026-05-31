# Hari 7: Praktik PortSwigger Academy 🏛️

Hari ini kita akan berkenalan dengan standar emas pelatihan keamanan web global: **PortSwigger Web Security Academy**.

---

## 🏛️ 1. Apa itu PortSwigger Web Security Academy?
**PortSwigger** adalah perusahaan di balik **Burp Suite**. Mereka menyediakan **Web Security Academy** secara **100% gratis** untuk siapa saja yang ingin belajar keamanan web secara profesional. 

Latihan di PortSwigger sangat istimewa karena mereka mensimulasikan celah keamanan yang ada di dunia nyata, lengkap dengan penjelasan teori yang sangat mendalam dan terstruktur.

---

## 🚀 2. Cara Memulai Latihan
1.  Buka browser dan daftarkan akun gratis di: [https://portswigger.net/web-security](https://portswigger.net/web-security)
2.  Setelah terdaftar, klik menu **Academy** ➔ **Learning Paths**.
3.  Pilih salah satu topik pembelajaran, misalnya **SQL Injection** atau **Cross-Site Scripting (XSS)**.
4.  Di dalam topik tersebut, Anda akan menemukan materi penjelasan teori diikuti tombol **Access the lab** untuk membuka lingkungan pengujian praktis di server cloud mereka.

---

## 🚀 3. Tiga Laboratorium Praktik Wajib Hari Ini
Berikut adalah 3 lab interaktif tingkat Apprentice & Practitioner yang harus Anda selesaikan menggunakan Burp Suite hari ini:

### Lab 1: File Upload Remote Code Execution (RCE via Web Shell)
*   **Target Lab:** [File upload remote code execution via web shell upload](https://portswigger.net/web-security/file-upload/lab-file-upload-remote-code-execution-via-web-shell-upload)
*   **Fokus Burp Suite:** **Burp Proxy (HTTP Upload intercept) & Repeater**
*   **Tujuan:**
    1. Hubungkan Firefox ke Burp Proxy.
    2. Masuk ke lab dengan kredensial: `wiener:peter`.
    3. Buat file lokal di komputer Anda bernama `exploit.php` yang berisi script berikut untuk membaca data rahasia Carlos di server:
       ```php
       <?php echo file_get_contents('/home/carlos/secret'); ?>
       ```
    4. Unggah berkas `exploit.php` tersebut sebagai avatar profil Anda.
    5. Setelah terunggah, buka profil Anda, klik kanan avatar Anda ➔ **Inspect Element** (atau amati request di HTTP History) untuk mencari URL avatarnya (misal: `/files/avatars/exploit.php`).
    6. Akses URL tersebut di browser. Server akan mengeksekusi PHP tersebut dan menampilkan 32 karakter rahasia milik Carlos.
    7. Salin kode tersebut, klik **Submit Solution** di bagian atas halaman lab PortSwigger, dan klik OK untuk menyelesaikan lab.
*   **💡 Analogi IT:** Seperti menyamar sebagai pengantar paket foto keluarga, tetapi di dalam kotak foto tersebut Anda menyembunyikan remote kontrol pembuka brankas kantor yang akan langsung diaktifkan begitu ditaruh di meja resepsionis.

### Lab 2: Reflected XSS (Penyuntikan Script Melalui Kolom Pencarian)
*   **Target Lab:** [Reflected XSS into HTML context with nothing encoded](https://portswigger.net/web-security/cross-site-scripting/reflected/lab-html-context-nothing-encoded)
*   **Fokus Burp Suite:** **Proxy -> HTTP History**
*   **Tujuan:** Buka lab di atas. Pada kolom pencarian blog, masukkan payload JavaScript: `<script>alert(document.domain)</script>`. Kirim pencarian tersebut. Halaman respon web akan memantulkan input Anda mentah-mentah ke layar browser sehingga browser mengeksekusinya sebagai perintah kode pemrograman JS nyata dan menampilkan pop-up dialog.
*   **💡 Analogi IT:** Seperti berteriak *"Bakar!"* di ruang gema. Karena tidak ada penyaring suara, gema teriakan Anda memantul kembali ke seluruh ruangan dan membuat panik seisi gedung.

### Lab 3: DOM-Based XSS (Kerentanan Manipulasi Struktur Halaman Browser)
*   **Target Lab:** [DOM XSS in document.write sink using source location.search](https://portswigger.net/web-security/cross-site-scripting/dom-based/lab-document-write-sink)
*   **Fokus Burp Suite:** **Target -> Site Map (JS Analysis) & Repeater**
*   **Tujuan:** Buka lab di atas. Lakukan pencarian kata sembarang. Gunakan Repeater untuk menganalisis respon JavaScript halaman utama. Anda akan melihat script yang membaca parameter URL pencarian Anda menggunakan `window.location.search` dan langsung menuliskannya ke halaman menggunakan `document.write` tanpa sensor. Masukkan payload pencarian: `"><svg onload=alert(1)>` untuk memecah tag HTML aslinya dan memicu eksekusi JavaScript DOM.
*   **💡 Analogi IT:** Seperti memalsukan tulisan stiker tanda terima pada mesin printer otomatis resepsionis, sehingga saat mesin mencetak stiker tersebut, jarum printer menusuk kabel listrik di belakangnya dan memicu korsleting listrik (alert error).

---

## 📽️ Video Pendukung untuk Hari 7
*   **[Burp Suite Tutorial for Beginners | Complete Guide 2025 (Playlist)](https://www.youtube.com/playlist?list=PL6FTq_v8hDb2mXzeLoXZcWGEa7DvYkSSb)** (Gunakan daftar putar ini untuk melihat penyelesaian berbagai lab di PortSwigger Academy langkah-demi-langkah menggunakan Burp Suite).
