# ⚡ Electric Car Backend API

A RESTful backend built with **Node.js**, **Express**, **TypeScript**, and **MongoDB** to manage and search electric car data. Includes search/filtering, basic CRUD, and CSV import functionality.

---

## 📑 Table of Contents

* [🚀 Features](#-features)
* [📦 Tech Stack](#-tech-stack)
* [📁 Project Structure](#-project-structure)
* [⚙️ Getting Started](#️-getting-started)

  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
  * [Environment Variables](#environment-variables)
  * [Build](#build)
  * [Run](#run)
* [🛠 Development Mode](#-development-mode)
* [📥 Import CSV Data](#-import-csv-data)
* [📡 API Reference](#-api-reference)

  * [List Cars](#list-cars)
  * [Get Car by ID](#get-car-by-id)
  * [Delete Car](#delete-car)
  * [Search Cars](#search-cars)
* [🧪 Sample Dataset](#-sample-dataset)
* [👩‍💻 Author](#-author)

---

## 🚀 Features

* 🔍 **Search & Filter** electric cars by any field
* 🧾 **Get Details**: View car specs by ID
* ❌ **Delete** cars from the database
* 📥 **Import** cars in bulk via CSV
* 🧱 **Modular Architecture**: clean separation of concerns
* ✅ **Type-safe** with TypeScript
* 🌐 **RESTful** API design
* 🌍 **CORS-enabled** for frontend integration

---

## 📦 Tech Stack

* **Runtime:** Node.js
* **Framework:** Express.js
* **Language:** TypeScript
* **Database:** MongoDB & Mongoose
* **CSV Parsing:** csv-parser
* **Env Management:** dotenv
* **Dev Tooling:** ts-node-dev, nodemon

---

## 📁 Project Structure

```text
/backend
└── /src
    ├── /config           # Database connection
    │   └── database.ts
    ├── /controllers      # HTTP request handlers
    │   └── car.controller.ts
    ├── /routes           # Express route definitions
    │   └── car.routes.ts
    ├── /models           # Mongoose schemas
    │   └── car.model.ts
    ├── /services         # Business logic layer
    │   └── car.service.ts
    ├── /utils            # Helper functions (e.g., data cleaning)
    │   └── dataCleaner.ts
    ├── /scripts          # Stand-alone scripts
    │   └── importCars.ts
    ├── /types            # Shared TypeScript interfaces
    │   └── car.interface.ts
    ├── app.ts            # Express app configuration
    └── server.ts         # Entry point
.env
ElectricCarData.csv
package.json
tsconfig.json
```

---

## ⚙️ Getting Started

### Prerequisites

* **Node.js** ≥ 14.x
* **npm** ≥ 6.x
* **MongoDB** instance (local or hosted)

### Installation

1. **Clone** the repo

   ```bash
   git clone https://github.com/your-username/electric-car-api.git
   cd electric-car-api
   ```

2. **Install** dependencies

   ```bash
   npm install
   ```

### Environment Variables

Create a `.env` file in the root:

```env
MONGODB_URI=your-mongodb-connection-uri
PORT=5000
```

### Build

Compile TypeScript to JavaScript:

```bash
npm run build
```

### Run

Start the server:

```bash
npm start
```

---

## 🛠 Development Mode

Run with auto-reload on file changes:

```bash
npm run dev
```

---

## 📥 Import CSV Data

Imports `ElectricCarData.csv` into MongoDB:

```bash
npm run import
```

> Ensure MongoDB is running and `.env` is configured correctly.

---

## 📡 API Reference

Base URL: `http://localhost:5000/api/cars`

### List Cars

* **Endpoint:** `GET /`
* **Description:** Fetch all cars and total count
* **Response:**

  ```json
  {
    "data": [ /* array of car objects */ ],
    "total": 123
  }
  ```

### Get Car by ID

* **Endpoint:** `GET /:id`
* **Description:** Fetch a single car by its MongoDB `_id`
* **Response:**

  ```json
  {
    "_id": "abc123",
    "Brand": "Tesla",
    "Model": "Model S",
    // ...
  }
  ```

### Delete Car

* **Endpoint:** `DELETE /:id`
* **Description:** Remove a car by ID
* **Response:**

  ```json
  {
    "message": "Deleted"
  }
  ```

### Search Cars

* **Endpoint:** `POST /search`
* **Description:** Filter cars by a given field, operator, and value
* **Body:**

  ```json
  {
    "field": "Brand",
    "operator": "contains",
    "value": "Tesla"
  }
  ```
* **Supported operators:**
  `contains`, `equals`, `startsWith`, `endsWith`, `isEmpty`
* **Response:**

  ```json
  {
    "data": [ /* matching cars */ ],
    "total": 10
  }
  ```

---

## 🧪 Sample Dataset

The `ElectricCarData.csv` file includes columns such as:

* **Brand** & **Model**
* **Acceleration (s)**
* **Top Speed (km/h)**
* **Range (km)**
* **Efficiency (Wh/km)**
* **Fast Charge (km/h)**
* **Rapid Charge**
* **Powertrain**, **Plug Type**, **Body Style**, **Segment**
* **Seats**, **Price (€)**, **Release Date**

---

## 👩‍💻 Author

Built with ❤️ by **Samiya Batool**
