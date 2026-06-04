# 🎯 Masterclass Burp Suite 10 Hari: Dari Nol ke Pro (Bug Bounty Ready) 🚀

Selamat datang di ruang belajar mandiri Anda! Halaman ini telah dirancang ulang sepenuhnya untuk membantu Anda menguasai **Burp Suite**—alat wajib bagi setiap *Penetration Tester* (peretas etis yang menguji keamanan sistem) dan *Bug Hunter* (pemburu celah keamanan berbayar) di seluruh dunia.

Kurikulum ini dirombak total berdasarkan materi pilihan dosen Anda. Kita akan belajar langkah-demi-langkah selama **10 Hari**.

---

## 💡 Glosarium Istilah Penting (Mudah Dipahami)
Sebelum mulai, mari pahami beberapa istilah penting yang sering digunakan dalam peretasan web:
*   **Pentester (Penetration Tester):** Pekerjaan menguji keamanan sistem komputer/website dengan cara mensimulasikan serangan peretasan nyata secara legal untuk menemukan celah sebelum diambil alih peretas jahat.
*   **Bug Bounty:** Program berhadiah uang yang diadakan oleh perusahaan untuk siapa saja yang berhasil menemukan dan melaporkan celah keamanan (bug) di sistem mereka secara legal.
*   **Proxy (Intercepting Proxy):** Perantara di tengah jalan. Dalam hal ini, Burp Suite berdiri di antara browser Anda (Client) dan server website target. Ia berfungsi menangkap surat (HTTP Request) yang dikirim browser Anda sebelum sampai ke server.
*   **Intercept (Penyadapan/Penahanan):** Tindakan menahan lalu lintas data di tengah jalan sehingga Anda bisa membaca dan mengubah isinya secara bebas sebelum dikirimkan ke tujuan akhir.
*   **Request (Permintaan):** Surat dari browser Anda ke server (misal: "Saya mau membuka halaman profil ini").
*   **Response (Balasan):** Balasan dari server ke browser Anda (misal: "Ini halaman profil Anda beserta kodenya").
*   **Payload:** Kode atau data khusus yang sengaja disisipkan untuk mengeksploitasi celah keamanan (misal: payload SQL Injection untuk memecah query database).

---

## 🗺️ Peta Jalan Belajar 10 Hari

Setiap kali Anda menyelesaikan suatu hari pembelajaran, klik tombol **"Tandai Selesai"** di bagian bawah halaman materi untuk melacak progres belajar Anda.

