FROM node:18-alpine

WORKDIR /usr/src/app

# Copy only package.json and package-lock.json first
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the client code
COPY  . .

# Build the React app
RUN npm run build

# ...

CMD ["npm", "start"]
