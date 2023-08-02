# Pyramidion Assignment

The Pyramidion Blogging Platform enables users to create, view, and explore a dynamic collection of blogs.

## Prerequisites

- Node.js (v16 or above)
- Docker (optional, for containerized deployment)

## Notes
  - You can import collection to postman from the file `pyramidion.postman_collection.json`

## Getting Started

1. Clone the repository: `git clone https://github.com/shahabazkc/pyramidion.git`
2. Rename the `.env.example` file to `.env` from server directory. (You can use MONGO_URI="mongodb://db:27017/pyramidion" for running in docker)
3. Install the dependencies from server and client directory (For running server without docker. If you are using docker you can skip this step) 
```bash
   npm install
```
4. Install Mongodb if not installed (For running server without docker. If you are using docker you can skip this step) 
 
## Usage

To start the project without docker, run the following command from both client and server
```bash
   npm start
```

To run the server in development mode with automatic restart on file changes, use the following command from server directory:
```bash
   npm run dev
```

<h3> OR (with docker) - Do this from root directory of the project  </h3>

```bash
  docker-compose up
```

## API Endpoints

List the available API endpoints and provide a brief description for each:

- `POST /api/products/` - This endpoint is used for Creating a product
- `GET /api/products/` - This endpoint is used to get all the products
- `GET /api/products/:id` - This endpint is used to get a product
