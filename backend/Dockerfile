FROM node:latest

WORKDIR .

COPY ./app ./

RUN npm install

COPY ./app .

EXPOSE 5000

CMD ["node", "index.js"]
