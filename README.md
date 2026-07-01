# Sistema de Cadastro de Usuários

Um sistema completo de cadastro de usuários desenvolvido com **React + Vite** no frontend e **Node.js + Prisma** no backend, permitindo realizar operações de cadastro, consulta, edição e exclusão de usuários utilizando um banco de dados.

## Tecnologias Utilizadas

### Frontend
- React
- Vite
- React Router DOM
- Axios
- Bootstrap Icons
- CSS

### Backend
- Node.js
- Express
- Prisma ORM

### Banco de Dados
- MySQL

---

## Funcionalidades

- Cadastro de usuários
- Listagem de usuários
- Atualização de usuários
- Exclusão de usuários
- Integração entre frontend e backend
- Persistência dos dados em banco de dados

---

## Estrutura do Projeto

```text
projeto/
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   ├── prisma/
│   ├── routes/
│   ├── controllers/
│   ├── package.json
│   └── server.js
│
└── README.md
```

---

## Instalação

### Clone o repositório

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
```

---

## Frontend

Entre na pasta do frontend:

```bash
cd frontend
```

Instale as dependências:

```bash
npm install
```

Execute o projeto:

```bash
npm run dev
```

---

## Backend

Entre na pasta do backend:

```bash
cd backend
```

Instale as dependências:

```bash
npm install
```

Configure o arquivo `.env` com a conexão do banco de dados:

```env
DATABASE_URL="mysql://usuario:senha@localhost:3306/nome_do_banco"
```

Execute as migrações do Prisma:

```bash
npx prisma migrate dev
```

Gere o Prisma Client:

```bash
npx prisma generate
```

Inicie o servidor:

```bash
npm run dev
```

---

## Banco de Dados

Este projeto utiliza o **Prisma ORM** para comunicação com o banco de dados MySQL.

Sempre que houver alterações no schema execute:

```bash
npx prisma migrate dev
```

---

## API

### Usuários

| Método | Endpoint | Descrição |
|---------|----------|-----------|
| GET | /usuarios | Lista todos os usuários |
| GET | /usuarios/:id | Busca um usuário |
| POST | /usuarios | Cadastra um usuário |
| PUT | /usuarios/:id | Atualiza um usuário |
| DELETE | /usuarios/:id | Remove um usuário |

---

## Autor

Desenvolvido por **Teo Kio**.

GitHub:
https://github.com/seu-usuario

LinkedIn:
https://linkedin.com/in/seu-perfil

---

## Licença

Este projeto é destinado para fins de estudo e aprendizado.