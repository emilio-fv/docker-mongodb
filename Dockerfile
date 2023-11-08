FROM node:latest

RUN mkdir /app

WORKDIR /app

COPY package*.json ./

RUN npm i -g nodemon

COPY . .

EXPOSE 3000

CMD [ "npm", "run", "dev" ]