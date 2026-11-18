# 💓 Life Pulse Server

![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=flat-square&logo=express&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=flat-square&logo=mysql&logoColor=white)

A lightweight **REST API** for [Life Pulse](https://github.com/abdullahaljubayer-101/life-pulse), my productivity and lifestyle mobile app. It handles user accounts and to-dos, backed by MySQL. ⚡

---

## ✨ Features

- 👤 Create users and fetch them by ID
- 🔑 Login with email and password
- ✅ Create to-dos, list a user's to-dos, mark one as done and delete it

## 🛠️ Tech stack

`Node.js` · `Express` · `MySQL (mysql2)` · `dotenv` · `nodemon`

## 🚀 Getting started

```bash
git clone https://github.com/abdullahaljubayer-101/life-pulse-server.git
cd life-pulse-server
npm install
```

Create a `.env` file with your MySQL details:

```env
MYSQL_HOST=localhost
MYSQL_USER=root
MYSQL_PASSWORD=your_password
MYSQL_DATABASE=life_pulse
```

The database needs two tables: `user` (`name`, `email`, `phone`, `password`) and `to_do` (`user_id`, `body`, `is_checked`).

Run the server:

```bash
npm run dev
```

It starts on **http://localhost:8080**.

## 📡 Endpoints

| Method | Endpoint | Description |
| ------ | -------- | ----------- |
| `POST` | `/user` | Create a user (`name`, `email`, `phone`, `password`) |
| `GET` | `/user/:id` | Get a user by ID |
| `POST` | `/login` | Log in with `email` and `password` |
| `POST` | `/todo` | Create a to-do (`todo`, `user_id`) |
| `GET` | `/todo/:user_id` | Get all to-dos for a user |
| `GET` | `/todoChecked/:todo_id` | Mark a to-do as done |
| `GET` | `/todoDelete/:todo_id` | Delete a to-do |

## 📁 Project structure

```text
life-pulse-server/
├── app.js        # Express app and routes
└── database.js   # MySQL connection pool and queries
```

---

Made by **Abdullah Al Jubayer** · [GitHub](https://github.com/abdullahaljubayer-101) · [Portfolio](https://abdullahaljubayer.com)
