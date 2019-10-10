# KWIC

## Motivação

O código desse repositório teve como objetivo explorar os conceitos de modularização para implementação de um sistema de _Keyword in context_. For explorado também o padrão factory em node utilizando fábricas concretas para instanciar objetos de uma determinada família (módulo).

## Como executar

Após clonar o repositório, utilize o comando
>npm install
Feito isso, você pode executar a versão do programa que busca os títulos a serem indexados em um arquivo de texto usando o comando
>nodemon --exec babel-node src/app.js
Para executar a versão que busca os títulos a serem indexados da API do DBLP, utilize
>nodemon --exec babel-node src/appWithDBLP.js
e forneça o seu critério de busca no terminal.