### 📦 Fase 1: Setup & Fondasi Utama (Hari 1 - 3)
*   **[Hari 1: Setup & Instalasi Burp Suite](file:///mnt/c369c338-f77c-46ea-923a-21cd51718e89/Apiss/Belajar/Road%20To%20Cyber/materi/01_setup_instalasi.md)**
    *   *Fokus:* Menginstal Burp Suite Community Edition, menyetel FoxyProxy, dan memasang CA Certificate (sertifikat keamanan digital) agar lalu lintas HTTPS terenkripsi bisa di-intercept.
*   **[Hari 2: Navigasi Interface & Site Map](file:///mnt/c369c338-f77c-46ea-923a-21cd51718e89/Apiss/Belajar/Road%20To%20Cyber/materi/02_interface_navigation.md)**
    *   *Fokus:* Memahami tata letak menu utama Burp, menggunakan Target tab, serta menyetel **Scope** (membatasi cakupan) agar browser tidak penuh dengan lalu lintas data latar belakang (background traffic).
*   **[Hari 3: HTTP Proxy & Interception](file:///mnt/c369c338-f77c-46ea-923a-21cd51718e89/Apiss/Belajar/Road%20To%20Cyber/materi/03_proxy_intercept.md)**
    *   *Fokus:* Menyalakan fungsi intercept, membaca parameter HTTP, mengubah request secara langsung (tampering), dan memecahkan **Tantangan Praktik 1 (Manipulasi Cookie)** di tab Tantangan.

### ⚡ Fase 2: Eksploitasi & Otomatisasi (Hari 4 - 5)
*   **[Hari 4: Burp Repeater - Analisis Manual](file:///mnt/c369c338-f77c-46ea-923a-21cd51718e89/Apiss/Belajar/Road%20To%20Cyber/materi/04_repeater_manual.md)**
    *   *Fokus:* Mengirim request ke tab Repeater (pengulang request), melakukan bypass login administrator menggunakan kerentanan SQL Injection, dan menyelesaikan **Tantangan Praktik 2**.
*   **[Hari 5: Burp Intruder - Otomatisasi & Fuzzing](file:///mnt/c369c338-f77c-46ea-923a-21cd51718e89/Apiss/Belajar/Road%20To%20Cyber/materi/05_intruder_bruteforce.md)**
    *   *Fokus:* Mengenal 4 tipe serangan Intruder (Sniper, Battering Ram, Pitchfork, Cluster Bomb) dan mempraktikkan serangan tebak kata sandi otomatis (*Brute Force*).

### 🌐 Fase 3: Praktik Lab Eksternal (Hari 6 - 7)
*   **[Hari 6: Walkthrough Lab TryHackMe (AttackBox)](file:///mnt/c369c338-f77c-46ea-923a-21cd51718e89/Apiss/Belajar/Road%20To%20Cyber/materi/06_tryhackme_basics.md)**
    *   *Fokus:* Mengakses lab gratis di platform internasional TryHackMe dan menyelesaikan room "Burp Suite: Basics" menggunakan cloud-based AttackBox tanpa instalasi VPN.
*   **[Hari 7: Praktik PortSwigger Academy](file:///mnt/c369c338-f77c-46ea-923a-21cd51718e89/Apiss/Belajar/Road%20To%20Cyber/materi/07_portswigger_labs.md)**
    *   *Fokus:* Mendaftar di PortSwigger Web Security Academy (sekolah keamanan siber gratis dari pembuat Burp Suite) dan menyelesaikan lab eksploitasi SQL Injection dan XSS.

### 🧠 Fase 4: Optimasi & Alur Profesional (Hari 8 - 10)
*   **[Hari 8: Common Mistakes & Integrasi AI](file:///mnt/c369c338-f77c-46ea-923a-21cd51718e89/Apiss/Belajar/Road%20To%20Cyber/materi/08_common_mistakes_ai.md)**
    *   *Fokus:* Cara mendiagnosa proxy bermasalah, memahami pesan eror umum, serta cara berkolaborasi dengan AI untuk menganalisis payload request yang kompleks.
*   **[Hari 9: Bug Bounty & Pentesting Workflow](file:///mnt/c369c338-f77c-46ea-923a-21cd51718e89/Apiss/Belajar/Road%20To%20Cyber/materi/09_bug_bounty_workflow.md)**
    *   *Fokus:* Alur kerja standar industri untuk pentesting web dan pelaporan celah bug bounty secara profesional agar laporan Anda diterima (Valid).
*   **[Hari 10: Tantangan Final PortSwigger Academy](file:///mnt/c369c338-f77c-46ea-923a-21cd51718e89/Apiss/Belajar/Road%20To%20Cyber/materi/10_tantangan_portswigger.md)**
    *   *Fokus:* Menyelesaikan 5 tantangan kerentanan web utama langsung di platform cloud PortSwigger Web Security Academy sebagai pembuktian kelulusan modul.

---

## 📽️ Daftar Referensi Video Kuliah (Diberikan oleh Dosen)

Jalur belajar di atas diselaraskan dengan video-video referensi berikut:
1.  **[Burp Suite Full Course for Beginners](https://www.youtube.com/watch?v=MhxP72H4h3g)** (Cyber Mind Space)
    *   *Membahas:* Interface Burp Suite, proxy, repeater, intruder, dan workflow bug bounty.
2.  **[Day 6 | Burp Suite Full Course with AI (Beginner to Pro)](https://www.youtube.com/watch?v=FzFdBHAtTl4)** (Hacker Vlog)
    *   *Membahas:* Intercept HTTP, common mistakes, AI workflows, dan bug bounty.
3.  **[Burp Suite Full Tutorial with Practical in 2 Hours](https://www.youtube.com/watch?v=GxvFqgCBW-8)** (WsCube Cyber Security)
    *   *Membahas:* Setup dasar, konfigurasi Firefox proxy, dan praktik fitur utama.
4.  **[TryHackMe Burp Suite: The Basics Walkthrough](https://www.youtube.com/watch?v=98PpFYJv0L0)** (Tutorial TryHackMe)
    *   *Membahas:* Instalasi, Dashboard, Proxy, FoxyProxy, CA Certificate, Site Map, Scoping, HTTPS Proxying, dan contoh serangan.
5.  **[How to Use Burp Suite Like a PRO](https://www.youtube.com/watch?v=GxvFqgCBW-8)** (Kyser Clark - Cybersecurity)
    *   *Membahas:* Penjelasan santai setup dasar untuk pemula.
6.  **[Burp Suite Tutorial for Beginners | Complete Guide Playlist](https://www.youtube.com/playlist?list=PL6FTq_v8hDb2mXzeLoXZcWGEa7DvYkSSb)** (12 Video)
    *   *Membahas:* Seri mendalam mastering aplikasi keamanan web bertahap.
7.  **[Burp Suite Tutorials Playlist](https://www.youtube.com/playlist?list=PLBf0hzazHTGP2L7AoWTIhggUsDdNZhfBl)** (HackerSploit - 3 Video)
    *   *Membahas:* Tutorial singkat dan padat untuk memahami dasar keamanan.

---

## 📂 Cara Belajar Hari Ini
1.  Buka **Dashboard Utama** ini.
2.  Klik tautan hari belajar yang ingin Anda ulas (misalnya **[Hari 1](file:///mnt/c369c338-f77c-46ea-923a-21cd51718e89/Apiss/Belajar/Road%20To%20Cyber/materi/01_setup_instalasi.md)**).
3.  Baca rangkuman materi, tonton video referensi yang sesuai, lalu ikuti petunjuk tantangan praktisnya!
4.  Gunakan tab **Kamus Istilah** jika Anda menemukan singkatan atau istilah aneh.
