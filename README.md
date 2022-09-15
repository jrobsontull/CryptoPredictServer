# CryptoPredict Server

Express.js server hosting a RESTful API for accessing datasets related to cryptocurrencies. Useful for accessing our datasets and validation sets.

## Installation & Run

```bash
# Download this project
git clone https://github.com/jrobsontull/CryptoPredictServer
```

Before running the server, you need to set up the environmental variables. See the `.env.example` for reference. This server was built with **node v18.9.0**. You need node installed to run this server.

```bash
# Build and run
cd CryptoPredictServer
npm run start:prod

# API Endpoint : http://127.0.0.1:8000
```

## Structure

```
.
└── src/
    ├── index.js        // Entry point
    ├── server.js
    ├── utils
    ├── routes          // API routes
    ├── dao             // Database interfacing
    ├── controllers     // Middleman
    └── types           // Ts types
```

## API Routes

#### /projects

- `GET` : Get all projects
- `POST` : Create a new project

#### /projects/:title

- `GET` : Get a project
- `PUT` : Update a project
- `DELETE` : Delete a project

#### /projects/:title/archive

- `PUT` : Archive a project
- `DELETE` : Restore a project

#### /projects/:title/tasks

- `GET` : Get all tasks of a project
- `POST` : Create a new task in a project

#### /projects/:title/tasks/:id

- `GET` : Get a task of a project
- `PUT` : Update a task of a project
- `DELETE` : Delete a task of a project

#### /projects/:title/tasks/:id/complete

- `PUT` : Complete a task of a project
- `DELETE` : Undo a task of a project
