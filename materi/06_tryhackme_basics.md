# Hari 6: Walkthrough Lab TryHackMe (Menggunakan AttackBox) 🌐

Hari ini kita akan berlatih di platform keamanan siber global terpopuler: **TryHackMe**. 

Agar proses belajar Anda jauh lebih mudah, praktis, dan bebas dari urusan instalasi/konfigurasi jaringan lokal, kita akan menggunakan fitur **AttackBox** bawaan dari TryHackMe. Anda **tidak perlu menginstal OpenVPN** di komputer Anda sendiri.

---

## 🚀 1. Mengapa Menggunakan AttackBox? (Metode Terpadu & Paling Mudah)
* **Tanpa Instalasi:** Anda tidak perlu mengunduh file `.ovpn` atau menginstal aplikasi OpenVPN di komputer/terminal Anda.
* **Instan & Siap Pakai:** Layar virtual Linux (AttackBox) akan langsung muncul di browser Anda dan sudah terhubung otomatis ke jaringan internal TryHackMe.
* **Alat Sudah Terpasang:** Burp Suite, browser khusus, FoxyProxy, dan sertifikat keamanan digital sudah terkonfigurasi secara otomatis di dalam AttackBox.

---

## 🛠️ 2. Langkah Menyalakan dan Menggunakan AttackBox

Ikuti alur kerja berikut untuk mulai belajar di dalam lab:

### Langkah 1: Jalankan AttackBox
1. Masuk ke akun Anda di [https://tryhackme.com](https://tryhackme.com).
2. Buka halaman room: **[TryHackMe: Burp Suite Basics](https://tryhackme.com/room/burpsuitebasics)**.
3. Klik tombol **"Start AttackBox"** berwarna biru di pojok kanan atas halaman.
4. Tunggu sekitar 1 hingga 2 menit. Layar komputer virtual Linux akan muncul secara langsung di dalam browser Anda.

### Langkah 2: Jalankan Mesin Target (Lab)
1. Pada task terkait di halaman room (misalnya Task 10 atau Task 14), klik tombol **Start Machine** berwarna merah/biru.
2. Tunggu 1 menit. Alamat **IP Target** (misalnya `10.10.123.45`) akan muncul di bagian atas halaman room Anda.

### Langkah 3: Membuka Burp Suite di dalam AttackBox
1. Pada desktop virtual AttackBox di browser Anda, cari dan klik ikon menu aplikasi (di pojok kiri atas desktop virtual).
2. Buka **Burp Suite Community Edition**. Klik *Next* ➔ *Start Burp* untuk membukanya.

### Langkah 4: Buka Browser di dalam AttackBox
1. Buka browser **Firefox** yang ada di desktop virtual AttackBox.
2. Browser di dalam AttackBox ini sudah dikonfigurasi secara otomatis untuk terhubung ke Burp Suite.
3. Ketik alamat IP Target yang Anda dapatkan tadi (contoh: `http://10.10.123.45`) ke dalam address bar browser Firefox tersebut.
4. Anda sekarang dapat menyadap, melihat Site Map, dan memanipulasi request menggunakan Burp Suite lokal di AttackBox Anda.

---

## 🎯 3. Daftar Ruang Latihan Hari Ini

Gunakan AttackBox Anda untuk menyelesaikan 2 ruangan latihan di bawah ini:

### Ruang 1: TryHackMe Room - "Burp Suite: Basics"
* **Target Link:** [TryHackMe: Burp Suite Basics](https://tryhackme.com/room/burpsuitebasics)
* **Fokus:** Menjelajahi tab Dashboard, Options, Target (Site Map), dan Proxy.
* **Petunjuk Praktik:**
  * Pelajari teori dasar kegunaan masing-masing tab.
  * **Mencari Flag (Task 10):** Jalankan mesin target, buka website target di Firefox AttackBox, lalu periksa tab **Target ➔ Site Map** di Burp Suite. Temukan sebuah endpoint dengan nama acak/tidak biasa (*unusual endpoint*), klik kanan, dan periksa responnya untuk menyalin flag: `THM{NmNlZTliNGE1MWU1ZTQzMzgzNmFiNWVk}`.
  * **Percobaan Serangan (Task 14):** Ikuti petunjuk untuk menangkap request form kirim pesan, lalu ubah isinya untuk melewati filter client-side dan jalankan Reflected XSS.

### Ruang 2: TryHackMe Room - "Burp Suite: Repeater"
* **Target Link:** [TryHackMe: Burp Suite Repeater](https://tryhackme.com/room/burpsuiterepeater)
* **Fokus:** Mengirim request ke tab Repeater untuk dianalisis dan dimodifikasi secara manual dan berulang-ulang tanpa harus mengulang proses klik di browser.

---

## 📽️ Video Walkthrough Hari 6 (Jika Mengalami Kebuntuan)
Jika Anda merasa kesulitan memecahkan salah satu soal di TryHackMe, tonton video walkthrough lengkap dari awal hingga akhir berikut:
* **[TryHackMe Burp Suite: The Basics | Full Walkthrough 2026](https://www.youtube.com/watch?v=98PpFYJv0L0)** (Video panduan langkah demi langkah menyelesaikan seluruh tantangan di room tersebut).
