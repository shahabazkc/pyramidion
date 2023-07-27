# Installs Node.js image
FROM node:18-alpine

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install

# Bundle app source
COPY . /usr/src/app
# Runs the dev npm script to build & start the server
CMD npm start