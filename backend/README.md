# Esta Api roda na AWS, portanto não é necessário rodar localmente, mas caso queira siga os seguintes passos:
    1. altere no arquivo /src/server/database/data-source.ts as informaçãoes no banco de dados de acordo com as informações passadas
    no aquirvo 'docker-compose.yuml' --> host, username, database, password e port.

    2. Rode o comando 'npm run compose:up' - para subir o database.(npm run compose:down remove o database)

    3. Certifique-se que as portas 3333, 5441, 3000 do seu localhost estão disponiveis.

    4. Rode o comando npm install.
    
    5. Para rodar a API basta rodar o comando 'npm run dev'.

# Para testar localmente os endpoints, recomendo usar a extensão ThunderClient do vscode, o arquivo thunder-collection_Records.json, contem rotas prontas de GET, GET/:id, POST, PUT, DELETE.