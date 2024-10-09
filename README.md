# bela-proxy

# Install

## 1. Dependencies

```bash
npm install

# And one of the following
npm install --save pg # Postgres
npm install --save mysql2 # MySQL
npm install --save mariadb # MariaDB
npm install --save tedious # Microsoft SQL Server
npm install --save oracledb # Oracle Database
```

## 2. Environment variables

Copy `.env.example` into `.env`

Set up with your database credentials.

`API_KEY` should be a random string.

# Run

```bash
npm run start
```
