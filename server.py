import http.server
import socketserver
import urllib.parse
import subprocess
import os

PORT = 8000

class AcademyHandler(http.server.SimpleHTTPRequestHandler):
    def log_message(self, format, *args):
        print(f"[Academy Server Log] {self.address_string()} - {format%args}")

    def do_GET(self):
        # Fallback to serving static files from workspace root
        super().do_GET()

if __name__ == "__main__":
    print(f"Mengaktifkan Academy Web Server di port {PORT}...")
    try:
        # Allow reusing address to prevent "address already in use" errors on restarts
        socketserver.TCPServer.allow_reuse_address = True
        with socketserver.ThreadingTCPServer(("", PORT), AcademyHandler) as httpd:
            httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nMematikan server...")
