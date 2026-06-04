# Hari 6: Walkthrough Lab TryHackMe 🌐

Hari ini kita akan melangkah keluar dari lab lokal komputer kita dan berlatih di platform keamanan siber global terpopuler: **TryHackMe**.

---

## 🏛️ 1. Apa itu TryHackMe?
**TryHackMe** adalah platform pembelajaran keamanan siber berbasis web yang menyediakan ratusan ruangan (*rooms*) latihan interaktif secara gratis maupun berbayar. Di sana, Anda bisa meretas mesin virtual (*Virtual Machine*) nyata secara legal dari browser atau menggunakan VPN.

---

## 🛠️ 2. Langkah Menghubungkan Linux/OS Anda ke TryHackMe (OpenVPN / AttackBox)

### 💡 Mengapa Kita Membutuhkan OpenVPN?
Mesin target (lab) yang Anda jalankan di TryHackMe berada di jaringan internal (*private network*) mereka (IP biasanya diawali `10.10.x.x`). Komputer Anda di rumah tidak bisa mengakses IP privat ini secara langsung melalui internet publik. 

**OpenVPN** berguna untuk membuat terowongan aman (*VPN Tunnel*) yang menghubungkan komputer lokal Anda langsung ke dalam jaringan internal TryHackMe. Setelah terhubung, komputer Anda akan mendapatkan IP internal (biasanya `10.50.x.x`) sehingga Anda bisa memindai, memproksi, dan meretas mesin target tersebut seolah-olah Anda berada di satu jaringan lokal yang sama.

---

### Opsi A: Menggunakan OpenVPN di Komputer Lokal (Linux)

