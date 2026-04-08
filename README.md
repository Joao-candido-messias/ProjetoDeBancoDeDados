# 📚 Sistema de Biblioteca

Este projeto é uma aplicação para gerenciamento de uma biblioteca, permitindo a manipulação de dados através de um frontend moderno integrado a uma API backend.

---

## 🚀 Tecnologias utilizadas

### Frontend

* ⚛️ React
* ▲ Next.js
  
### Backend

* 🟢 Node.js
* 🚏 API REST

### Banco de Dados

* 🍃 MongoDB

---

## 📂 Estrutura do projeto

```bash
/Exercicio
 ├── BVBackend/             # Backend (API Node.js)
 ├── biblioteca-frontend/  # Frontend (Next.js)
 └── LICENSE
```

---

## ⚙️ Funcionalidades

* 📖 Cadastro de livros
* 📋 Listagem de registros
* ✏️ Edição de dados
* ❌ Remoção de itens
* 🔗 Integração completa entre frontend e backend

---

## 🔌 Comunicação

O frontend consome uma API REST criada no backend, permitindo operações CRUD com os dados armazenados no MongoDB.

---

## ▶️ Como rodar o projeto

### 1. Clone o repositório

```bash
git clone https://github.com/Joao-candido-messias/Exercicio
```

---

### 2. Rodar o backend

```bash
cd BVBackend
npm install
node server.js
```

---

### 3. Rodar o frontend

```bash
cd biblioteca-frontend
npm install
npm run dev
```

---

### 4. Configurar variáveis de ambiente

Crie um arquivo `.env` no backend:

```env
MONGO_URI=sua_string_mongodb
PORT=3000
```

---

## 🎯 Objetivo do projeto

Este projeto foi desenvolvido com o objetivo de:

* Praticar desenvolvimento fullstack
* Entender a comunicação entre frontend e backend
* Trabalhar com APIs REST
* Utilizar banco de dados NoSQL (MongoDB)

---

## 📌 Status

🟡 Em desenvolvimento

---

## 📄 Licença

Este projeto está sob a licença MIT.
