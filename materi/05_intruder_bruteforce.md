# Hari 5: Burp Intruder - Otomatisasi & Fuzzing 🎯

Hari ini kita akan mempelajari alat otomatisasi serangan paling kuat di Burp Suite: **Burp Intruder**. Alat ini digunakan untuk mengirim ribuan request secara otomatis dalam waktu singkat guna melakukan tebak kata sandi (*Brute Force*) atau mencari celah dengan menguji ribuan kata aneh (*Fuzzing*).

---

## 🎯 1. Apa itu Burp Intruder?
Jika Repeater digunakan untuk mengirim request satu per satu secara manual, **Intruder** digunakan untuk otomatisasi massal. Anda cukup memilih bagian teks mana yang ingin diubah (misal: kolom password), lalu memasukkan daftar kata sandi (*Wordlist*). Intruder akan menjalankan serangan dengan memasukkan kata-kata tersebut secara otomatis satu per satu.

---

## 💥 2. Empat Jenis Attack Type (Tipe Serangan) di Intruder
Sebelum menjalankan serangan, Anda harus menentukan **Positions** (posisi target yang ingin diserang) dan memilih salah satu dari 4 **Attack Type**:

### A. Sniper (Penembak Jitu) 🎯
*   **Cara kerja:** Menyerang satu per satu posisi secara bergantian menggunakan satu wordlist.
*   **Kapan dipakai:** Paling sering digunakan. Sangat efisien jika Anda hanya ingin menebak password untuk satu nama pengguna yang sudah pasti (misalnya username `admin`).

### B. Battering Ram (Palu Gada) 🔨
*   **Cara kerja:** Menyerang semua posisi secara bersamaan dengan kata yang **sama** dari satu wordlist.
*   **Kapan dipakai:** Jarang digunakan. Berguna jika Anda ingin memasukkan nilai input yang sama di beberapa kolom formulir sekaligus.

### C. Pitchfork (Garpu Rumput) 🍴
*   **Cara kerja:** Menggunakan beberapa wordlist berbeda untuk posisi berbeda secara **sejajar**. Kata pertama dari wordlist A akan dipasangkan hanya dengan kata pertama dari wordlist B, dan seterusnya.
*   **Kapan dipakai:** Jika Anda memiliki daftar username dan password yang berpasangan secara tepat.

### D. Cluster Bomb (Bom Kluster) 💣
*   **Cara kerja:** Mencoba seluruh kombinasi silang (*Cartesian Product*) dari beberapa wordlist. Jika wordlist A berisi 10 username, dan wordlist B berisi 10 password, maka Intruder akan mencoba total 100 kali kombinasi serangan (`10 x 10`).
*   **Kapan dipakai:** Jika Anda sama sekali tidak tahu username maupun password target, sehingga harus menguji semua kemungkinan kombinasi.

---

## 🚀 3. Praktik Penggunaan Burp Intruder (PortSwigger Academy)
Meskipun kecepatan Intruder pada Burp Suite Community Edition dibatasi (*throttled*), Anda tetap bisa memecahkan lab di bawah ini untuk memahami alur kerja otomatisasi serangan di dunia nyata:

### Lab 1: Enumerasi Username & Brute Force Password (Sniper Attack)
*   **Target Lab:** [Username enumeration via different responses](https://portswigger.net/web-security/authentication/password-based/lab-username-enumeration-via-different-responses)
*   **Fokus Burp Suite:** **Intruder -> Sniper (Dua Tahap)**
*   **Tujuan:**
    1. Akses halaman login lab. Lakukan satu kali percobaan login asal, cari request POST `/login` di HTTP History, lalu klik kanan dan pilih **Send to Intruder**.
    2. Di tab **Positions**, setel tipe ke **Sniper**, lalu blok nilai parameter `username` Anda dengan tanda `§`.
    3. Di tab **Payloads**, unduh wordlist username dari instruksi lab PortSwigger, lalu tempel (*Paste*) ke bagian Payload Options. Klik **Start Attack**.
    4. Cari request yang menghasilkan status respon atau panjang respon (*Length*) yang berbeda. Catat username tersebut (misal username yang valid).
    5. Kembali ke tab **Positions**, bersihkan tanda `§` pada username, lalu blok parameter `password` dengan `§`. Ganti isi wordlist di tab Payloads dengan wordlist password dari lab. Klik **Start Attack** untuk menemukan password yang tepat dan login ke akun korban.
*   **💡 Analogi IT:** Seperti mengetuk pintu rumah-rumah di kompleks sambil memanggil nama-nama berbeda; jika ada sahutan *"Ya, ada apa?"*, Anda telah mengonfirmasi bahwa orang tersebut tinggal di sana, lalu tinggal mencari kunci gembok yang pas untuk pintu rumahnya.

### Lab 2: Bypass Kode Verifikasi 2FA (Brute-Forcing Multi-Factor Auth)
*   **Target Lab:** [2FA bypass using a brute-force attack](https://portswigger.net/web-security/authentication/multi-factor/lab-2fa-bypass-using-a-brute-force-attack)
*   **Fokus Burp Suite:** **Intruder -> Sniper (Numbers Generator)**
*   **Tujuan:** Login dengan akun Anda `wiener:peter`. Masuk ke halaman verifikasi 2FA. Kirim request pengiriman kode 2FA tersebut ke **Intruder**. Blok 4 digit angka kode 2FA (misal `0123`) sebagai posisi serangan. Di tab Payloads, ubah tipe payload menjadi **Numbers**, isi rentang dari `0000` sampai `9999` dengan step `1`, dan format minimum integer: `4`. Jalankan serangan Sniper untuk memecahkan kombinasi kode 2FA akun korban `carlos` secara paksa.
*   **💡 Analogi IT:** Seperti memutar nomor kombinasi kunci koper secara berurutan dari `000` hingga `999` secara cepat satu per satu sampai terdengar bunyi klik gembok terbuka.

### Lab 3: Enumerasi Username Melalui Perbedaan Respon yang Sangat Tipis
*   **Target Lab:** [Username enumeration via subtly different responses](https://portswigger.net/web-security/authentication/password-based/lab-username-enumeration-via-subtly-different-responses)
*   **Fokus Burp Suite:** **Intruder -> Grep - Match (Filter Respon)**
*   **Tujuan:** Mirip dengan Lab 1, namun pesan kesalahan jika username salah versus jika password salah hampir identik (hanya berbeda spasi atau tanda titik). Gunakan fitur **Grep - Match** di tab **Options** Intruder, lalu tambahkan kalimat kesalahan (misal: *"Invalid username or password"*) untuk menyortir respon mana yang tidak memicu pesan kesalahan tersebut secara otomatis.
*   **💡 Analogi IT:** Seperti mewawancarai ribuan pelamar kerja dan mencari satu orang yang memberikan respon mata berkedip yang sangat tipis ketika ditanya pertanyaan rahasia.

---

## 📽️ Video Pendukung untuk Hari 5
*   **[Burp Suite Full Course for Beginners | Web Hacking & Bug Bounty 2026](https://www.youtube.com/watch?v=MhxP72H4h3g)** (Bagian demo penggunaan Intruder dan penjelasan perbedaan 4 tipe attack positions secara visual).
*   **[Burp Suite Tutorials (oleh HackerSploit)](https://www.youtube.com/playlist?list=PLBf0hzazHTGP2L7AoWTIhggUsDdNZhfBl)** (Membahas serangan Brute Force menggunakan Intruder).
