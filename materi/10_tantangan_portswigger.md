# Hari 10: Tantangan Final PortSwigger Academy 🏆

Selamat! Anda telah sampai di hari terakhir dari jalur belajar mandiri Spesialis Burp Suite ini. Untuk membuktikan kelayakan Anda sebagai calon *Pentester* atau *Bug Hunter*, hari ini fokus Anda adalah menyelesaikan **5 Laboratorium Kelulusan** langsung di platform cloud **PortSwigger Web Security Academy**.

Seluruh tantangan di bawah ini menggunakan kerentanan yang **telah Anda pelajari secara teori maupun praktik pada hari-hari sebelumnya**, sehingga Anda dapat mengerjakannya dengan percaya diri menggunakan Burp Suite!

Tidak ada kuis pilihan ganda atau pengisian token di dashboard ini—seluruh bukti kelulusan Anda akan divalidasi langsung oleh sistem PortSwigger di browser Anda ketika status lab berubah menjadi **"Congratulations, you solved the lab!"**.

---

## 🎯 5 Lab Tantangan Final Kelulusan

Gunakan semua pengetahuan yang telah dipelajari sejak Hari 1 hingga Hari 9 (termasuk teknik Proxy, Repeater, Intruder, dan kolaborasi analisis dengan AI) untuk memecahkan tantangan di bawah ini:

### 1. SQL Injection: Login Bypass (Bypass Autentikasi)
*   *Telah dipelajari di:* **Hari 3 (Lab 1)**
*   **Target Lab:** [SQL injection vulnerability allowing login bypass](https://portswigger.net/web-security/sql-injection/lab-login-bypass)
*   **Fokus Burp Suite:** **Burp Proxy (Intercept) atau HTTP History**
*   **Tujuan:** Intercept request login, lalu masukkan payload SQL Injection `' OR 1=1 --` ke parameter username untuk masuk sebagai administrator tanpa kata sandi.
*   **💡 Analogi IT:** Seperti menggunakan trik pintu rahasia untuk menyelinap masuk dan memaksa pintu tetap terbuka secara permanen dengan mengganjal engselnya.

---

### 2. Reflected Cross-Site Scripting (Reflected XSS)
*   *Telah dipelajari di:* **Hari 7**
*   **Target Lab:** [Reflected XSS into HTML context with nothing encoded](https://portswigger.net/web-security/cross-site-scripting/reflected/lab-html-context-nothing-encoded)
*   **Fokus Burp Suite:** **Burp Proxy (Intercept) atau HTTP History**
*   **Tujuan:** Gunakan kolom pencarian blog target untuk menyuntikkan kode JavaScript dasar `<script>alert(1)</script>` agar memicu jendela pop-up dialog di browser Anda.
*   **💡 Analogi IT:** Seperti memantulkan sinar laser ke cermin bersih; jika tidak ada penyaring laser, cahaya laser tersebut akan memantul kembali dan mengenai mata Anda secara langsung.

---

### 3. Directory Traversal (Mengintip File Sistem Server)
*   *Telah dipelajari di:* **Hari 4**
*   **Target Lab:** [File path traversal, simple case](https://portswigger.net/web-security/file-path-traversal/lab-simple)
*   **Fokus Burp Suite:** **Burp Repeater**
*   **Tujuan:** Ubah parameter pemuatan gambar pada request HTTP (misal parameter `?filename=close.png`) menggunakan Repeater menjadi `../../../etc/passwd` untuk melewati pembatasan folder dan membaca file konfigurasi sensitif server Linux.
*   **💡 Analogi IT:** Seperti menipu resepsionis hotel dengan memutar kunci indeks buku tamu agar bisa membuka berkas arsip rahasia di lemari belakang kantor mereka.

---

### 4. File Upload Remote Code Execution (RCE via Web Shell)
*   *Telah dipelajari di:* **Hari 7**
*   **Target Lab:** [File upload remote code execution via web shell upload](https://portswigger.net/web-security/file-upload/lab-file-upload-remote-code-execution-via-web-shell-upload)
*   **Fokus Burp Suite:** **Burp Proxy & Repeater**
*   **Tujuan:** Unggah file PHP (`exploit.php`) berisi kode pembaca file (`<?php echo file_get_contents('/home/carlos/secret'); ?>`) sebagai avatar profil Anda. Akses lokasi file avatar tersebut untuk memicu eksekusi kode di server dan mencuri token rahasia Carlos.
*   **💡 Analogi IT:** Seperti menyamar sebagai pengantar paket foto keluarga, tetapi di dalam kotak foto tersebut Anda menyembunyikan remote kontrol pembuka brankas kantor yang akan langsung diaktifkan begitu ditaruh di meja resepsionis.

---

### 5. Broken Authentication (Enumerasi Username & Brute Force)
*   *Telah dipelajari di:* **Hari 5**
*   **Target Lab:** [Username enumeration via different responses](https://portswigger.net/web-security/authentication/password-based/lab-username-enumeration-via-different-responses)
*   **Fokus Burp Suite:** **Burp Intruder (Sniper Attack)**
*   **Tujuan:** Gunakan Intruder untuk mengirimkan ribuan tebakan username dari wordlist. Amati perbedaan halus respon server (misalnya pesan kesalahan yang sedikit berbeda). Setelah menemukan username yang valid, lakukan tebakan password (*Brute Force*) pada username tersebut untuk masuk sebagai korban.
*   **💡 Analogi IT:** Seperti mengetuk pintu rumah-rumah di kompleks sambil memanggil nama-nama berbeda. Jika ada sahutan *"Ya, saya di dalam!"*, Anda telah mengonfirmasi bahwa orang tersebut tinggal di sana, lalu tinggal berfokus mencari kunci yang pas untuk pintu rumahnya.

---

## 🏆 Langkah Akhir Kelulusan

Jika Anda berhasil menyelesaikan seluruh lab di atas, Anda secara resmi telah menguasai dasar-dasar pengujian keamanan aplikasi web (*Web Pentesting*) menggunakan Burp Suite!

Berikut adalah saran untuk langkah pengembangan karir Anda selanjutnya:
1.  **Lanjutkan Lab Tingkat Practitioner:** Cari topik kerentanan baru di PortSwigger Academy seperti **CSRF**, **SSRF**, dan **CORS Vulnerabilities**.
2.  **Siapkan Sertifikasi:** Jika Anda berniat berkarir profesional, belajarlah untuk mengambil sertifikasi seperti **eJPT (Junior Penetration Tester)** atau **OSWA (Offensive Security Web Assessor)**.
3.  **Tulis Write-up:** Buat rangkuman cara Anda menyelesaikan lab-lab ini dan unggah di blog pribadi atau GitHub sebagai portofolio keahlian Anda untuk melamar pekerjaan.

Selamat atas ketekunan Anda selama 10 hari ini! Jaga selalu etika keamanan siber Anda (*White Hat Hacker*), dan mari melangkah ke tingkat yang lebih tinggi! 🛡️🚀
