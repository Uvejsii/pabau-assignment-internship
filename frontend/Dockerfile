FROM node:latest

WORKDIR .

COPY ./app ./

RUN npm install

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "dev"]
