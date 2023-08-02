# Ippopay Password Strength Checker

This is a Node.js and React.js application that checks the strength of a password by making a POST request to the `/api/password/check` endpoint.

## Prerequisites

- Node.js (v16 or above)
- Docker (optional, for containerized deployment)

## Notes
  - You can import collection to postman from the file `ippopay.postman_collection.json`

## Getting Started

1. Clone the repository: `git clone https://github.com/shahabazkc/ippopay.git`
2. Rename the `.env.example` file to `.env` from server directory.
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

- `POST /api/password/check` - This endpoint is used for checking password strength it will return number of steps required to make it strong. Also it will store the result in the db
