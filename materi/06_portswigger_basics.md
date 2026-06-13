# Hari 6: Menguasai Burp Decoder & Comparer 🔍

Setelah Anda menguasai fungsi penyadapan (Proxy) dan pengulangan request manual (Repeater), hari ini kita akan mempelajari dua fitur analisis data yang sangat berguna di Burp Suite: **Decoder** dan **Comparer**.

Kedua tab ini membantu kita menganalisis data terenkripsi atau terkode, serta membandingkan perbedaan respon server yang sangat tipis secara otomatis tanpa perlu membaca baris demi baris HTML secara manual.

---

## 🏛️ 1. Apa itu Burp Decoder dan Comparer?

* **Burp Decoder:** Alat konversi data instan. Jika Anda menemukan data sensitif (seperti token sesi atau parameter) yang disandikan dalam bentuk Base64, URL-encode, Hex, atau Hash (MD5/SHA), Anda bisa menerjemahkannya kembali ke teks biasa menggunakan Decoder secara instan.
* **Burp Comparer:** Alat pembanding visual. Berguna untuk membandingkan dua request atau respon HTTP yang terlihat serupa untuk mencari perbedaan terkecil (seperti perbedaan spasi, tanda baca, atau byte data) yang sering kali membocorkan celah keamanan.

---

## 🚀 2. Dua Laboratorium Praktik Analisis Lanjutan (PortSwigger)

Selesaikan 2 lab interaktif berikut untuk melatih kemampuan Anda menggunakan Decoder dan Comparer:

### Lab 1: Brute-forcing a stay-logged-in cookie (Menggunakan Burp Decoder & Intruder)
* **Target Lab:** [Lab: Brute-forcing a stay-logged-in cookie](https://portswigger.net/web-security/authentication/other-mechanisms/lab-brute-forcing-a-stay-logged-in-cookie)
* **Fokus Burp:** **Decoder ➔ Base64 & MD5 Hash Analysis ➔ Intruder Payload Processing**
* **Tujuan:**
  1. Klik link lab di atas, masuk menggunakan akun demo Anda: `wiener:peter`. Centang kotak **"Stay logged in"** saat login.
  2. Buka tab **Proxy ➔ HTTP History** di Burp Suite, cari request ke `/my-account` yang memiliki header Cookie `stay-logged-in=...`.
  3. Blok nilai token cookie tersebut, klik kanan, lalu pilih **Send to Decoder**.
  4. Buka tab **Decoder**. Di panel kanan, klik **Decode as ... ➔ Base64**.
  5. Anda akan melihat hasil dekodenya berupa format `username:hash` (contoh: `wiener:5118c295cd1393e2abb8cae10aa8d6bf`).
  6. Hash tersebut adalah nilai MD5 dari password `peter`. Anda bisa mencobanya dengan mengetik `peter` di baris Decoder baru ➔ klik **Encode as ... ➔ MD5** di sebelah kanan untuk memverifikasi hasilnya sama.
  7. Sekarang, kirim request `/my-account` (yang berisi cookie `stay-logged-in`) ke **Intruder**.
  8. Di tab **Positions**, blok nilai cookie `stay-logged-in` dan klik **Add §** untuk menjadikannya target serangan (misal: `stay-logged-in=§target§`).
  9. Di tab **Payloads**, masukkan wordlist password yang disediakan oleh lab. Di bagian bawah (**Payload Processing**), klik **Add** untuk menambahkan aturan pemrosesan otomatis berikut secara berurutan:
     * **Hash:** pilih **MD5** (mengubah kata sandi biasa menjadi MD5 hash).
     * **Add prefix:** ketik `carlos:` (menggabungkannya menjadi format `carlos:md5hash`).
     * **Encode:** pilih **Base64** (menyandikan seluruh string ke Base64 sebelum dikirim).
  10. Jalankan serangan Intruder, cari respon dengan status `200 OK` (menandakan keberhasilan masuk sebagai Carlos), lalu refresh halaman browser Anda untuk memicu kelulusan lab.
* **💡 Analogi IT:** Seperti menggunakan alat penerjemah bahasa sandi (Decoder) untuk membaca surat rahasia penjaga pintu, lalu memalsukan tanda tangan supervisor agar diizinkan masuk.

### Lab 2: Username enumeration via subtly different responses (Menggunakan Burp Comparer)
* **Target Lab:** [Lab: Username enumeration via subtly different responses](https://portswigger.net/web-security/authentication/password-based/lab-username-enumeration-via-subtly-different-responses)
* **Fokus Burp:** **Intruder ➔ Send Responses to Comparer (Word-by-word comparison)**
* **Tujuan:**
  1. Klik link lab di atas. Masukkan username dan password asal pada form login.
  2. Cari request POST `/login` di **HTTP History**, kirim ke **Intruder**.
  3. Setel posisi payload pada parameter `username` saja (Sniper attack), lalu masukkan daftar username yang diberikan di lab. Jalankan serangan.
  4. Anda akan melihat seluruh respon mengembalikan status HTTP `200 OK` dan panjang respon (*Length*) yang hampir identik.
  5. Pilih satu respon dari username sembarang dan satu respon dari username yang menurut Anda valid, klik kanan masing-masing respon tersebut, lalu pilih **Send to Comparer** (kirim keduanya).
  6. Buka tab **Comparer**. Anda akan melihat dua item respon di tabel atas dan bawah.
  7. Pilih respon pertama di panel atas dan respon kedua di panel bawah, lalu klik tombol **Words** di pojok kanan bawah.
  8. Jendela baru akan membandingkan kedua respon tersebut secara visual. Perhatikan teks yang disorot dengan warna (misalnya, perbedaan spasial yang sangat tipis atau tanda titik "." di akhir pesan error, seperti `"Invalid username or password."` vs `"Invalid username or password"`).
  9. Perbedaan kecil ini menunjukkan bahwa server memberikan respon berbeda ketika username yang dimasukkan terdaftar di database.
  10. Setelah menemukan username yang valid, kembali ke Intruder, ganti target serangan ke kolom `password`, gunakan username valid tersebut, masukkan daftar password, lalu jalankan serangan untuk login dan menyelesaikan lab.
* **💡 Analogi IT:** Seperti meletakkan dua lembar kertas di bawah lampu sinar UV dan menumpuknya untuk mendeteksi perbedaan cetakan mikroskopis yang membedakan uang asli dengan uang palsu.

---

## 📽️ Video Walkthrough Pendukung Hari 6
Untuk melihat visualisasi langsung penggunaan fitur Decoder dan Comparer di atas, silakan tonton daftar putar panduan berikut:
* **[Burp Suite Decoder Tutorial for Beginners](https://www.youtube.com/watch?v=FzFdBHAtTl4)** (Video panduan penggunaan decoder dan encoding payload).
* **[How to Use Burp Comparer to Find Vulnerabilities](https://www.youtube.com/watch?v=MhxP72H4h3g)** (Video cara membandingkan request/response untuk menemukan celah tersembunyi).
