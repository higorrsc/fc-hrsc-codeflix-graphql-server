# Demonstração de Servidor GraphQL com Node.js

Este repositório contém uma demonstração simples de um servidor GraphQL construído com Node.js. Ele serve como um ponto de partida para entender os conceitos básicos da criação de APIs GraphQL com Node.js.

## Pré-requisitos

Certifique-se de ter o Node.js e o npm (ou yarn) instalados em sua máquina. Você pode baixá-los em [https://nodejs.org/](https://nodejs.org/).

## Como executar

1. **Clone o repositório:**

    ```bash
    git clone [https://github.com/higorrsc/fc-hrsc-codeflix-graphql-server]
    cd [fc-hrsc-codeflix-graphql-server]
    ```

2. **Instale as dependências:**
    Usando npm:

    ```bash
    npm install
    ```

    Ou usando yarn:

    ```bash
    yarn install
    ```

3. **Execute o servidor:**
    Usando npm:

    ```bash
    node index.js
    ```

    O servidor GraphQL estará rodando em `http://localhost:4000`.

## O que está incluído

Este projeto de demonstração inclui:

* **Esquema GraphQL:** Uma definição básica de tipos, queries e mutations.
* **Resolvers:** Funções que fornecem os dados para cada campo no esquema GraphQL.
* **Servidor Express:** Um servidor Express.js configurado para hospedar o endpoint GraphQL (geralmente em `/graphql`).
* **GraphQL Playground:** Uma interface interativa no navegador para explorar e testar sua API GraphQL (geralmente acessível no mesmo endereço do servidor).

## Como usar

1. Abra seu navegador e acesse `http://localhost:4000`. Você deverá ver o GraphQL Playground.

2. No GraphQL Playground, você pode escrever e executar queries e mutations contra o seu servidor.

    **Exemplo de Query:**

    ```graphql
    query {
      hello
    }
    ```

    **Exemplo de Mutation (se implementada):**

    ```graphql
    mutation {
      setMessage(message: "Olá GraphQL!")
    }
    ```

3. Explore o esquema usando a aba "Docs" no lado direito do GraphQL Playground.

## Estrutura do Projeto

  ``` text
  ├── package.json
  ├── package-lock.json (ou yarn.lock)
  ├── index.js          # Arquivo principal do servidor
  ├── schema.js         # Definição do esquema GraphQL
  └── resolvers.js      # Funções de resolução para os campos do esquema
  ```
