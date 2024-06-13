# Item Management API

This repository contains an API for managing items using Express.js and Sequelize. The API provides endpoints to create, read, update, and delete items in a PostgreSQL database.

## Table of Contents

- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Database Models](#database-models)
- [Repository Layer](#repository-layer)
- [Controller Layer](#controller-layer)
- [Routes](#routes)
- [License](#license)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/item-management-api.git
   cd item-management-api
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables by creating or editing a `.env` file in the root directory:
   ```env
   DB=your_database_name
   USER=your_database_user
   PASS=your_database_password
   HOST=your_database_host
   PORT=your_database_port
   ```

## Configuration

The application uses environment variables for configuration. Ensure the `.env` file is correctly set up with your database credentials.

## Usage

1. Start the server:
   ```bash
   npm start
   ```

2. The server will be running at `http://127.0.0.1:8000`.

## API Endpoints

### Get All Items

- **Endpoint**: `/elements`
- **Method**: `GET`
- **Description**: Retrieves all items.
- **Response**:
  ```json
  {
    "status": "OK",
    "message": "Items successfully retrieved",
    "data": [ ... ]
  }
  ```

### Get One Item

- **Endpoint**: `/element/:id`
- **Method**: `GET`
- **Description**: Retrieves a single item by its ID.
- **Response**:
  ```json
  {
    "status": "OK",
    "message": "Item successfully retrieved",
    "data": { ... }
  }
  ```

### Create an Item

- **Endpoint**: `/element`
- **Method**: `POST`
- **Description**: Creates a new item.
- **Request Body**:
  ```json
  {
    "name": "Item Name",
    "usage": "Item Usage"
  }
  ```
- **Response**:
  ```json
  {
    "status": "OK",
    "message": "Item successfully created",
    "data": { ... }
  }
  ```

### Delete an Item

- **Endpoint**: `/element/:id`
- **Method**: `DELETE`
- **Description**: Deletes an item by its ID.
- **Response**:
  ```json
  {
    "status": "OK",
    "message": "Item successfully deleted"
  }
  ```

### Update an Item

- **Endpoint**: `/element/:id`
- **Method**: `PATCH`
- **Description**: Updates an item by its ID.
- **Request Body**:
  ```json
  {
    "id": 1,
    "name": "Updated Item Name",
    "usage": "Updated Item Usage"
  }
  ```
- **Response**:
  ```json
  {
    "status": "OK",
    "message": "Item successfully updated"
  }
  ```

## Database Models

The `Item` model represents the items in the database. It includes the following fields:

- `id`: Auto-incremented primary key.
- `name`: Name of the item.
- `usage`: Description of the item's usage.

```typescript
import { Model, Column, Table, DataType, PrimaryKey, AutoIncrement } from "sequelize-typescript";

@Table({
    tableName: "items",
})
export class Item extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column({
        type: DataType.INTEGER,
    })
    id!: number;

    @Column({
        type: DataType.STRING(100),
    })
    name!: string;

    @Column({
        type: DataType.STRING(250),
    })
    usage!: string;
}
```

## Repository Layer

The `RItem` class handles all database operations related to items.

```typescript
class RItem {
    async get_all_items(): Promise<Item[] | undefined> { ... }
    async get_item(itemId: number): Promise<Item | undefined> { ... }
    async add_item(item: Item): Promise<Item | undefined> { ... }
    async delete_item(itemId: number): Promise<void> { ... }
    async update_item(item: Item): Promise<void> { ... }
}
```

## Controller Layer

The `Controller` class handles the logic for each API endpoint.

```typescript
export class Controller {
    async get_all_elements(req: Request, res: Response): Promise<void> { ... }
    async get_one_element(req: Request, res: Response): Promise<void> { ... }
    async post_one_element(req: Request, res: Response): Promise<void> { ... }
    async delete_one_element(req: Request, res: Response): Promise<void> { ... }
    async patch_one_element(req: Request, res: Response): Promise<void> { ... }
}
```

## Routes

The `Routes` class sets up the API endpoints and connects them to the controller methods.

```typescript
import express, { Router } from 'express';
import { Controller } from '../controllers/Controller';

export class Routes {
    private router: Router;
    private ctlr: Controller;

    constructor() {
        this.router = express.Router();
        this.ctlr = new Controller();
        this.routes();
    }

    routes(): void {
        this.router.get("/elements", this.ctlr.get_all_elements);
        this.router.get("/element/:id", this.ctlr.get_one_element);
        this.router.post("/element", this.ctlr.post_one_element);
        this.router.delete("/element/:id", this.ctlr.delete_one_element);
        this.router.patch("/element/:id", this.ctlr.patch_one_element);
    }

    public getRouter(): Router {
        return this.router;
    }
}
```

## License

This project is licensed under the MIT License.