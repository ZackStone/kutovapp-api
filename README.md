# kutovapp-api 

Curso: Sistemas de Informação

Instituição: Pontifícia Universidade Católica de Minas Gerais (PUCMINAS) - Unidade São Gabriel

Integrantes/Github: Mateus Fernando / mfpinheiro
                    Robson Piere / robsonpiere
                    Tiago Higino / tiagohigino
                    Vinicios Ponciano / viniciusponciano
                    Yitzhak Stone / YitzhakStone

*Para consumir a API
	- Hospedada em https://kutovapp.herokuapps.com/api
	- Esta é a raiz da API, conferir as rotas para utilizá-la

*Para rodar local
	- Faça download do Nodejs https://nodejs.org/en/
	- Clone o repositório https://github.com/YitzhakStone/kutovapp-api
	- Abra o terminal e digite: npm install (Para instalar as dependências necessárias)
	- Abra o terminal, caminhe até a pasta 'bin'
	- Execute o arquivo 'www.js': node www.js (no terminal)

*Criação de variáveis de ambiente
	sudo gedit /etc/environment
	Adicionar as linhas:
	KUTOVAPP_API_DBUSER="xxx"
	KUTOVAPP_API_DBPASS="xxx"
	Atualizar:
	sudo gedit /etc/environment
	Conferir:
	echo $KUTOVAPP_API_DBUSER
	echo $KUTOVAPP_API_DBPASS

