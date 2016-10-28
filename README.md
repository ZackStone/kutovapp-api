# kutovapp-api

## Atividade aberta - Tópicos especiais Puc Minas 2016

### Criação de uma aplicação híbrida

O objetivo desta atividade é a criação de uma aplicação híbrida relativamente simples, mas que permita uma primeira oportunidade de construção desse tipo de aplicação. Essa aplicação deverá gerenciar uma simples tabela de dados, mas de tal forma que os dados sejam agrupados por algum critério.

A aplicação escolhida para este semestre é um Gerenciador de Tarefas, isto é, uma aplicação web para gerenciar as tarefas que uma pessoa qualquer deve realizar.


## Para consumir a API
- Hospedada em https://kutovapp.herokuapps.com/api
- Esta é a raiz da API, conferir as rotas para utilizá-la

## Para rodar local
- Faça download do Nodejs https://nodejs.org/en/
- Clone o repositório https://github.com/YitzhakStone/kutovapp-api
- Abra o terminal e digite: npm install (Para instalar as dependências necessárias)
- Abra o terminal, caminhe até a pasta 'bin'
- Execute o arquivo 'www.js': node www.js (no terminal)

## Criação de variáveis de ambiente

- Editar o arquivo:
```sh
sudo gedit /etc/environment
```
- Adicionar as linhas:
```sh
export KUTOVAPP_API_DBUSER="xxx"
export KUTOVAPP_API_DBPASS="xxx"
```
- Atualizar:
```sh
sudo gedit /etc/environment
```
- Conferir:
```sh
echo $KUTOVAPP_API_DBUSER
echo $KUTOVAPP_API_DBPASS
```

## Alunos do Grupo 10

-  :kissing_heart: Mateus Fernando - [GitHub](https://github.com/mfpinheiro)
-  :sleeping:  Robson Piere - [GitHub](https://github.com/robsonpiere)
-  :neutral_face: Tiago Higino - [GitHub](https://github.com/tiagohigino)
-  :bowtie:  Vinícius Ponciano -[GitHub](https://github.com/viniciusponciano)
-  :angry:  Yitzhak Stone - [GitHub](https://github.com/YitzhakStone)

Belo Horizonte, PUC Minas - 2016