1.  Daftar akun gratis di [https://tryhackme.com](https://tryhackme.com).
2.  Setelah login, akses menu **Access** melalui URL langsung [https://tryhackme.com/access](https://tryhackme.com/access) (atau klik ikon profil di pojok kanan atas ➔ pilih **Access**).
3.  Pilih server region terdekat (misal: **Singapore** / **SG-VIP** jika Anda berlangganan premium) dan klik **Download My Configuration File** untuk mengunduh berkas koneksi Anda yang berformat `.ovpn` (contoh nama file: `username.ovpn` atau `username-singapore.ovpn`).
4.  Buka terminal Linux Anda dan instal aplikasi OpenVPN jika belum terpasang:
    *   **Untuk Ubuntu / Debian / Kali Linux** (paling umum digunakan):
        ```bash
        sudo apt update && sudo apt install openvpn -y
        ```
    *   **Untuk Fedora / RHEL**:
        ```bash
        sudo dnf install openvpn -y
        ```
5.  Masuk ke direktori tempat Anda mengunduh file VPN tersebut (biasanya di folder `Downloads`):
    ```bash
    cd ~/Downloads
    ```
6.  Jalankan koneksi VPN menggunakan file `.ovpn` yang diunduh (ganti `nama_file.ovpn` dengan nama file konfigurasi Anda sendiri):
    ```bash
    sudo openvpn nama_file.ovpn
    ```
    *(Penjelasan: Biarkan terminal ini tetap terbuka di latar belakang selama Anda belajar. Jika muncul baris tulisan `Initialization Sequence Completed`, berarti Anda telah sukses terhubung ke jaringan TryHackMe. Untuk memutuskan koneksi, cukup tekan `Ctrl + C` di terminal tersebut).*

---

### Opsi B: Menggunakan AttackBox Bawaan (Tanpa Setup VPN)
Jika Anda tidak ingin menginstal OpenVPN atau mengalami kendala koneksi di komputer lokal, TryHackMe menyediakan **AttackBox**:
*   AttackBox adalah mesin virtual berbasis web yang berjalan langsung di cloud TryHackMe.
*   Mesin ini sudah terhubung otomatis ke jaringan internal target dan dilengkapi dengan seluruh alat pentesting (termasuk Burp Suite, FoxyProxy, Nmap, dll).
*   **Cara Menggunakan:** Klik tombol **"Start AttackBox"** berwarna biru di bagian atas halaman room TryHackMe. Layar mesin virtual akan muncul langsung di browser Anda.

---

## 🔍 3. Cara Verifikasi & Menggunakan Koneksi VPN/AttackBox

Sebelum melompat ke tantangan room, pastikan koneksi Anda benar-benar terhubung dan ketahui cara memakainya dengan mengikuti langkah-langkah di bawah ini:

### Langkah 1: Verifikasi Status di TryHackMe
1. Buka kembali halaman **Access** ([tryhackme.com/access](https://tryhackme.com/access)).
2. Refresh halaman tersebut. Jika koneksi VPN berhasil, Anda akan melihat **tanda centang hijau (Connected)** di sebelah nama server region, lengkap dengan alamat IP VPN Anda (misalnya `10.50.x.x`).

### Langkah 2: Menyalakan Mesin Target di Room
1. Buka salah satu room latihan (misal: [Burp Suite: Basics](https://tryhackme.com/room/burpsuitebasics)).
2. Di dalam room, cari task yang membutuhkan praktik (misal **Task 10** atau **Task 14**).
3. Klik tombol **Start Machine** (biasanya berwarna merah atau biru).
4. Tunggu 1 hingga 2 menit agar server internal TryHackMe melakukan *booting*. Setelah menyala, TryHackMe akan menampilkan **IP Target** (misalnya `10.10.231.104`) di bagian atas halaman room.

### Langkah 3: Tes Koneksi Komputer ke Mesin Target
1. Buka **terminal baru** di komputer Anda (jangan menutup terminal tempat OpenVPN sedang berjalan).
2. Lakukan uji *ping* ke IP Target untuk memastikan komputer Anda bisa berkomunikasi dengan server target lewat VPN:
   ```bash
   ping -c 4 <IP_TARGET>
   ```
   *(Contoh: `ping -c 4 10.10.231.104`)*
3. Jika terminal menampilkan respon statistik data terkirim (*0% packet loss* / muncul waktu respons ms), selamat! Komputer Anda sudah resmi terhubung di jaringan lokal TryHackMe.
   > [!NOTE]
   > Jika Anda memilih **Opsi B (AttackBox)**, Anda tidak perlu melakukan tes ping ini karena browser virtual Anda sudah pasti berada di jaringan yang sama dengan mesin target.

### Langkah 4: Mengakses Target Melalui Browser & Burp Suite
1. Nyalakan browser Anda, pasang ekstensi **FoxyProxy** Anda ke mode Burp (Port `8080`), dan pastikan aplikasi **Burp Suite** Anda terbuka.
2. Di Burp Suite, pastikan fitur **Proxy ➔ Intercept** dalam keadaan **Intercept is on** (menyala).
3. Masukkan alamat IP Target (`http://<IP_TARGET>`) di bar pencarian browser Anda.
4. Browser Anda akan loading terus-menerus. Buka jendela Burp Suite, Anda akan melihat request HTTP terperangkap di sana.
5. Klik tombol **Forward** beberapa kali di Burp Suite untuk meneruskan datanya sampai halaman web target tampil sempurna di browser Anda.

---

## 🚀 4. Daftar Ruang Latihan (TryHackMe & PortSwigger)
Selesaikan 3 aktivitas praktik berikut untuk memantapkan pemahaman dasar Anda di lingkungan eksternal:

### Ruang 1: TryHackMe Room - "Burp Suite: Basics"
*   **Target Link:** [TryHackMe: Burp Suite Basics](https://tryhackme.com/room/burpsuitebasics)
*   **Fokus:** Antarmuka Burp Suite, FoxyProxy, CA Certificate, Target Scope, Site Map, dan Burp Browser.
*   **Tujuan:** Hubungkan OpenVPN Anda, pelajari menu navigasi, dan jawab pertanyaan teori. Untuk praktik, temukan flag tersembunyi di **Task 10 (Site Map)** dengan mengakses mesin target dan melihat respon dari endpoint yang tidak biasa (unusual endpoint), lalu ikuti petunjuk XSS di **Task 14 (Example Attack)**.
*   **💡 Analogi IT:** Seperti mengikuti ujian simulator mengemudi mobil untuk memastikan Anda paham fungsi pedal gas, rem, dan persneling.

### Ruang 2: TryHackMe Room - "Burp Suite: Repeater"
*   **Target Link:** [TryHackMe: Burp Suite Repeater](https://tryhackme.com/room/burpsuiterepeater)
*   **Fokus:** Burp Repeater (Manual Hacking)
*   **Tujuan:** Bergabunglah ke room di atas, jalankan mesinnya. Gunakan Repeater untuk menganalisis parameter web secara berulang, melakukan bypass pembatasan otorisasi, dan membaca data rahasia server.
*   **💡 Analogi IT:** Seperti berlatih menembak sasaran bergerak secara manual berulang-ulang untuk melatih ketepatan bidikan Anda.

### Lab 3: PortSwigger Lab - Menyingkap Data Tersembunyi (WHERE Clause SQLi)
*   **Target Lab:** [SQL injection vulnerability in WHERE clause allowing retrieval of hidden data](https://portswigger.net/web-security/sql-injection/lab-retrieve-hidden-data)
*   **Fokus:** Burp Repeater (WHERE Clause Injection)
*   **Tujuan:** Buka lab di atas, nyalakan FoxyProxy ke Burp Proxy. Filter produk berdasarkan kategori, kirim request tersebut ke Repeater. Tambahkan payload `' OR 1=1 --` pada parameter kategori (misal: `/filter?category=Gifts'+OR+1=1--`) untuk memaksa server menampilkan seluruh produk toko, termasuk produk tersembunyi yang belum dirilis.
*   **💡 Analogi IT:** Seperti membisikkan kata sandi universal ke resepsionis toko baju agar ia membukakan tirai gudang penyimpanan rahasia yang menyimpan koleksi pakaian edisi terbatas.

---

## 📽️ Video Walkthrough Hari 6 (Jika Mengalami Kebuntuan)
Jika Anda merasa kesulitan memecahkan salah satu soal di TryHackMe, tonton video walkthrough lengkap dari awal hingga akhir berikut:
*   **[TryHackMe Burp Suite: The Basics | Full Walkthrough 2026](https://www.youtube.com/watch?v=98PpFYJv0L0)** (Video panduan langkah demi langkah menyelesaikan seluruh tantangan di room tersebut).
