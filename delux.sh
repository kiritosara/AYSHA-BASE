
#!/bin/bash

# Definindo cores
AYSHAIMPACTPURALIZINE='\033[1;35m' #
AYSHAIMPACTGRAY='\033[0;37m' #
AYSHAIMPACTCYAN='\033[1;36m'
PURALIZINE='\033[1;31m' #
# Definindo O Fuso Horário Para O Brasil
export TZ=America/Sao_Paulo

# Loop Infinito
while true; do
    echo "${AYSHAIMPACTCYAN}AYSHA-BASE ੭ Auto reconexão Iniciando / Reiniciando! - $(date +'%d/%m/%Y %H:%M:%S')${PURALIZINE}"
    
    # Executando O Script NodeJs
      node index.js 
    
    # Verificando O Código De Saída
    if [[ $? -eq 0 ]]; then
        echo "${AYSHAIMPACTGRAY}Script Concluído Com Sucesso."
    else
        echo "${AYSHAIMPACTCYAN}Houve Um Erro Ao Executar O Script."
    fi
    
    # Aguardando 1 Segundo Antes De Reiniciar
    sleep 1
done
