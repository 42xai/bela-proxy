# BELA Proxy (HTTP-Tunnel)

## Overview

BELA Proxy (HTTP-Tunnel) is a Node.js application designed to connect BELA to external databases through a secure tunnel.

## Prerequisites

- Node.js (v20 or later)
- npm (usually comes with Node.js)

## Installation

1. Clone the repository

   ```bash
   git clone https://github.com/42xai/bela-proxy
   cd bela-proxy
   ```

2. Install dependencies

   ```bash
   npm install

   # And one of the following
   npm install pg # Postgres
   npm install mysql2 # MySQL
   npm install mariadb # MariaDB
   npm install tedious # Microsoft SQL Server
   npm install oracledb # Oracle Database
   ```

3. Create a `.env` file in the root directory and add your configuration

   You can see an example in `.env.example`.

   Set up with your database credentials.

   `API_KEY` should be a random string with at least 32 characters.

   `DATABASE_DRIVER` should be one of the following:

   - `postgres`
   - `mysql`
   - `mariadb`
   - `mssql`
   - `oracle`

## Usage

```bash
npm run start
```

## API Endpoints

- `GET /`: Health check
- `POST /query`: Execute a SQL query

## Logging

Logs are written to the `/logs` directory and are available in the following locations:

- Console
- `error.log` file (for error-level logs)
- `combined.log` file (for all logs)

## License

This project is licensed under the MIT License - see the LICENSE file for details.
