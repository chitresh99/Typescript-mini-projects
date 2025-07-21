# TradePlace

**Disclaimer:** *This project is for experimental and educational purposes only. It is not intended for actual trading or financial advice.*

## Overview

**TradePlace** is a simple API-based tool to record and track your daily stock trades. It allows you to log stock purchase data including the stock name, amount, quantity, price per share, and total capital spent — perfect for experimenting with backend development, databases, and financial data tracking.

## Features

* Record stock trade entries via API
* Tracks capital spent from a fixed starting capital
* Built using **Node.js**, **Express**, and **PostgreSQL**
* Great for learning backend development and working with databases

## Tech Stack

* **Backend**: Node.js + Express
* **Database**: PostgreSQL (Hosted on Neon)
* **Environment Management**: `.env` file for DB connection

## API Endpoint

### `POST /tradeplace`

**Request Body** (`application/json`):

```json
{
  "stockname": "stockofyourchoice",
  "amount": 10000,
  "price_per_share": 150,
  "quantity_of_shares": 66
}
```

**Response:**

```json
{
  "message": "Details registered",
  "remaining_capital": 990100
}
```

## Database Schema

```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  stockname VARCHAR(100),
  amount NUMERIC,
  price_per_share NUMERIC,
  quantity_of_shares INTEGER,
  capitalspent NUMERIC
);
```

## Environment Variables

Create a `.env` file in the root with the following keys:

```env
PORT=3000
NEON_DB=your_postgresql_connection_string
```

## Notes

* Capital is currently tracked in-memory and resets on server restart.
* No authentication is implemented (yet).
* You can extend this project with user management, authentication, capital persistence, or a frontend dashboard.

