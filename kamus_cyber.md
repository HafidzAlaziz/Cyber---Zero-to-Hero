# 📖 Kamus Istilah Cyber Security (Glossary)

Kamus ini adalah panduan pribadi Anda untuk memahami istilah-istilah di dunia keamanan siber. Jika Anda menemukan kata asing baru selama belajar, beri tahu saya agar kita bisa menambahkannya di sini dengan penjelasan yang paling mudah dipahami!

---

## 🔑 Istilah Fundamental

| Istilah | Arti Sederhana | Analogi Dunia Nyata |
| :--- | :--- | :--- |
| **Vulnerability** | Kerentanan atau kelemahan pada sistem (bisa berupa bug di kode, salah konfigurasi, atau kelalaian manusia) yang bisa dimanfaatkan oleh peretas. | Jendela rumah yang lupa dikunci atau engsel pintu yang rapuh. |
| **Exploit** | Alat, kode, script, atau metode yang digunakan oleh peretas untuk memanfaatkan *vulnerability* agar bisa masuk ke dalam sistem. | Linggis atau kunci duplikat yang dipakai pencuri untuk membuka jendela yang tidak terkunci. |
| **Payload** | Bagian dari exploit berisi kode berbahaya yang akan dieksekusi di target setelah peretas berhasil masuk (misal: membuka akses backdoor, mencuri data). | Barang bawaan atau "bom" yang diselundupkan pencuri setelah berhasil masuk ke dalam rumah. |
| **Privilege Escalation** | Proses menaikkan hak akses (privilese). Dari pengguna biasa yang haknya terbatas, menjadi pengguna tingkat tinggi (`root` di Linux atau `Administrator` di Windows). | Tamu hotel yang berhasil menduplikasi kunci master milik manajer hotel untuk masuk ke semua kamar. |
| **Port** | Pintu virtual di komputer yang digunakan untuk menerima atau mengirim data. Setiap layanan memiliki nomor port khusus (misal: web HTTPS menggunakan port 443). | Nomor-nomor pintu apartemen di dalam satu gedung besar (gedung = alamat IP). |
| **IP Address** | Alamat unik yang dimiliki oleh setiap perangkat yang terhubung ke jaringan/internet agar bisa saling berkomunikasi. | Alamat rumah Anda untuk mengirim dan menerima surat paket. |
| **Firewall** | Sistem keamanan yang memantau dan mengontrol lalu lintas jaringan masuk dan keluar berdasarkan aturan keamanan yang ditentukan. | Satpam di gerbang perumahan yang memeriksa siapa saja yang boleh masuk dan keluar. |
| **Root** | Akun pengguna tertinggi di sistem operasi Linux/Unix yang memiliki kontrol penuh atas seluruh sistem tanpa batasan apa pun. | Pemilik gedung yang memegang semua kunci dan berhak merombak bangunan sesuka hati. |
| **CIA Triad** | Tiga pilar utama keamanan informasi: *Confidentiality* (Kerahasiaan), *Integrity* (Keaslian data), dan *Availability* (Ketersediaan sistem). | Kerahasiaan surat (amplop disegel), keaslian isi surat (tidak dicoret-coret di jalan), dan suratnya sampai tepat waktu. |
| **TCP** | Protokol pengiriman data yang menjamin data sampai dengan utuh, teratur, dan selamat melalui pengecekan error. | Kurir paket yang meminta tanda tangan penerima sebelum menyerahkan barang untuk memastikan barang sampai di tangan yang benar. |
| **UDP** | Protokol pengiriman data yang fokus pada kecepatan tinggi tanpa memedulikan apakah data sampai dengan utuh atau berurutan. | Petugas koran yang melempar koran ke halaman rumah Anda dari motor; cepat, tapi ada risiko koran basah atau hilang. |
| **DNS** | Sistem yang menerjemahkan nama domain situs web (seperti google.com) menjadi Alamat IP angka agar dimengerti komputer. | Buku telepon HP Anda yang menerjemahkan nama teman Anda menjadi nomor telepon aslinya. |
| **3-Way Handshake** | Proses tiga langkah yang digunakan TCP untuk membuat koneksi sebelum data dikirim (SYN -> SYN-ACK -> ACK). | Percakapan telepon: "Halo? (SYN)" - "Ya halo, siapa ini? (SYN-ACK)" - "Ini saya, Budi (ACK)". Setelah itu barulah obrolan dimulai. |

---

## 🛠️ Istilah Khusus Burp Suite & Web Pentesting

| Istilah | Arti Sederhana | Analogi Dunia Nyata |
| :--- | :--- | :--- |
| **Proxy (Intercepting Proxy)** | Server perantara yang diletakkan di antara browser Anda dan website target untuk menyadap dan merekam lalu lintas data. | Petugas pos pemeriksaan yang menahan dan memeriksa paket barang kiriman Anda sebelum diteruskan ke alamat tujuan. |
| **Intercept** | Tindakan menahan kiriman data (HTTP Request) di tengah jalan agar bisa dibaca atau diubah isinya sebelum dilepas ke server target. | Menangkap kurir surat di jalan, menahan suratnya untuk dibaca atau ditulis ulang, lalu membiarkan kurir tersebut melanjutkan perjalanannya. |
| **Repeater** | Fitur di Burp Suite untuk mengirimkan kembali request HTTP yang sama berulang-ulang secara manual demi menganalisis respon server secara cepat. | Membawa pintu gembok ke bengkel pribadi Anda untuk dicobakan berbagai anak kunci secara berulang tanpa perlu mondar-mandir ke rumah target. |
| **Intruder** | Fitur di Burp Suite untuk mengirimkan ribuan request HTTP secara otomatis dalam waktu cepat (digunakan untuk brute-force password atau scanning massal). | Senapan mesin otomatis yang menembakkan peluru (kata sandi tebakan) bertubi-tubi ke sasaran dalam hitungan detik. |
| **Wordlist** | Daftar berisi kumpulan kata-kata (seperti daftar username, password, atau direktori rahasia) yang digunakan untuk menebak data autentikasi target. | Kamus tebal berisi semua kata sandi umum yang sering dipakai orang (seperti '123456', 'password', 'qwerty'). |
| **URL Encoding** | Proses menerjemahkan karakter khusus (seperti spasi, tanda tanya, tanda sama dengan) menjadi format persen `%` agar aman dikirim lewat URL internet. | Menerjemahkan huruf spasi menjadi karakter `+` atau `%20` agar mesin pengirim data tidak kebingungan membaca alamat web. |
| **IDOR** | Celah keamanan web di mana aplikasi mempercayai input parameter ID pengguna secara mentah-mentah dari URL tanpa memeriksa apakah user tersebut berhak melihatnya. | Mengubah nomor kamar hotel di kunci kartu Anda dari `104` menjadi `101` secara manual menggunakan spidol, dan pintunya langsung terbuka begitu saja. |

---

> [!TIP]
> **Cara Menggunakan Kamus Ini**: 
> Saat membaca materi atau praktik, jika Anda bingung dengan sebuah istilah, buka file ini (`CTRL + F` di VS Code atau gunakan kolom pencarian di Web UI) dan cari istilah tersebut. Jika belum ada, langsung tanyakan pada saya agar kita bahas dan tambahkan bersama!

