FROM node:alpine

WORKDIR /app

RUN npm install -g json-server

COPY package.json ./
COPY package-lock.json ./
COPY . .

RUN npm i

# Reactjs app
CMD ["npm", "start"]
