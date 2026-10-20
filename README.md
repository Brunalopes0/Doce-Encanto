# 🍰 Doce Encanto

<p align="center">
  <strong>Os melhores bolos e cupcakes que te encantam! 💗</strong>
</p>

<p align="center">
  Uma aplicação web para apresentar doces, explorar sabores e facilitar o contato dos clientes com a doceria.
</p>

<p align="center">
  <a href="https://doce-encanto-front.vercel.app/">🌐 Acessar aplicação</a>
</p>

---

## 📌 Sobre o projeto

A **Doce Encanto** é um projeto de desenvolvimento web criado para simular a presença digital de uma doceria, proporcionando aos clientes uma experiência agradável na descoberta de bolos e cupcakes.

O projeto foi desenvolvido com foco na prática de desenvolvimento Full Stack, explorando a construção de uma interface web, a integração com uma API REST e o acesso a dados armazenados em um banco de dados relacional.

Além de apresentar os produtos, a aplicação busca tornar a navegação simples e facilitar o contato entre os clientes e a doceria.

## ✨ Funcionalidades

- 🍰 **Catálogo de doces:** apresentação dos produtos disponíveis.
- 🔎 **Busca e filtros:** auxílio na localização dos doces desejados.
- 💬 **Contato pelo WhatsApp:** caminho para facilitar o atendimento aos clientes.
- 📱 **Interface responsiva:** adaptação da experiência a diferentes tamanhos de tela.
- 🔗 **Integração com API REST:** comunicação entre o front-end e o back-end.
- 🗄️ **Persistência de dados:** utilização de banco de dados para armazenar as informações dos produtos.

> Algumas funcionalidades podem evoluir conforme o desenvolvimento do projeto.

## 🛠️ Tecnologias utilizadas

### Front-end
- HTML5
- CSS3
- JavaScript
- Vercel — hospedagem da aplicação web

### Back-end
- Node.js
- TypeScript
- Fastify
- MySQL
- Railway — hospedagem da API e do banco de dados

## 🏗️ Arquitetura do projeto

A aplicação foi organizada com o front-end e o back-end separados, permitindo que cada parte seja desenvolvida e mantida de forma independente.

```text
Doce Encanto
│
├── Front-end
│   ├── Interface com HTML
│   ├── Estilização com CSS
│   └── Interações com JavaScript
│
└── Back-end
    ├── API REST com Fastify
    ├── Rotas desenvolvidas em TypeScript
    └── Banco de dados MySQL
```

### 🔄 Fluxo de comunicação

1. O usuário acessa a aplicação publicada na Vercel.
2. O JavaScript do front-end solicita os dados dos produtos à API.
3. O back-end processa a requisição e consulta o banco de dados MySQL.
4. A API retorna os dados em formato JSON.
5. O front-end utiliza as informações recebidas para apresentar os produtos na interface.

## 🌐 Acesse o projeto

| Recurso | Link |
|---|---|
| Aplicação web | [Doce Encanto — Vercel](https://doce-encanto-front.vercel.app/) |
| API de produtos | [Endpoint `/doces`](https://doce-encanto-production-4878.up.railway.app/doces) |

A API disponibiliza a rota `GET /doces`, que retorna os dados dos produtos em formato JSON.

## 🚀 Executando o projeto localmente

### Pré-requisitos

- Git
- Node.js e npm
- MySQL
- Repositórios do front-end e do back-end

### 1. Clone os repositórios

Clone o repositório do front-end e o do back-end separadamente, utilizando suas respectivas URLs do GitHub.

### 2. Configure o back-end

Entre na pasta do back-end, instale as dependências e configure as variáveis de ambiente necessárias para a conexão com o banco de dados.

```bash
npm install
```

Crie um arquivo `.env` com as configurações do banco de dados, seguindo os nomes de variáveis esperados pelo projeto.

### 3. Configure o front-end

Configure a variável de ambiente utilizada para indicar a URL da API:

```env
VITE_BACKEND=http://localhost:PORTA/doces
```

Substitua `PORTA` pela porta configurada para a API local. Se o front-end utilizar Vite, reinicie o servidor de desenvolvimento após alterar o arquivo `.env`.

### 4. Inicie
