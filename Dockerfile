FROM node:alpine

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./
COPY . .

RUN npm install -g json-server
RUN npm i

# Reactjs app
CMD ["npm", "start"]
