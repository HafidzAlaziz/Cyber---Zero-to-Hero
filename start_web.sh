#!/bin/bash

# --- Cyber Security Learning Portal Runner ---
# This script starts a local web server using Python and opens the web portal in the default browser.

PORT=8000
URL="http://localhost:$PORT"

# Colors for terminal styling
GREEN='\033[0;32m'
CYAN='\033[0;36m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Clear terminal screen
clear

# Display Cyberpunk ASCII Banner
echo -e "${CYAN}"
echo "    ______                                              __                 "
echo "   / ____/_  __  ______  ___  _________  __  ___________/ /___  __         "
echo "  / /   / / / / / __  / / _ \/ ___/ __ \/ / / / ___/ __  / __ \/ / / /     "
echo " / /___/ /_/ / / /_/ / /  __/ /  / /_/ / /_/ / /  / /_/ / /_/ / /_/ /      "
echo " \____/\__, / /_____/  \___/_/  / .___/\__,_/_/   \__,_/\____/\__, /       "
echo "      /____/                   /_/                           /____/        "
echo -e "${NC}"
echo -e "${GREEN}[+] Mengaktifkan Cyber Security Academy Learning Portal...${NC}"

# Check if Python is installed
if ! command -v python3 &> /dev/null
then
    echo -e "${RED}[-] Python3 tidak terdeteksi! Silakan instal python3 terlebih dahulu via dnf.${NC}"
    echo "    Contoh: sudo dnf install python3"
    exit 1
fi

# Change directory to script folder location
cd "$(dirname "$0")"

# Open Web Browser automatically in background after a short delay
(
  sleep 1.5
  if command -v xdg-open &> /dev/null; then
    xdg-open "$URL"
  elif command -v firefox &> /dev/null; then
    firefox "$URL" &
  elif command -v google-chrome &> /dev/null; then
    google-chrome "$URL" &
  else
    echo -e "${YELLOW}[!] Browser tidak dapat dibuka otomatis. Silakan buka browser Anda secara manual dan akses: $URL${NC}"
  fi
) &

# Run local web server
echo -e "${GREEN}[+] Server web berjalan di: ${CYAN}$URL${NC}"
echo -e "${YELLOW}[!] Tekan CTRL + C di terminal ini untuk mematikan server.${NC}"
echo "--------------------------------------------------------"

python3 server.py
