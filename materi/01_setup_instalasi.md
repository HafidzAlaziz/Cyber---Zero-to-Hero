# Hari 1: Setup & Instalasi Burp Suite 🛠️

Hari pertama kita akan fokus membangun fondasi. Sebelum kita mulai meretas atau menyadap data, kita perlu menginstal perangkat tempur kita dan memastikan browser kita bisa berkomunikasi dengannya.

---

## 🏛️ 1. Apa itu Burp Suite?
**Burp Suite** adalah sebuah *framework* (kumpulan alat) yang digunakan oleh profesional keamanan informasi (*Cyber Security*) untuk menguji keamanan aplikasi web.

> [!NOTE]
> **Analogi Intercepting Proxy:**
> Bayangkan browser Anda mengirim surat pos ke server target. Biasanya, surat dikirim langsung ke kotak pos server.
> Dengan menyetel **Burp Suite** sebagai **Proxy (Perantara)**, surat pos browser Anda tidak langsung dikirim ke server. Surat itu akan mampir dulu ke meja kantor pos pribadi Anda (yaitu Burp Suite). 
> Di sana, Anda bisa membuka amplopnya, membaca isinya, mengganti isi suratnya, atau bahkan membuang surat tersebut sebelum dikirimkan ke server web target.

---

## 🛠️ 2. Langkah Instalasi Burp Suite di Linux
Jika Anda menggunakan Linux (seperti Fedora/Ubuntu/Debian), kita akan menggunakan installer grafis resmi:
1.  Buka browser Anda dan unduh **Burp Suite Community Edition** (versi gratis) untuk Linux dari situs resmi PortSwigger.
2.  Buka terminal Linux Anda dan masuk ke direktori unduhan (biasanya `~/Downloads`).
3.  Berikan izin eksekusi (*Executable Permission*) agar file instalasi `.sh` bisa dijalankan dengan perintah:
    ```bash
    chmod +x burpsuite_community_linux_*.sh
    ```
    *(Penjelasan: `chmod +x` berarti mengubah status file menjadi file yang bisa dieksekusi/dijalankan oleh sistem).*
4.  Jalankan installer tersebut:
    ```bash
    ./burpsuite_community_linux_*.sh
    ```
5.  Ikuti petunjuk di layar (klik Next) sampai selesai. Burp Suite sekarang sudah terinstal di sistem Anda!

---

## 🌐 3. Konfigurasi FoxyProxy di Firefox
FoxyProxy adalah ekstensi (*add-on*) Firefox yang memudahkan kita mengalihkan lalu lintas internet ke Burp Suite dengan sekali klik.

1.  Buka Firefox, cari dan pasang ekstensi **FoxyProxy Standard**.
2.  Buka setelan FoxyProxy, lalu tambahkan konfigurasi proxy baru:
    *   **Title/Nama:** Burp Proxy
    *   **Proxy Type:** HTTP
    *   **IP Address / Hostname:** `127.0.0.1` *(Penjelasan: IP ini adalah IP Loopback, yang berarti merujuk ke laptop Anda sendiri).*
    *   **Port:** `8080` *(Penjelasan: Port adalah gerbang komunikasi virtual. Burp Suite secara default menggunakan port 8080).*
3.  Klik Simpan. Sekarang Anda bisa mengaktifkan proxy ini melalui ikon FoxyProxy di pojok kanan atas Firefox.

---

## 🛡️ 4. Menginstal CA Certificate (Sertifikat HTTPS)
Ketika Anda membuka situs yang menggunakan HTTPS (misalnya `google.com`), browser akan menguji apakah koneksinya aman menggunakan sertifikat digital. Karena Burp Suite menyadap koneksi ini di tengah jalan, browser Firefox akan mendeteksi aktivitas ini sebagai serangan dan memblokirnya. Kita harus mengajari Firefox untuk mempercayai Burp Suite.

1.  Pastikan Burp Suite menyala.
2.  Aktifkan proxy FoxyProxy Anda ke pilihan **"Burp Proxy"**.
3.  Di Firefox, akses alamat: `http://burp`
4.  Klik tombol **CA Certificate** di pojok kanan atas halaman tersebut untuk mengunduh berkas sertifikat bernama `cacert.der`.
5.  Buka setelan Firefox (Settings), cari bagian **Certificates** ➔ klik tombol **View Certificates**.
6.  Pilih tab **Authorities**, lalu klik **Import**.
7.  Pilih berkas `cacert.der` yang baru saja Anda unduh.
8.  Centang opsi **"Trust this CA to identify websites"** (Percayai sertifikat ini untuk mengidentifikasi situs web) dan klik **OK**.
9.  Matikan FoxyProxy ke mode "Turn Off".

Selamat! Sekarang laptop Anda telah siap sepenuhnya untuk menyadap lalu lintas HTTP maupun HTTPS tanpa ada peringatan keamanan yang mengganggu.

---

## 🚀 5. Praktik Validasi Setup (PortSwigger Academy)
Agar pembelajaran hari pertama tidak garing dan memastikan instalasi Anda 100% sukses, silakan selesaikan 2 aktivitas praktik berikut:

### Lab 1: Registrasi Akun Web Security Academy
*   **Tautan Resmi:** [Daftar Akun PortSwigger Academy](https://portswigger.net/web-security)
*   **Tujuan:** Daftarkan akun gratis menggunakan email Anda. Akun ini akan digunakan sebagai laboratorium praktis kita sepanjang sisa kurikulum. Setelah mendaftar, jelajahi halaman utama akademi mereka.
*   **💡 Analogi IT:** Seperti membuat kartu anggota perpustakaan digital agar Anda diberikan izin masuk untuk meminjam buku dan masuk ke laboratorium penelitian.

### Lab 2: Pengujian Intersepsi HTTPS (HTTP History Verification)
*   **Target Pengujian:** [PortSwigger Academy Homepage](https://portswigger.net/web-security)
*   **Tujuan:**
    1. Aktifkan **Burp Proxy** pada ekstensi FoxyProxy browser Firefox Anda.
    2. Buka tautan beranda PortSwigger Academy di atas.
    3. Jika halaman web dapat terbuka dengan lancar tanpa ada peringatan error keamanan SSL (*Security Warning* / tanda silang merah) di Firefox, selamat! CA Certificate Anda sudah terpasang dengan benar.
    4. Buka aplikasi Burp Suite Anda, lalu periksa tab **Proxy ➔ HTTP History**. Pastikan ada log lalu lintas data ke domain `portswigger.net`.
    5. Jika log tersebut muncul, berarti browser Firefox dan Burp Suite Anda telah terhubung secara sempurna dan siap digunakan untuk meretas di hari berikutnya. Hari ini **tidak ada eksploitasi** yang perlu dilakukan.
*   **💡 Analogi IT:** Seperti menyalakan radio HT baru dan memutar tombol frekuensi untuk mendengarkan siaran radio umum guna memastikan speaker dan antena Anda berfungsi dengan baik sebelum digunakan untuk berkomunikasi secara aktif.

---

## 📽️ Video Pendukung untuk Hari 1
*   **[Burp Suite Full Tutorial with Practical in 2 Hours (For Beginners) - 2025](https://www.youtube.com/watch?v=GxvFqgCBW-8)** (Menit 0:00 - 15:00: Cara setup proxy dan instalasi sertifikat CA).
*   **[TryHackMe Burp Suite: The Basics | Full Walkthrough 2026](https://www.youtube.com/watch?v=98PpFYJv0L0)** (Bagian instalasi FoxyProxy dan CA Certificate).
