# Projeto de Formulário Dinâmico

Este é um projeto JavaScript que utiliza HTML, CSS e JavaScript para criar um formulário dinâmico que permite adicionar e remover linhas de uma tabela.

## Funcionalidades

- Adição dinâmica de linhas à tabela conforme o preenchimento do formulário.
- Remoção de linhas da tabela ao clicar no botão "X".

## Tecnologias Utilizadas

- HTML: Estrutura básica da página web e elementos do formulário.
- CSS: Estilo e formatação da página.
- JavaScript (JS): Manipulação do DOM para criar e remover linhas da tabela, validação de campos e máscara para o campo de telefone.

## Funcionamento do Código

- `updateDisplay()`: Verifica se o campo de nome está preenchido corretamente antes de criar uma nova linha na tabela.
- `createRow()`: Cria uma nova linha na tabela com os dados preenchidos no formulário e adiciona um botão de remoção.
- `remove(row)`: Remove a linha da tabela quando o botão de remoção é clicado.

## Como usar

1. Clone o repositório em sua máquina local:
2. Abra o arquivo `index.html` em um navegador da web para visualizar o formulário dinâmico.

## Estrutura do Projeto
├── index.html # Página HTML com o formulário e a tabela
├── style.css # Arquivo CSS para estilizar a página
├── index.js # Arquivo JavaScript com as funcionalidades do formulário
└── README.md # Arquivo README com informações sobre o projeto
