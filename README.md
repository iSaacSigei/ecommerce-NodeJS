# NodeJS Express API for Items CRUD Operations

This is a simple NodeJS Express API that handles CRUD operations for an products table in a PostgreSQL database. The API exposes the following routes:

- `GET /api/items` - Retrieves all items from the items table
- `GET /api/items/:id` - Retrieves a single item with the specified ID
- `POST /api/items` - Creates a new item in the items table
- `PUT /api/items/:id` - Updates an existing item with the specified ID
- `DELETE /api/items/:id` - Deletes an existing item with the specified ID

## Prerequisites

- NodeJS installed on your machine
- A PostgreSQL database with an items table

## Getting started

1. Clone the repository and navigate to the project directory.
2. Install dependencies by running the following command:
##npm start
3. Start the server by running the following command:

4. The server should now be running on port 3000. You can access the API using any REST client, such as Postman or cURL.

## API Routes

### GET /api/items

Retrieves all items from the items table.

#### Response

- `200 OK`: The request was successful, and the response body contains an array of item objects.

Example response body:

```json
[
 {
     "id": 1,
     "name": "Item 1",
     "price": 10.99,
     "discount": null,
     "sponsored": false,
     "rating": null,
     "description": "This is item 1",
     "image": null
 },
 {
     "id": 2,
     "name": "Item 2",
     "price": 5.99,
     "discount": 0.2,
     "sponsored": true,
     "rating": 4.5,
     "description": "This is item 2",
     "image": "https://example.com/image.jpg"
 }
]
