# Hari 6: Walkthrough Lab TryHackMe 🌐

Hari ini kita akan melangkah keluar dari lab lokal komputer kita dan berlatih di platform keamanan siber global terpopuler: **TryHackMe**.

---

## 🏛️ 1. Apa itu TryHackMe?
**TryHackMe** adalah platform pembelajaran keamanan siber berbasis web yang menyediakan ratusan ruangan (*rooms*) latihan interaktif secara gratis maupun berbayar. Di sana, Anda bisa meretas mesin virtual (*Virtual Machine*) nyata secara legal dari browser atau menggunakan VPN.

---

## 🛠️ 2. Langkah Menghubungkan Linux/OS Anda ke TryHackMe via OpenVPN
Agar komputer Linux/OS Anda bisa mengakses mesin virtual target di TryHackMe, Anda harus terhubung ke jaringan internal mereka menggunakan **OpenVPN**.

1.  Daftar akun gratis di [https://tryhackme.com](https://tryhackme.com).
2.  Setelah login, akses menu **Access** (di pojok kanan atas profil Anda).
3.  Pilih server region terdekat (misal: Singapore) dan klik **Download My Configuration File** untuk mengunduh berkas VPN Anda (berformat `.ovpn`).
4.  Buka terminal Linux Anda.
5.  Instal aplikasi openvpn jika belum ada (misal pada Fedora: `sudo dnf install openvpn -y`, atau pada Ubuntu/Debian: `sudo apt install openvpn -y`):
    ```bash
    sudo dnf install openvpn -y
    ```
6.  Jalankan koneksi VPN menggunakan file yang diunduh tadi (ganti `username` dengan nama akun Anda):
    ```bash
    sudo openvpn ~/Downloads/username.ovpn
    ```
    *(Penjelasan: Biarkan terminal ini tetap terbuka di latar belakang. Jika muncul baris tulisan `Initialization Sequence Completed`, berarti Anda telah sukses terhubung).*

---

## 🚀 3. Daftar Ruang Latihan (TryHackMe & PortSwigger)
Selesaikan 3 aktivitas praktik berikut untuk memantapkan pemahaman dasar Anda di lingkungan eksternal:

### Ruang 1: TryHackMe Room - "Burp Suite: The Basics"
*   **Target Link:** [TryHackMe: Burp Suite The Basics](https://tryhackme.com/room/burpsuitethebasics)
*   **Fokus:** Seluruh antarmuka Burp Suite, FoxyProxy, CA Certificate, Target Scope, dan HTTP History.
*   **Tujuan:** Nyalakan mesin target, hubungkan OpenVPN Anda. Jawab pertanyaan-pertanyaan teori dan temukan flag yang diminta di dalam sistem dengan menyadap request HTTP browser Anda.
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
