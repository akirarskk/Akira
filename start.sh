#!/bin/sh
NOCOLOR='\033[0m'
PURPLE='\033[1;35m'
BLUE='\033[1;34m'
GREEN='\033[1;32m'

while true; do

printf "${PURPLE}🌟 Sistema iniciando, aguarde um segundinho rsrs...${NOCOLOR}\n"

node connect.js sim

printf "${BLUE}⏳ Programa fechado! Reiniciando aguarde rs...${NOCOLOR}\n"

sleep 0

done